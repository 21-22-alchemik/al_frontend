/* eslint-disable no-redeclare */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

//generowanie obrazków

function generateCanvas(){
    var canvas = document.createElement("canvas");
    var ctx = canvas.getContext("2d");
    var maxW = 0;
    var maxH = 0;

    var connectionsArray = new Array();


    //znalezienie maxa żeby ustawić rozmiar
    for (let i = 0; i < connsList.length; i++) {
        let element = connsList[i];
        let fx = element.parent1.x + 37;
        let fy = element.parent1.y + 37;
        let sx = element.parent2.x + 37;
        let sy = element.parent2.y + 37;
        let count = element.count;
        connectionsArray.push([fx,fy,sx,sy,count]);
        
        if(fx>maxW)
            maxW = fx + 43;
        if(sx>maxW)
            maxW = sx + 43;

        if(fy>maxH)
            maxH = fy + 43;
        if(sy>maxH)
            maxH = sy + 43;

    }
    //zoptymalizować żeby było też minimum i ogólnie był związek 
    canvas.width=maxW;
    canvas.height=maxH;
    for (let i = 0; i < connectionsArray.length; i++) {
        let element = connectionsArray[i];
        let fx = element[0];
        let fy = element[1];
        let sx = element[2];
        let sy = element[3];
        let count = element[4];
        ctx.beginPath();

        switch(count){
        case 1:
            ctx.lineWidth=5;
            ctx.moveTo(fx,fy);
            ctx.lineTo(sx,sy);
            ctx.stroke();
            break;
        case 2:
            ctx.lineWidth=15;
            ctx.moveTo(fx,fy);
            ctx.lineTo(sx,sy);
            ctx.stroke(); 
            ctx.globalCompositeOperation="xor";
            ctx.lineWidth = 5;
            ctx.stroke();
            
            break;
        case 3:
            ctx.lineWidth=25;
            ctx.moveTo(fx,fy);
            ctx.lineTo(sx,sy);
            ctx.stroke(); 
            ctx.globalCompositeOperation="xor";
            for(var j = 15; j>0; j-=10){
                ctx.lineWidth = j;
                ctx.stroke();
            }
            break;
        case 4:
            ctx.lineWidth=35;
            ctx.moveTo(fx,fy);
            ctx.lineTo(sx,sy);
            ctx.stroke(); 
            ctx.globalCompositeOperation="xor";
            for(var j = 25; j>0; j-=10){
                ctx.lineWidth = j;
                ctx.stroke();
            }
            break;
        case 5:
            ctx.lineWidth=45;
            ctx.moveTo(fx,fy);
            ctx.lineTo(sx,sy);
            ctx.stroke(); 
            ctx.globalCompositeOperation="xor";
            for(var j = 35; j>0; j-=10){
                ctx.lineWidth = j;
                ctx.stroke();
            }
            break;
        case 6:
            ctx.lineWidth=55;
            ctx.moveTo(fx,fy);
            ctx.lineTo(sx,sy);
            ctx.stroke(); 
            ctx.globalCompositeOperation="xor";
            for(var j = 45; j>0; j-=10){
                ctx.lineWidth = j;
                ctx.stroke();
            }
            break;
        case 7:
            ctx.lineWidth=65;
            ctx.moveTo(fx,fy);
            ctx.lineTo(sx,sy);
            ctx.stroke(); 
            ctx.globalCompositeOperation="xor";
            for(var j = 55; j>0; j-=10){
                ctx.lineWidth = j;
                ctx.stroke();
            }
            break;
        case 8:
            ctx.lineWidth=70;
            ctx.moveTo(fx,fy);
            ctx.lineTo(sx,sy);
            ctx.stroke(); 
            ctx.globalCompositeOperation="xor";
            for(var j = (70-(140/15)); j>0; j-=(140/15)){
                ctx.lineWidth = j;
                ctx.stroke();
            }
            break;
        case 9:
            ctx.lineWidth=70;
            ctx.moveTo(fx,fy);
            ctx.lineTo(sx,sy);
            ctx.stroke(); 
            ctx.globalCompositeOperation="xor";
            for(var j = (70-(140/17)); j>0; j-=(140/17)){
                ctx.lineWidth = j;
                ctx.stroke();
            }
            break;    
        }

        ctx.globalCompositeOperation="source-over";

        
        

    }

    for (let i = 0; i < atomsList.length; i++) {
        let element = atomsList[i];
        let x = element.x + 37.5;
        let y = element.y + 37.5;
        let color = element.color;
        ctx.beginPath();
        ctx.arc(x,y,37.5,0,2 * Math.PI);
        ctx.fillStyle=color;
        ctx.fill();

        let symbol = element.name;
        ctx.font="30px Franklin Gothic Medium";
        ctx.fillStyle="white";
        ctx.fillText(symbol, x-ctx.measureText(symbol).width/2, y+10);
        ctx.lineWidth=1;
        ctx.strokeText(symbol, x-ctx.measureText(symbol).width/2, y+10);        
    }
    document.getElementById("canvas").appendChild(canvas);
}