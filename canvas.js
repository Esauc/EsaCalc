
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

ctx.webkitImageSmoothingEnabled = false;
ctx.imageSmoothingEnabled = false;

ctx.canvas.width = window.innerWidth-window.innerWidth*0.02;
ctx.canvas.height = window.innerHeight - (window.innerHeight / 3);

var xOffset = ctx.canvas.width / 2;
var yOffset = ctx.canvas.height / 2;

var xOffsetBuffer = 0;
var yOffsetBuffer = 0;

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
	//Desenha o quadro
	ctx.fillStyle = "#F0FFF0"
	ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

	setOffset(xOffset, yOffset); //Ajusta a câmera
	//Desenha os eixos do plano cartesiano
	ctx.strokeStyle = "#000000";
	ctx.lineWidth = 2;
	//Eixo Y
	ctx.beginPath();
	ctx.moveTo(0, -yOffset);
	ctx.lineTo(0, -yOffset + ctx.canvas.height);
	ctx.stroke();
	//Eixo X
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

function getMousePosition(canvas, event)
{
	let rect = canvas.getBoundingClientRect();
	let x = event.clientX - rect.left;
	let y = event.clientY - rect.top;

	console.log("mouse x: "+x, "mouse y: "+y);

	
}

let canvasElem = document.querySelector("canvas");
canvasElem.addEventListener("mousedown", function(e)
{
	getMousePosition(canvasElem, e);
});

// Start things off
//requestAnimationFrame(mainLoop);
draw();