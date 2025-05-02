import './style.css';
import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';

function fadeTransition(callback) {
  const content = document.getElementById('content');
  content.classList.add('fade-out');
  setTimeout(() => {
    callback();
    content.classList.remove('fade-out');
    content.classList.add('fade-in');
    setTimeout(() => content.classList.remove('fade-in'), 300);
  }, 200);
}

function init() {
  const homeBtn = document.getElementById('home-btn');
  const menuBtn = document.getElementById('menu-btn');
  const contactBtn = document.getElementById('contact-btn');

  homeBtn.addEventListener('click', () => fadeTransition(loadHome));
  menuBtn.addEventListener('click', () => fadeTransition(loadMenu));
  contactBtn.addEventListener('click', () => fadeTransition(loadContact));

  loadHome();
}

document.addEventListener('DOMContentLoaded', init);
