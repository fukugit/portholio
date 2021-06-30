import '../css/style.scss';

// In case of using url() in sass file, this import steatment is necessary.  
// But I have no idea why it is neccesry to use image file in sass.  
import '../img/balloon.png'
import '../img/cloud.png'

const introduction = document.getElementById('box-introduction');
const hugo = document.getElementById('box-hugo');
const sns = document.getElementById('box-sns');
window.addEventListener('scroll', function () {
  scrollRotate('cloud');
  const value = window.scrollY;
  introduction.style.left = value * 0.2 + 'px';
  hugo.style.left = (value - 3500) * 0.3 + 'px';
  sns.style.left = (value - 3500 * 2) * 0.3 + 'px';
});

function scrollRotate(id) {
  let image = document.getElementById(id);
  image.style.transform = "rotate(" + window.pageYOffset/2 + "deg)";
}
