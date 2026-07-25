// assets/js/nav.js

document.addEventListener('DOMContentLoaded', function () {
  const toggleBtn = document.querySelector('.mobile-nav-toggle');
  const nav = document.querySelector('.navbar-nav');
  if (!toggleBtn || !nav) return;

  toggleBtn.addEventListener('click', function () {
    nav.classList.toggle('active');
  });

  // Close menu when a link is clicked (mobile UX)
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => nav.classList.remove('active'));
  });
});
