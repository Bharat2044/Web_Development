// Create a button that utilizes an array of colors and the Math.random method to change the background color
// of the page upon clicking.

var colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#00ffff', '#ff00ff']; // Array of colors
var button = document.getElementById('color-button');

button.addEventListener('click', function() {
  var randomColor = colors[Math.floor(Math.random() * colors.length)]; // Generate random color from array
  document.body.style.backgroundColor = randomColor; // Change background color of page
});
