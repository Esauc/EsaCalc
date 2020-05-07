
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');


var width = window.innerWidth-12;
var height = window.innerHeight - (window.innerHeight / 2);

ctx.canvas.width = width;
ctx.canvas.height = height;

ctx.webkitImageSmoothingEnabled = false;
ctx.mozImageSmoothingEnabled = false;
ctx.imageSmoothingEnabled = false;

console.log("Hello World");

function mainLoop() 
{
    update();
    draw();
    requestAnimationFrame(mainLoop);
}

function update()
{
	
}

function draw()
{
	ctx.fillStyle = "#F0FFF0";
	ctx.strokeStyle = "#008B8B";
	ctx.lineWidth = 5;
	ctx.fillRect(0, 0, width, height);
	ctx.strokeRect(0, 0, width, height);
}

// Start things off
requestAnimationFrame(mainLoop);