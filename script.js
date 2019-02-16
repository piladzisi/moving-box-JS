window.onload = function() {
  var pos = 0;
  var box = document.getElementById('box');
  var t = setInterval(move, 5);  

  function move() {
    if (pos == 328) {
      clearInterval (t);
    } else {
      pos ++;
      box.style.top = pos + "px"; 
      box.style.left = pos +'px';
    }
  }

};