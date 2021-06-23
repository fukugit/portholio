import '../css/style.scss';

const red = document.getElementById('box-introduction');
window.addEventListener('scroll', function () {
  const value = window.scrollY;
  // red.style.top = value * 0.5 + 'px';
  red.style.left = value * 0.3 + 'px';
  // red.style.width = value * 1 + 'px';
  // red.style.height = value * 1 + 'px';
});
