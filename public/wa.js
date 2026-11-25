(function(){
  var root=document.documentElement;
  function store(k,v){try{if(v===undefined)return localStorage.getItem(k);localStorage.setItem(k,v)}catch(e){return null}}
  function setTheme(t){
    root.setAttribute('data-theme',t);store('wa_theme',t);
    var b=document.getElementById('themeBtn');
    if(b)b.innerHTML=t==='dark'?'<i class="fa-solid fa-sun"></i>':'<i class="fa-solid fa-moon"></i>';
  }
  window.WA={store:store};
  setTheme(store('wa_theme')==='light'?'light':'dark');
  document.addEventListener('DOMContentLoaded',function(){
    setTheme(root.getAttribute('data-theme'));
    var b=document.getElementById('themeBtn');
    if(b)b.addEventListener('click',function(){setTheme(root.getAttribute('data-theme')==='dark'?'light':'dark')});
    // stagger + reveal
    document.querySelectorAll('[data-stagger]').forEach(function(p){
      Array.prototype.forEach.call(p.children,function(c,i){c.classList.add('rv');c.style.setProperty('--d',(i*0.1)+'s')});
    });
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});
    window.WA.observe=function(){document.querySelectorAll('.rv:not(.in)').forEach(function(el){io.observe(el)})};
    window.WA.observe();
  });
  // right-click protection
  document.addEventListener('contextmenu',function(e){e.preventDefault()});
  // toasts: type = ok | info | err
  window.toast=function(msg,type){
    type=type||'ok';
    var box=document.getElementById('toasts');
    if(!box){box=document.createElement('div');box.id='toasts';document.body.appendChild(box)}
    var ico={ok:'fa-circle-check',info:'fa-circle-info',err:'fa-triangle-exclamation'}[type];
    var t=document.createElement('div');t.className='toast '+type;t.setAttribute('role','alert');
    var i=document.createElement('i');i.className='fa-solid '+ico;
    var s=document.createElement('span');s.textContent=msg;
    t.appendChild(i);t.appendChild(s);box.appendChild(t);
    setTimeout(function(){t.classList.add('out');setTimeout(function(){t.remove()},400)},type==='err'?5200:3800);
  };
})();
