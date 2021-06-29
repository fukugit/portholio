import '../css/style.scss';

// SASS 内で url()で画像を利用する場合はここに定義する必要があるので注意。
// なぜ必要かは不明...
// In case of using url() in sass file, this import steatment is necessary.  
// But it is no idea why it is neccesry.  
import '../img/balloon.png'
import '../img/cloud.png'

const introduction = document.getElementById('box-introduction');
const hugo = document.getElementById('box-hugo');
const sns = document.getElementById('box-sns');
window.addEventListener('scroll', function () {
  const value = window.scrollY;
  introduction.style.left = value * 0.2 + 'px';
  hugo.style.left = (value - 3500) * 0.3 + 'px';
  sns.style.left = (value - 3500 * 2) * 0.3 + 'px';
});
