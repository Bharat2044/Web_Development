// The objective is to write a JavaScript program that enables an image to move according to the direction
// specified by the arrow keys. The program must be able to recognize and respond to the input from the arrow
// keys, and accordingly, update the position of the image on the screen. The program should be able to handle
// the movement of the image in all directions, including up, down, left, and right, in a smooth and responsive
// manner. Have a look at the event key codes before starting the project.


var image = document.getElementById('my-image');
var x = 0; // Initial horizontal position of image
var y = 0; // Initial vertical position of image

document.addEventListener('keydown', function(event) {
  if (event.keyCode === 37) { // Left arrow key
    x -= 10;
  } else if (event.keyCode === 38) { // Up arrow key
    y -= 10;
  } else if (event.keyCode === 39) { // Right arrow key
    x += 10;
  } else if (event.keyCode === 40) { // Down arrow key
    y += 10;
  }
  
  image.style.left = x + 'px'; // Update horizontal position of image
  image.style.top = y + 'px'; // Update vertical position of image
});
