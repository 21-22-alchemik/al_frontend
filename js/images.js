/* eslint-disable no-redeclare */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

//image generation

function generateCanvas(){
    var canvas = document.createElement("canvas");
    var ctx = canvas.getContext("2d");
    var maxW = 0;
    var maxH = 0;
    var minW = atomsList[0].x -5;
    var minH = atomsList[0].y -5;

    //finding max and min to set the size
    for (let i = 0; i < atomsList.length; i++) {
        let element = atomsList[i];
        let fx = element.x + 37;
        let fy = element.y + 37;
        
        if((fx + 38 + 5) > maxW)
            maxW = fx + 38 + 5;
        else if((fx - 37 - 5) < minW)
            minW = fx - 37 - 5;

        if((fy + 38 + 5) > maxH)
            maxH = fy + 38 + 5;
        else if((fy - 37 - 5) < minH)
            minH = fy - 37 - 5;

    }
 
    canvas.width=maxW - minW;
    canvas.height=maxH - minH;

    for (let i = 0; i < connsList.length; i++) {
        let element = connsList[i];
        let fx = element.parent1.x + 37;
        let fy = element.parent1.y + 37;
        let sx = element.parent2.x + 37;
        let sy = element.parent2.y + 37;
        let count = element.count;
        ctx.beginPath();

        ctx.moveTo(fx - minW,fy - minH);
        ctx.lineTo(sx - minW,sy - minH);

        switch(count){
        case 1:
            ctx.lineWidth=5;
            ctx.stroke();
            break;
        case 2:
            ctx.lineWidth=15;
            ctx.stroke(); 
            ctx.globalCompositeOperation="xor";
            ctx.lineWidth = 5;
            ctx.stroke();
            
            break;
        case 3:
            ctx.lineWidth=25;
            ctx.stroke(); 
            ctx.globalCompositeOperation="xor";
            for(var j = 15; j>0; j-=10){
                ctx.lineWidth = j;
                ctx.stroke();
            }
            break;
        case 4:
            ctx.lineWidth=35;
            ctx.stroke(); 
            ctx.globalCompositeOperation="xor";
            for(var j = 25; j>0; j-=10){
                ctx.lineWidth = j;
                ctx.stroke();
            }
            break;
        case 5:
            ctx.lineWidth=45;
            ctx.stroke(); 
            ctx.globalCompositeOperation="xor";
            for(var j = 35; j>0; j-=10){
                ctx.lineWidth = j;
                ctx.stroke();
            }
            break;
        case 6:
            ctx.lineWidth=55;
            ctx.stroke(); 
            ctx.globalCompositeOperation="xor";
            for(var j = 45; j>0; j-=10){
                ctx.lineWidth = j;
                ctx.stroke();
            }
            break;
        case 7:
            ctx.lineWidth=65;
            ctx.stroke(); 
            ctx.globalCompositeOperation="xor";
            for(var j = 55; j>0; j-=10){
                ctx.lineWidth = j;
                ctx.stroke();
            }
            break;
        case 8:
            ctx.lineWidth=70;
            ctx.stroke(); 
            ctx.globalCompositeOperation="xor";
            for(var j = (70-(140/15)); j>0; j-=(140/15)){
                ctx.lineWidth = j;
                ctx.stroke();
            }
            break;
        case 9:
            ctx.lineWidth=70;
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
        let x = element.x + 37.5 - minW;
        let y = element.y + 37.5 - minH;
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

    return canvas;
}

function getImage(type){
    var canvas = generateCanvas();
    var link = document.createElement("a");
    link.download = "structure."+type;
    link.href = canvas.toDataURL();
    link.click();
}

function generateSvg(){
    var maxW = 0;
    var maxH = 0;
    var minW = atomsList[0].x -5;
    var minH = atomsList[0].y -5;

    //finding max and min to set the size
    for (let i = 0; i < atomsList.length; i++) {
        let element = atomsList[i];
        let fx = element.x + 37;
        let fy = element.y + 37;
        
        if((fx + 38 + 5) > maxW)
            maxW = fx + 38 + 5;
        else if((fx - 37 - 5) < minW)
            minW = fx - 37 - 5;

        if((fy + 38 + 5) > maxH)
            maxH = fy + 38 + 5;
        else if((fy - 37 - 5) < minH)
            minH = fy - 37 - 5;
    }

    var svg = "<svg xmlns='http://www.w3.org/2000/svg' width='"+(maxW-minW)+"' height='"+(maxH-minH)+"'> ";

    for (let i = 0; i < connsList.length; i++) {
        let element = connsList[i];
        let fx = element.parent1.x + 37 - minW;
        let fy = element.parent1.y + 37 - minH;
        let sx = element.parent2.x + 37 - minW;
        let sy = element.parent2.y + 37 - minH;
        let count = element.count;

        var append = "";
        var color = "white";

        switch(count){
        case 1:
            append = "<line x1='"+fx+"' y1='"+fy+"' x2='"+sx+"' y2='"+sy+"'  stroke='black' stroke-width='5px' /> ";
            break;
        case 2:
            append = "<mask id='line"+i+"'>";
            for(var j = 15; j>0; j-=10){
                append += "<line x1='"+fx+"' y1='"+fy+"' x2='"+sx+"' y2='"+sy+"' stroke='"+color+"' stroke-width='"+j+"' /> ";
                if(color == "white")
                    color = "black";
                else
                    color = "white";
            }
            append += "</mask><rect width='"+(maxW-minW)+"' height='"+(maxH-minH)+"' mask='url(#line"+i+")' /> ";
            break;
        case 3:
            append = "<mask id='line"+i+"'>";
            for(var j = 25; j>0; j-=10){
                append += "<line x1='"+fx+"' y1='"+fy+"' x2='"+sx+"' y2='"+sy+"' stroke='"+color+"' stroke-width='"+j+"' /> ";
                if(color == "white")
                    color = "black";
                else
                    color = "white";
            }
            append += "</mask><rect width='"+(maxW-minW)+"' height='"+(maxH-minH)+"' mask='url(#line"+i+")' /> ";
            break;
        case 4:
            append = "<mask id='line"+i+"'>";
            for(var j = 35; j>0; j-=10){
                append += "<line x1='"+fx+"' y1='"+fy+"' x2='"+sx+"' y2='"+sy+"' stroke='"+color+"' stroke-width='"+j+"' /> ";
                if(color == "white")
                    color = "black";
                else
                    color = "white";
            }
            append += "</mask><rect width='"+(maxW-minW)+"' height='"+(maxH-minH)+"' mask='url(#line"+i+")' /> ";
            break;
        case 5:
            append = "<mask id='line"+i+"'>";
            for(var j = 45; j>0; j-=10){
                append += "<line x1='"+fx+"' y1='"+fy+"' x2='"+sx+"' y2='"+sy+"' stroke='"+color+"' stroke-width='"+j+"' /> ";
                if(color == "white")
                    color = "black";
                else
                    color = "white";
            }
            append += "</mask><rect width='"+(maxW-minW)+"' height='"+(maxH-minH)+"' mask='url(#line"+i+")' /> ";
            break;
        case 6:
            append = "<mask id='line"+i+"'>";
            for(var j = 55; j>0; j-=10){
                append += "<line x1='"+fx+"' y1='"+fy+"' x2='"+sx+"' y2='"+sy+"' stroke='"+color+"' stroke-width='"+j+"' /> ";
                if(color == "white")
                    color = "black";
                else
                    color = "white";
            }
            append += "</mask><rect width='"+(maxW-minW)+"' height='"+(maxH-minH)+"' mask='url(#line"+i+")' /> ";
            break;
        case 7:
            append = "<mask id='line"+i+"'>";
            for(var j = 65; j>0; j-=10){
                append += "<line x1='"+fx+"' y1='"+fy+"' x2='"+sx+"' y2='"+sy+"' stroke='"+color+"' stroke-width='"+j+"' /> ";
                if(color == "white")
                    color = "black";
                else
                    color = "white";
            }
            append += "</mask><rect width='"+(maxW-minW)+"' height='"+(maxH-minH)+"' mask='url(#line"+i+")' /> ";
            break;
        case 8:
            append = "<mask id='line"+i+"'>";
            for(var j = 70; j>0; j-=(140/15)){
                append += "<line x1='"+fx+"' y1='"+fy+"' x2='"+sx+"' y2='"+sy+"' stroke='"+color+"' stroke-width='"+j+"' /> ";
                if(color == "white")
                    color = "black";
                else
                    color = "white";
            }
            append += "</mask><rect width='"+(maxW-minW)+"' height='"+(maxH-minH)+"' mask='url(#line"+i+")' /> ";
            break;
        case 9:
            append = "<mask id='line"+i+"'>";
            for(var j = 70; j>0; j-=(140/17)){
                append += "<line x1='"+fx+"' y1='"+fy+"' x2='"+sx+"' y2='"+sy+"' stroke='"+color+"' stroke-width='"+j+"' /> ";
                if(color == "white")
                    color = "black";
                else
                    color = "white";
            }
            append += "</mask><rect width='"+(maxW-minW)+"' height='"+(maxH-minH)+"' mask='url(#line"+i+")' /> ";
            break;   
        }

        svg += append;
    }
    svg += "<style> .text{ fill: white; stroke: black; font-size:30px; font-family: Franklin Gothic Medium; } </style> ";

    for (let i = 0; i < atomsList.length; i++) {
        let element = atomsList[i];
        let x = element.x + 37.5 - minW;
        let y = element.y + 37.5 - minH;
        let color = element.color;

        append = "<g><circle cx='"+x+"' cy='"+y+"' r='"+37.5+"' fill='"+color+"' /> ";

        let symbol = element.name;
        append+="<text class='text' x='"+x+"' y='"+(y+3)+"' dominant-baseline='middle' text-anchor='middle' >"+symbol+"</text></g> ";
        svg += append;     
    }

    svg += "</svg>";
    return svg;
}

function saveSvg(){
    var svgInside = generateSvg();
    var link = document.createElement("a");
    link.download = "structure.svg";
    link.href = "data:image/svg+xml;charset=utf-8,"+encodeURIComponent(svgInside);
    link.click();
}