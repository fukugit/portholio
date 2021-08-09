import '../css/style.scss';

// In case of using url() in sass file, this import steatment is necessary.  
// But I have no idea why it is neccesry to use image file in sass.  
import '../img/balloon.png'
import '../img/cloud.png'
import '../img/balloon-top.png'
import '../img/cloud-top.png'
import '../img/wind.png'
import '../img/icon-github.png'
import '../img/icon-twitter.png'
import '../img/icon-codepen.png'

import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
// Webfonts
import '@fortawesome/fontawesome-free/webfonts/fa-regular-400.ttf';

const introduction = document.getElementById('box-introduction');
const hugo = document.getElementById('box-hugo');
const css = document.getElementById('box-css');
const backend = document.getElementById('box-backend');
const enjoy = document.getElementById('box-enjoy');
const acknowledgement = document.getElementById('box-acknowledgement');
window.addEventListener('scroll', function () {
  scrollRotate('wind1', 2);
  scrollRotate('wind2', 1);
  scrollRotate('wind3', 3);
  const value = window.scrollY;
  introduction.style.left = (value - 1200) * 0.3 + 'px';
  hugo.style.left = (value - 2700) * 0.3 + 'px';
  css.style.left = (value - 2200 * 2) * 0.3 + 'px';
  backend.style.left = (value - 2000 * 3) * 0.3 + 'px';
  enjoy.style.left = (value - 1900 * 4) * 0.3 + 'px';
  acknowledgement.style.left = (value - 1850 * 5) * 0.3 + 'px';
});

function scrollRotate(id, rotateValue) {
  let image = document.getElementById(id);
  image.style.transform = "rotate(" + window.pageYOffset/rotateValue + "deg)";
}
