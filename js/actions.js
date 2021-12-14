/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
//akcje z pierwiastkami i wiązaniami

//usuwanie wszystkich pierwiastków i wiązań
function clearAll(){
    atomsHolder.innerHTML="";
    connsHolder.innerHTML="";
    atomsList = new Array();
    connsList = new Array();
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
