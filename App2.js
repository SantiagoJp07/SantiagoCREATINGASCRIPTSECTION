var boxOne = document.getElementsByClassName('box1')[0];
var running = false;

var toggleTransition1 = function() {
  if(!running) 
  { 
    boxOne.classList.add('horizTranslate1');
  } else {
    boxOne.classList.remove('horizTranslate1'); 
  }  

  running = !running;
}

// example 2

var boxOne = document.getElementsByClassName('box2')[0];
var running = false;

var toggleTransition2 = function() {
  if(!running) 
  { 
    boxOne.classList.add('horizTranslate2');
  } else {
    boxOne.classList.remove('horizTranslate2'); 
  }  

  running = !running  ;
}