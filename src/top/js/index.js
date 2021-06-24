import '../css/style.scss';

const introduction = document.getElementById('box-introduction');
const hugo = document.getElementById('box-hugo');
const sns = document.getElementById('box-sns');
window.addEventListener('scroll', function () {
  const value = window.scrollY;
  introduction.style.left = value * 0.3 + 'px';
  hugo.style.left = (value - 3500) * 0.3 + 'px';
  sns.style.left = (value - 3500 * 2) * 0.3 + 'px';
});
