// The onmouseup event occurs when a mouse button is released over an element.
// The onmousedown event occurs when a user presses a mouse button over an HTML element.

function mDown(obj) {
    olor = "purple";
    obj.innerHTML = "Release Me";
}
  
function mUp(obj) {
    obj.style.backgroundColor="yellow";
    obj.innerHTML="You Clicked";
}