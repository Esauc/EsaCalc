
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

ctx.webkitImageSmoothingEnabled = false;
ctx.imageSmoothingEnabled = false;

ctx.canvas.width = window.innerWidth-40;
ctx.canvas.height = window.innerHeight - (window.innerHeight / 3);

var xOffset = ctx.canvas.width / 2;
var yOffset = ctx.canvas.height / 2;

var xOffsetBuffer = 0;
var yOffsetBuffer = 0;

var mouseX = 0;
var mouseY = 0;

var mouseClickX = 0;
var mouseClickY = 0;

var isMouseDown = false;

function draw()
{
	//Desenha o quadro
	setOffset(0, 0);
	ctx.fillStyle = "#F0FFF0"
	ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

	setOffset(xOffset, yOffset); //Ajusta a câmera
	//Desenha os eixos do plano cartesiano
	ctx.strokeStyle = "#000000";
	ctx.lineWidth = 2;
	//Eixo Y
	ctx.strokeText("^", -3, -yOffset + 10);
	ctx.beginPath();
	ctx.moveTo(0, -yOffset);
	ctx.lineTo(0, -yOffset + ctx.canvas.height);
	ctx.stroke();
	//Eixo X
	ctx.strokeText(">", -xOffset + ctx.canvas.width - 10, 3);
	ctx.beginPath();
	ctx.moveTo(-xOffset, 0);
	ctx.lineTo(-xOffset + ctx.canvas.width, 0);
	ctx.stroke();
}

function setOffset(x, y)
{
	ctx.translate(x - xOffsetBuffer, y - yOffsetBuffer);
	xOffsetBuffer = x;
	yOffsetBuffer = y;
}

let canvasElem = document.querySelector("canvas");

draw();


canvasElem.addEventListener("mousedown", function(e)
{
	let rect = canvas.getBoundingClientRect();
	let x = e.clientX - rect.left;
	let y = e.clientY - rect.top;

	mouseClickX = x;
	mouseClickY = y;

	isMouseDown = true;
});
canvasElem.addEventListener("mouseup", function(e)
{
	isMouseDown = false;
});
canvasElem.addEventListener("mousemove", function (e)
{
	let rect = canvas.getBoundingClientRect();

	mouseX = e.clientX - rect.left;
	mouseY = e.clientY - rect.top;

	if(isMouseDown)
	{
		xOffset += mouseX -mouseClickX;
		yOffset += mouseY -mouseClickY;

		mouseClickX = mouseX;
		mouseClickY = mouseY;

		draw();
	}
});
canvasElem.addEventListener("touchstart", function(e)
{
	let rect = canvas.getBoundingClientRect();
	let x = e.touches[0].clientX - rect.left;
	let y = e.touches[0].clientY - rect.top;

	mouseClickX = x;
	mouseClickY = y;

	isMouseDown = true;
});
canvasElem.addEventListener("touchend", function(e)
{
	isMouseDown = false;
});
canvasElem.addEventListener("touchmove", function(e)
{
	let rect = canvas.getBoundingClientRect();

	mouseX = e.touches[0].clientX - rect.left;
	mouseY = e.touches[0].clientY - rect.top;

	if(isMouseDown)
	{
		xOffset += mouseX -mouseClickX;
		yOffset += mouseY -mouseClickY;

		mouseClickX = mouseX;
		mouseClickY = mouseY;

		draw();
	}
});

// Start things off
//requestAnimationFrame(mainLoop);