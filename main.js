const LIS = document.querySelectorAll('.keyboard>li');
const KEYS = ['a','s','d','f','g','h','j','k','l'];

window.addEventListener('keydown', keyDownEvent);
window.addEventListener('keyup', keyUpEvent);

function keyDownEvent(e){
  let char = e.key;
  KEYS.forEach(function(letter){
    if(letter == char){
      document.querySelector(`.keyboard>.${letter}`).classList.add('scale');
      return;
    };
  });
}

function keyUpEvent(e){
  let char = e.key;
  KEYS.forEach(function(letter){
    if(letter == char){
      document.querySelector(`.keyboard>.${letter}`).classList.remove('scale');
      return;
    };
  });
}

// possible older browser support using e.which || e.keyCode would need keycodes
// the following object could be used

// const KEYCODES = {
//   'a': 65,
//   's': 83,
//   'd': 68,
//   'f': 70,
//   'g': 71,
//   'h': 72,
//   'j': 74,
//   'k': 75,
//   'l': 76,
// }