"use strict";
const canvasWidth = 400, canvasHeight = 300;
let ctx;
let x = 0, y = 0;
let angle = 0;
let fps = 12;
let fpsInput;

let angleStep = 0.3;
let xStep = 10;
let circleRadius = 2;
let waveHeight = 100;

let colors = ["#ffffff", "#ff0000", "#ffff00", "#0000ff"];

window.onload = init;

function init(){
    ctx = canvas.getContext("2d");
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    ctx.fillRect(0,0,canvasWidth,canvasHeight);
    fpsInput = document.querySelector("#framerateInput");
    loop();
}


function loop(){
    setTimeout(loop,1000/fps);
    ctx.save();
    ctx.fillStyle = "black";
    ctx.globalAlpha = 1/fps
    ctx.fillRect(0,0,canvasWidth,canvasHeight);
    ctx.restore();

    x += xStep;
    angle += angleStep;
    y = canvasHeight/2 + Math.sin(angle) * waveHeight;
    drawCircle(ctx, x, y, circleRadius, colors[0]);
    
    y = canvasHeight/2 + Math.cos(angle) * waveHeight;
    drawCircle(ctx, x, y, circleRadius, colors[1]);

    y = canvasHeight/2 - Math.sqrt(x % 50) * waveHeight/20;
    drawCircle(ctx, x, y, circleRadius, colors[2]);

    y = canvasWidth/2 + Math.tan(angle) * waveHeight/2;
    drawCircle(ctx, y, x, circleRadius, colors[3]);

    if(x > canvasWidth){
        x = 0;
    }
    fps = fpsInput.value;


    /*
    let angle = 0;
    let step = Math.PI * 0.02;
    for(let i = 0; i < 1; i += 0.01){
        x = i;
        y = Math.sin(angle) / 2 + 0.5;
        angle += step;
        drawCircle(ctx, canvasWidth * x, canvasHeight / 2 + (100 * y), 2, "white");
    }
    */
}

// helpers
function dtr(degrees){
    return degrees * (Math.PI/180);
}

function drawCircle(ctx,x,y,radius,color){
    ctx.save();
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x,y,radius,0,Math.PI * 2);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
}
