// shared.js - Shared scripts for Ken Pham portfolio

// Back to Top button logic
export function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;
  function toggleBtn() {
    if(window.scrollY > 300) { btn.style.display = 'flex'; btn.style.opacity = '1'; } else { btn.style.opacity = '0'; setTimeout(()=>{btn.style.display='none';},200); }
  }
  window.addEventListener('scroll', toggleBtn);
  btn.addEventListener('click', ()=>{ window.scrollTo({top:0,behavior:'smooth'}); btn.blur(); });
  btn.addEventListener('keydown', e=>{ if(e.key==='Enter'||e.key===' '){ e.preventDefault(); window.scrollTo({top:0,behavior:'smooth'}); btn.blur(); }});
}

// Reading progress bar
export function initProgressBar() {
  const progressBar = document.getElementById('progress-bar');
  if (!progressBar) return;
  function updateProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    progressBar.style.width = progress + '%';
  }
  window.addEventListener('scroll', updateProgress);
  updateProgress();
}

// Call these in your page scripts as needed:
// import { initBackToTop, initProgressBar } from '/scripts/shared.js';
// initBackToTop();
// initProgressBar();
