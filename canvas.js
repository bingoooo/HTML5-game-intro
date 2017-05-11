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

var babylonCanvas = document.getElementById('renderCanvas');
var engine = new BABYLON.Engine(babylonCanvas, true);

var createScene = function () {
    var scene = new BABYLON.Scene(engine);
    scene.clearColor = new BABYLON.Color3(0,0,0.7);

    var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0,5,-10), scene);
    camera.setTarget(BABYLON.Vector3.Zero());
    camera.attachControl(canvas, false);

    var light = new BABYLON.HemisphericLight("ligth1", new BABYLON.Vector3(0,1,0), scene);
    light.intensity = .5;

    var sphere = new BABYLON.Mesh.CreateSphere("sphere1", 16, 2, scene);
    sphere.position.y = 1;

    var sphereMaterial = new BABYLON.StandardMaterial("std", scene);
    sphereMaterial.diffuseColor = new BABYLON.Color3(0.5, 0, 0.5);

    sphere.material = sphereMaterial;

    var ground = BABYLON.Mesh.CreateGround("ground1", 6, 6, 2, scene);

    return scene;
}

var scene = createScene();

engine.runRenderLoop(function(){
    scene.render();
})