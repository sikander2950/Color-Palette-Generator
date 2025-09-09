// Function to generate a random HEX color
function generateColor() {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
  
  // Change the background color of the box
  const colorBox = document.getElementById("colorBox");
  colorBox.style.backgroundColor = randomColor;
  
  // Update the text with the color code
  const colorCode = document.getElementById("colorCode");
  colorCode.textContent = randomColor;
}
