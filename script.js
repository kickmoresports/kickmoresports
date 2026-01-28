// Toggle navigation menu on small screens
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });

  // Contact form submit handler (basic demo, no backend)
  const form = document.getElementById('contact-form');
  const formMessage = document.getElementById('form-message');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Simple validation already done by HTML required attribute
    formMessage.style.color = 'green';
    formMessage.textContent = 'Thank you for contacting us! We will get back to you soon.';

    // Reset form
    form.reset();

    // Hide message after 5 seconds
    setTimeout(() => {
      formMessage.textContent = '';
    }, 5000);
  });
});
