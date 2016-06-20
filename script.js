var canvas = document.getElementById('game'),
    ctx = canvas.getContext("2d");
canvas.width = 200;
canvas.height = 400;
// two blue circles
ctx.fillStyle = "blue";
ctx.beginPath();
ctx.arc(50, 50, 25, 0, Math.PI * 2, true);
ctx.arc(150, 50, 25, 0, Math.PI * 2, true);
ctx.fill();

// one red triangle
ctx.fillStyle = "red";
ctx.beginPath();
ctx.moveTo(100, 75);
ctx.lineTo(75, 125);
ctx.lineTo(125, 125);
ctx.fill();

// green semi-circle
ctx.strokeStyle = "green";
ctx.beginPath();
ctx.scale(1, 0.5);
ctx.arc(100, 300, 75, Math.PI, 0, true);
ctx.closePath();
ctx.stroke();