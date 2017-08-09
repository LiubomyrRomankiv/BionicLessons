'use strict';

let boxParent = document.querySelector('.parent');
let boxes = boxParent.querySelectorAll('.box');
let output = document.querySelector('.output');

boxParent.addEventListener('click', function(e){
  if( e.target === this){
    addBox();
  } else {
    removeBox(e.target);
  }
});

let addBox = () => {
  let boxes = boxParent.querySelectorAll('.box');
  let newBox = document.createElement('div');
  newBox.setAttribute('class','box');
  newBox.innerHTML = boxes.length;
  boxParent.appendChild(newBox);
}

let removeBox = (item) => {
  item.parentNode.removeChild(item);
}

for (var i = 0; i < boxes.length; i++){
  (function(i) {
    boxes[i].addEventListener('mouseover', function(){
      output.innerHTML = i;
    });
  })(i);
  
  boxes[i].addEventListener('mouseout', function(){
    output.innerHTML = '';
  });
}