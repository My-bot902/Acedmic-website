require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const path = require('path');

const app = express();
// Tracker state can be larger than Express's 100kb default
app.use(express.json({ limit: '4mb' }));
app.use(cookieParser());

// 1. Serverless-Safe MongoDB Connection (Cached)
let isConnected = false;
async function connectDB() {
  if (isConnected && mongoose.connection.readyState === 1) return;
  await mongoose.connect(process.env.MONGO_URI);
  isConnected = true;
  console.log('✅ MongoDB Connected Successfully!');
}

// 2. Database Schemas (Admin, Students, Tracker)
const adminSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});
const Admin = mongoose.models.Admin || mongoose.model('Admin', adminSchema);

const studentSchema = new mongoose.Schema({
  studentId: String,
  name: { type: String, required: true },
  classSection: { type: String, required: true },
  registrationDate: { type: String, default: () => new Date().toISOString().split('T')[0] },
  feeStatus: { type: String, enum: ['PAID', 'PENDING'], default: 'PENDING' },
  feeAmount: { type: Number, default: 0 }
});
const Student = mongoose.models.Student || mongoose.model('Student', studentSchema);

// Performance Tracker: the whole tracker state (years, months, roster, weekly marks)
// is stored as one JSON string. This keeps the schema flexible and avoids MongoDB
// problems with user-typed keys (e.g. a year named "2026.27" contains a dot).
const trackerSchema = new mongoose.Schema(
  {
    key: { type: String, required: true, unique: true, default: 'main' },
    state: { type: String, required: true }
  },
  { timestamps: true }
);
const TrackerData = mongoose.models.TrackerData || mongoose.model('TrackerData', trackerSchema);

// Default Admin Sync Function
async function ensureDefaultAdmin() {
  await connectDB();
  if (!process.env.ADMIN_USER || !process.env.ADMIN_PASS) return;
  const existing = await Admin.findOne({ username: process.env.ADMIN_USER });
  if (!existing) {
    const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASS, 10);
    await Admin.create({
      username: process.env.ADMIN_USER,
      password: hashedPassword
    });
    console.log(`🔐 Admin Created -> User: ${process.env.ADMIN_USER}`);
  }
}

// Har request se pehle DB connection ensure karein
app.use(async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (err) {
    console.error('❌ DB Middleware Error:', err);
    res.status(500).json({ success: false, message: 'Database connection failed' });
  }
});

// 3. Security Guard (Middleware)
function verifyAdmin(req, res, next) {
  const token = req.cookies.admin_token;
  if (!token) {
    if (req.path.startsWith('/api/')) {
      return res.status(401).json({ success: false, message: 'Unauthorized' });
    }
    return res.redirect('/login.html');
  }

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.admin = verified;
    next();
  } catch (err) {
    res.clearCookie('admin_token');
    if (req.path.startsWith('/api/')) {
      return res.status(401).json({ success: false, message: 'Session expired' });
    }
    return res.redirect('/login.html');
  }
}

// 4. Protected Pages (must stay BEFORE express.static)
app.get(['/dashboard', '/dashboard.html'], verifyAdmin, (req, res) => {
  res.sendFile(path.join(process.cwd(), 'public', 'dashboard.html'));
});

app.get(['/tracker', '/tracker.html'], verifyAdmin, (req, res) => {
  res.sendFile(path.join(process.cwd(), 'public', 'tracker.html'));
});

// Public folder ki baaqi files serve karein
app.use(express.static(path.join(process.cwd(), 'public')));

// 5. Login & Logout APIs
app.post('/api/login', async (req, res) => {
  try {
    await ensureDefaultAdmin();
    const { username, password } = req.body;
    const admin = await Admin.findOne({ username: username || process.env.ADMIN_USER });

    if (!admin) {
      return res.status(401).json({ success: false, message: 'Ghalat Username ya Password!' });
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: 'Ghalat Username ya Password!' });
    }

    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.cookie('admin_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/'
    });
    res.json({ success: true });
  } catch (err) {
    console.error('Login Error:', err);
    res.status(500).json({ success: false, message: 'Server error during login' });
  }
});

app.post('/api/logout', (req, res) => {
  res.clearCookie('admin_token', { path: '/' });
  res.json({ success: true });
});

// 6. Student & Fees Management APIs
app.get('/api/students', verifyAdmin, async (req, res) => {
  const students = await Student.find().sort({ _id: -1 });
  res.json(students);
});

app.post('/api/students', verifyAdmin, async (req, res) => {
  const count = await Student.countDocuments();
  const newStudent = await Student.create({
    studentId: `#${String(count + 1).padStart(3, '0')}`,
    name: req.body.name,
    classSection: req.body.classSection,
    feeStatus: req.body.feeStatus || 'PENDING',
    feeAmount: req.body.feeAmount || 0
  });
  res.json({ success: true, student: newStudent });
});

app.put('/api/students/:id', verifyAdmin, async (req, res) => {
  const updated = await Student.findByIdAndUpdate(
    req.params.id,
    { feeStatus: req.body.feeStatus },
    { new: true }
  );
  res.json({ success: true, student: updated });
});

app.delete('/api/students/:id', verifyAdmin, async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

// 7. Performance Tracker APIs
app.get('/api/tracker', verifyAdmin, async (req, res) => {
  try {
    const doc = await TrackerData.findOne({ key: 'main' });
    if (!doc) return res.json({ success: true, data: null }); // nothing saved yet
    res.json({ success: true, data: JSON.parse(doc.state), updatedAt: doc.updatedAt });
  } catch (err) {
    console.error('Tracker GET Error:', err);
    res.status(500).json({ success: false, message: 'Could not load tracker data' });
  }
});

app.post('/api/tracker', verifyAdmin, async (req, res) => {
  try {
    const data = req.body && req.body.data;
    const valid =
      data &&
      typeof data === 'object' &&
      data.years && typeof data.years === 'object' && !Array.isArray(data.years) &&
      Array.isArray(data.students);
    if (!valid) {
      return res.status(400).json({ success: false, message: 'Invalid tracker data' });
    }
    const doc = await TrackerData.findOneAndUpdate(
      { key: 'main' },
      { $set: { state: JSON.stringify(data) } },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );
    res.json({ success: true, updatedAt: doc.updatedAt });
  } catch (err) {
    console.error('Tracker POST Error:', err);
    res.status(500).json({ success: false, message: 'Could not save tracker data' });
  }
});

// Local server start (Vercel isay ignore kar ke module.exports use karega)
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
}

module.exports = app;
