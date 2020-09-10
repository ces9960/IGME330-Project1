(function(){

    console.log("Loaded");
    const brightnessMin = 55;

    let cesLIB = {
        

        //drawing shapes (rectangles only appear in top left quadrant, circles only appear in bottom half, lines only appear in top right quadrant, all have randomized alpha)
        drawRectangle(ctx,x,y,width,height,fillStyle = "black", lineWidth = 0, strokeStyle = "black"){
            ctx.save();
            ctx.fillStyle = fillStyle;
            ctx.beginPath();
            ctx.rect(x,y,width,height);
            ctx.closePath();
            ctx.fill();
            if(lineWidth > 0){
                ctx.lineWidth = lineWidth;
                ctx.strokeStyle = strokeStyle;
                ctx.stroke();
            }
            ctx.restore();
        },

        drawCircle(ctx,x,y,radius,fillStyle = "black",lineWidth = 0, strokeStyle = "black"){
            ctx.save();
            ctx.fillStyle = fillStyle;
            ctx.beginPath();
            ctx.arc(x,y,radius,0,Math.PI * 2, false);
            ctx.closePath();
            ctx.fill();
            if(lineWidth > 0){
                ctx.lineWidth = lineWidth;
                ctx.strokeStyle = strokeStyle;
                ctx.stroke();
            }
            ctx.restore();
        },

        drawLine(ctx, x1,y1,x2,y2,lineWidth,strokeStyle = "black"){
            ctx.save();
            ctx.lineWidth = lineWidth;
            ctx.strokeStyle = strokeStyle;
            ctx.beginPath();
            ctx.moveTo(x1,y1);
            ctx.lineTo(x2,y2);
            ctx.closePath();
            ctx.stroke();
            ctx.restore();
        },

        // handy helper functions!
        getRandomColor(){
            const getByte = _ => brightnessMin + Math.round(Math.random() * 200);
            return `rgba(${getByte()},${getByte()},${getByte()},.8)`;
        },

        getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },
    }    

    if(window){
        window["cesLIB"] = cesLIB;
    }
    else{
        throw "'window' is not defined";
    }
})();