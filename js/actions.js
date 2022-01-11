/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
//actions with elements and bonds

//remove of all elements and bonds
function clearAll(){
    atomsHolder.innerHTML="";
    connsHolder.innerHTML="";
    atomsList = new Array();
    connsList = new Array();
    counter.atoms = 0;
    counter.conns = 0;
}

function getColorBySymbol(sym){
    var color;
    periodicTable.forEach(element => {
        if(element.symbol === sym)
            color = element.hexColor;
    });
    if(color == null)
        return "gray";
    else 
        return color;
}
