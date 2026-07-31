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


  // 3. 3D Mouse Tilt Effect — Profile Image Only
  // const profileCircle = document.querySelector('.profile-circle');

  // if (profileCircle) {

  //   profileCircle.addEventListener('mousemove', (e) => {

  //     const rect = profileCircle.getBoundingClientRect();

  //     const x = e.clientX - rect.left;
  //     const y = e.clientY - rect.top;

  //     const centerX = rect.width / 2;
  //     const centerY = rect.height / 2;

  //     const rotateY = ((x - centerX) / centerX) * 7;
  //     const rotateX = ((centerY - y) / centerY) * 7;

  //     profileCircle.style.transform =
  //       `perspective(1000px)
  //      rotateX(${rotateX}deg)
  //      rotateY(${rotateY}deg)
  //      scale(1.03)`;

  //     profileCircle.style.boxShadow =
  //       `${-rotateY * 1.5}px ${rotateX * 1.5}px 25px rgba(0, 0, 0, 0.18)`;
  //   });


  //   // Return to normal
  //   profileCircle.addEventListener('mouseleave', () => {

  //     profileCircle.style.transform =
  //       'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';

  //     profileCircle.style.boxShadow = 'none';
  //   });
  // }

});