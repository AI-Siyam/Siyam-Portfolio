document.addEventListener('DOMContentLoaded', () => {

  // 1. Animated Number Counter (For stats on About page)
  const counters = document.querySelectorAll('.counter');

  if (counters.length > 0) {
    counters.forEach(counter => {
      const targetNum = parseInt(counter.getAttribute('data-target'));
      let current = 0;
      const duration = 1800;
      const stepTime = 20;
      const increment = targetNum / (duration / stepTime);

      const timer = setInterval(() => {
        current += increment;
        if (current >= targetNum) {
          counter.innerText = targetNum + '+';
          clearInterval(timer);
        } else {
          counter.innerText = Math.ceil(current) + '+';
        }
      }, stepTime);
    });
  }

  // 2. Contact Form Submission Handler
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you! Your message has been submitted successfully.');
      contactForm.reset();
    });
  }
});