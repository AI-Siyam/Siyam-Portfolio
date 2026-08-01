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


   // 2. Contact Form Submission Handler (Formspree)
  const contactForm = document.getElementById('contactForm');

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      try {
        const response = await fetch(contactForm.action, {
          method: 'POST',
          body: new FormData(contactForm),
          headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
          alert('Thank you! Your message has been submitted successfully.');
          contactForm.reset();
        } else {
          alert('Something went wrong. Please try again or email me directly.');
        }
      } catch (error) {
        alert('Network error. Please try again or email me directly.');
      }
    });
  }

});