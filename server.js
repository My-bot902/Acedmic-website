require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const path = require('path');

const app = express();
app.use(express.json());
app.use(cookieParser());

// 1. MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB Connected Successfully!'))
  .catch(err => console.error('❌ MongoDB Connection Error:', err));

// 2. Database Schemas (Admin & Students)
const adminSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});
const Admin = mongoose.model('Admin', adminSchema);

const studentSchema = new mongoose.Schema({
  studentId: String,
  name: { type: String, required: true },
  classSection: { type: String, required: true },
  registrationDate: { type: String, default: () => new Date().toISOString().split('T')[0] },
  feeStatus: { type: String, enum: ['PAID', 'PENDING'], default: 'PENDING' },
  feeAmount: { type: Number, default: 0 }
});
const Student = mongoose.model('Student', studentSchema);

// Pehli baar server chalne par Default Admin Account (Encrypted Password ke saath) banayein
async function createDefaultAdmin() {
  const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASS, 10);
  await Admin.findOneAndUpdate(
    { username: process.env.ADMIN_USER },
    { password: hashedPassword },
    { upsert: true, new: true }
  );
  console.log(`🔐 Admin Password Synced -> User: ${process.env.ADMIN_USER}`);
}
createDefaultAdmin();


// 3. Security Guard (Middleware) - Bina Login Dashboard Rokne ke Liye
function verifyAdmin(req, res, next) {
  const token = req.cookies.admin_token;
  if (!token) return res.redirect('/login.html');

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.admin = verified;
    next();
  } catch (err) {
    res.clearCookie('admin_token');
    return res.redirect('/login.html');
  }
}

// 4. Protected Dashboard Route (Direct URL se kholne par bhi login mangega)
app.get('/dashboard.html', verifyAdmin, (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'dashboard.html'));
});

// Public folder ki baaqi files serve karein
app.use(express.static(path.join(__dirname, 'public')));

// 5. Login & Logout APIs
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  const admin = await Admin.findOne({ username: username || process.env.ADMIN_USER });

  if (!admin) return res.status(401).json({ success: false, message: 'Ghalat Username ya Password!' });

  const isMatch = await bcrypt.compare(password, admin.password);
  if (!isMatch) return res.status(401).json({ success: false, message: 'Ghalat Username ya Password!' });

  const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
  res.cookie('admin_token', token, { httpOnly: true, sameSite: 'strict' });
  res.json({ success: true });
});

app.post('/api/logout', (req, res) => {
  res.clearCookie('admin_token');
  res.json({ success: true });
});

// 6. Student & Fees Management APIs (Sirf Logged-in Admin ke Liye)
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

// Server Start
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
module.exports = app;
