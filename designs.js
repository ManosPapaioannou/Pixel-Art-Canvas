// Select color input
var chooseColor = document.getElementById('colorPicker').value;

// Select size input
var size = document.getElementById("sizePicker");
var canvas = document.getElementById("pixelCanvas");

// When size is submitted by the user, call makeGrid()
size.addEventListener('submit', function(event) {
    event.preventDefault();
    var height = document.getElementById('inputHeight').value;
    var width = document.getElementById('inputWidth').value;
    makeGrid(height, width);
});

// Creates the grid and applies the chosen color
function makeGrid(height,width) {
canvas.innerHTML = null;
for (var m = 0; m < height; m++) {
     var row = canvas.insertRow(m);
    for (var n = 0; n < width; n++) {
         var column = row.insertCell(n);
         column.addEventListener('click', function(e) {
           var chooseColor = document.getElementById('colorPicker').value;
           e.target.style.backgroundColor = chooseColor;
        });
}
}
}
