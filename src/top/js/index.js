import '../css/style.scss';
const party = require("party-js");

// In case of using url() in sass file, this import steatment is necessary.  
// But I have no idea why it is neccesry to use image file in sass.  
import '../img/balloon.png'
import '../img/cloud.png'
import '../img/balloon-top.png'
import '../img/wind.png'

import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
// Webfonts
import '@fortawesome/fontawesome-free/webfonts/fa-regular-400.ttf';
import '@fortawesome/fontawesome-free/webfonts/fa-brands-400.ttf';
import '@fortawesome/fontawesome-free/webfonts/fa-solid-900.ttf';

const introduction = document.getElementById('box-introduction');
const hugo = document.getElementById('box-hugo');
const css = document.getElementById('box-css');
const backend = document.getElementById('box-backend');
const sns = document.getElementById('box-sns');
const enjoy = document.getElementById('box-enjoy');
const acknowledgement = document.getElementById('box-acknowledgement');
const acknowledgement2 = document.getElementById('box-acknowledgement2');
const acknowledgement3 = document.getElementById('box-acknowledgement3');
const acknowledgement4 = document.getElementById('box-acknowledgement4');
window.addEventListener('scroll', function () {
  scrollRotate('wind1', 2);
  scrollRotate('wind2', 1);
  scrollRotate('wind3', 3);
  const value = window.scrollY;
  introduction.style.left = (value - 1200) * 0.3 + 'px';
  hugo.style.left = (value - 2700) * 0.3 + 'px';
  css.style.left = (value - 2200 * 2) * 0.3 + 'px';
  backend.style.left = (value - 2000 * 3) * 0.3 + 'px';
  sns.style.left = (value - 1900 * 4) * 0.3 + 'px';
  enjoy.style.left = (value - 1850 * 5) * 0.3 + 'px';
  acknowledgement.style.left = (value - 1800 * 6) * 0.3 + 'px';
  acknowledgement2.style.left = (value - 1750 * 7) * 0.3 + 'px';
  acknowledgement3.style.left = (value - 1750 * 8) * 0.3 + 'px';
  acknowledgement4.style.left = (value - 1750 * 9) * 0.3 + 'px';
});

document.getElementById("twitter-icon").addEventListener("mouseover", function (e) {
  party.confetti(this, {
    count: party.variation.range(10, 20),
    shapes: ["star"],
    speed: party.variation.range(10, 500),
    size: party.variation.skew(1, 0.9),
    // rotation: party.random.randomUnitVector().scale(360),
    // color: party.Color.fromHsl(party.random.randomRange(180, 300), 100, 80),

    // The color should change to HSL from color code using the below site.
    // https://www.peko-step.com/tool/hslrgb.html
    color: party.Color.fromHsl(340, 80, 62),
  });
});

document.getElementById("github-icon").addEventListener("mouseover", function (e) {
  party.confetti(this, {
    count: party.variation.range(10, 20),
    shapes: ["circle"],
    speed: party.variation.range(10, 500),
    size: party.variation.skew(1, 0.9),
    // rotation: party.random.randomUnitVector().scale(360),
    // The color should change to HSL from color code using the below site.
    // https://www.peko-step.com/tool/hslrgb.html
    color: party.Color.fromHsl(220, 60, 50),
  });
});

document.getElementById("codepen-icon").addEventListener("mouseover", function (e) {
  party.confetti(this, {
    count: party.variation.range(10, 20),
    shapes: ["square"],
    speed: party.variation.range(10, 500),
    size: party.variation.skew(1, 0.9),
    // rotation: party.random.randomUnitVector().scale(360),
    // The color should change to HSL from color code using the below site.
    // https://www.peko-step.com/tool/hslrgb.html
    color: party.Color.fromHsl(27, 88, 50),
  });
});

document.getElementById("devto-icon").addEventListener("mouseover", function (e) {
  party.confetti(this, {
    count: party.variation.range(10, 20),
    shapes: ["circle"],
    speed: party.variation.range(10, 500),
    size: party.variation.skew(1, 0.9),
    // rotation: party.random.randomUnitVector().scale(360),
    // The color should change to HSL from color code using the below site.
    // https://www.peko-step.com/tool/hslrgb.html
    color: party.Color.fromHsl(220, 60, 50),
  });
});

document.getElementById("stackoverflow-icon").addEventListener("mouseover", function (e) {
  party.confetti(this, {
    count: party.variation.range(10, 20),
    shapes: ["circle"],
    speed: party.variation.range(10, 500),
    size: party.variation.skew(1, 0.9),
    // rotation: party.random.randomUnitVector().scale(360),
    // The color should change to HSL from color code using the below site.
    // https://www.peko-step.com/tool/hslrgb.html
    color: party.Color.fromHsl(220, 60, 50),
  });
});

document.getElementById("blog-icon").addEventListener("mouseover", function (e) {
  party.confetti(this, {
    count: party.variation.range(10, 20),
    shapes: ["circle"],
    speed: party.variation.range(10, 500),
    size: party.variation.skew(1, 0.9),
    // rotation: party.random.randomUnitVector().scale(360),
    // The color should change to HSL from color code using the below site.
    // https://www.peko-step.com/tool/hslrgb.html
    color: party.Color.fromHsl(220, 60, 50),
  });
});

document.getElementById("npm-icon").addEventListener("mouseover", function (e) {
  party.confetti(this, {
    count: party.variation.range(10, 20),
    shapes: ["circle"],
    speed: party.variation.range(10, 500),
    size: party.variation.skew(1, 0.9),
    // rotation: party.random.randomUnitVector().scale(360),
    // The color should change to HSL from color code using the below site.
    // https://www.peko-step.com/tool/hslrgb.html
    color: party.Color.fromHsl(220, 60, 50),
  });
});

function scrollRotate(id, rotateValue) {
  let image = document.getElementById(id);
  image.style.transform = "rotate(" + window.pageYOffset/rotateValue + "deg)";
}

