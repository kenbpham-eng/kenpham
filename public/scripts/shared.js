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

// Lightbox gallery
export function initLightbox() {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = document.querySelector('.lightbox-close');
  const prevBtn = document.querySelector('.lightbox-prev');
  const nextBtn = document.querySelector('.lightbox-next');
  const galleryImages = document.querySelectorAll('.gallery-grid img');
  if (!lightbox || !lightboxImg || !closeBtn || !prevBtn || !nextBtn || !galleryImages.length) return;
  let currentIndex = 0;

  function openLightbox(index) {
    currentIndex = index;
    const img = galleryImages[index];
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    openLightbox(currentIndex);
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % galleryImages.length;
    openLightbox(currentIndex);
  }

  galleryImages.forEach((img, index) => {
    img.addEventListener('click', () => openLightbox(index));
  });

  closeBtn.addEventListener('click', closeLightbox);
  prevBtn.addEventListener('click', showPrev);
  nextBtn.addEventListener('click', showNext);

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showPrev();
    if (e.key === 'ArrowRight') showNext();
  });
}

// Call these in your page scripts as needed:
// import { initBackToTop, initProgressBar, initLightbox } from '/scripts/shared.js';
// initBackToTop();
// initProgressBar();
// initLightbox();
