
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

ctx.webkitImageSmoothingEnabled = false;
ctx.mozImageSmoothingEnabled = false;
ctx.imageSmoothingEnabled = false;

var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

if(!isMobile)
{
	ctx.canvas.width = window.innerWidth-window.innerWidth*0.02;
	ctx.canvas.height = window.innerHeight - (window.innerHeight / 3);
}

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
	ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
	ctx.strokeRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

// Start things off
requestAnimationFrame(mainLoop);