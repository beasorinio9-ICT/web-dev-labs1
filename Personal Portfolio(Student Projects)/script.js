// scripts.js - FAQ toggle, contact demo, smooth scroll, back-to-top
document.addEventListener('DOMContentLoaded', function(){
  // FAQ toggle
  document.querySelectorAll('.faq-question').forEach(q=>{
    q.addEventListener('click', ()=>{
      const a = q.nextElementSibling;
      if(!a) return;
      const isOpen = a.style.display === 'block';
      document.querySelectorAll('.faq-answer').forEach(x=>x.style.display='none');
      a.style.display = isOpen ? 'none' : 'block';
    });
  });

  // Contact demo form
  const contactForm = document.getElementById('contact-form');
  if(contactForm){
    contactForm.addEventListener('submit', function(e){
      e.preventDefault();
      const name = document.getElementById('c-name').value || 'Friend';
      const result = document.getElementById('contact-result');
      result.textContent = `Thanks ${name}! This is a demo contact form. Your message was not sent (frontend demo).`;
      result.style.padding='12px';
      result.style.background='#fff0f6';
      result.style.borderRadius='10px';
      result.style.marginTop='10px';
    });
  }

  // Back to top button
  const back = document.getElementById('backTop');
  window.addEventListener('scroll', ()=>{
    if(window.scrollY > 300) back.style.display='block'; else back.style.display='none';
  });
  back.addEventListener('click', ()=> window.scrollTo({top:0, behavior:'smooth'}));

  // smooth for internal links with #
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      e.preventDefault();
      const t = document.querySelector(this.getAttribute('href'));
      if(t) t.scrollIntoView({behavior:'smooth'});
    });
  });
});
