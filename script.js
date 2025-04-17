
// Toggle-Menü
const toggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

toggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Darkmode Toggle
const darkmodeToggles = document.querySelectorAll('.darkmode-toggle');

function setDarkmode(state) {
  if (state) {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'true');
  } else {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode', 'false');
  }
}

darkmodeToggles.forEach(button => {
  button.addEventListener('click', () => {
    const isDark = document.body.classList.contains('darkmode');
    setDarkmode(!isDark);
  });
});

// Beim Laden prüfen
window.addEventListener('DOMContentLoaded', () => {
  const savedMode = localStorage.getItem('darkmode');
  if (savedMode === 'true') {
    document.body.classList.add('darkmode');
  }
});
