window.onload = function() {
  var pos = 0;
  var box = document.getElementById('box');
  var t = setInterval(move, 15);  

  function move() {
    if (pos == 150) {
      clearInterval (t);
    } else {
      pos ++;
      box.style.left = pos +'px';
    }
  }

  function moveBack (){
    if( pos = 0){
      clearInterval (tb);
    } else {
      pos +=1;
      box.style.right = pos +'px';
    }
  }
};