/* eslint-disable no-undef */
checkMendelejew();

const romans = ["-","I","II","III","IV","V","VI","VII","VIII","IX","X"];

var holder = document.getElementById("grid");
var lantan = document.getElementById("lantan");
var aktyn = document.getElementById("aktyn");

for (var i = 0; i < periodicTable.length; i++) {
    var div = document.createElement("DIV");
    div.innerHTML = "<h3>" + periodicTable[i].symbol+"</h3><p>"+periodicTable[i].name+"</p>";
    div.addEventListener("click", chooseValence.bind(null,periodicTable[i].symbol));
    div.style.background = periodicTable[i].hexColor;

    if(periodicTable[i].placement[0]== 6 && periodicTable[i].placement[1]==3){
        lantan.appendChild(div);
    }
    else if(periodicTable[i].placement[0]==7 && periodicTable[i].placement[1]==3){
        aktyn.appendChild(div);
    }
    else{
        div.style.gridRowStart = periodicTable[i].placement[0];
        div.style.gridColumnStart = periodicTable[i].placement[1];
        div.style.gridRowEnd = periodicTable[i].placement[0]+1;
        div.style.gridColumnEnd = periodicTable[i].placement[1]+1;
        holder.appendChild(div);
    }
}

window.addEventListener("resize",checkMendelejew);

function checkMendelejew(){
    var hold = document.getElementById("grid");
    var width = window.innerWidth;
    var height = window.innerHeight;

    if(width < 1600 || height < 830)
        hold.style.transform = "scale("+Math.min(width/1600,height/830)+")";
    else if(holder.style.transform != "scale(1)")
        hold.style.transform = "scale(1)";
}

function chooseValence(symbol){
    let valence = periodicTable[periodicTable.findIndex(lookFor,symbol)].valences;
    //czy można wybrać wartościowość
    if(valence.length == 1){
        //utwórz atom z podaną walencją
        toDo(symbol,valence[0]);
    }
    else{
        document.getElementById("valInp").innerHTML = "Wybierz wartościowość dla "+symbol;
        var holder = document.getElementById("vGrid");
        holder.innerHTML="";
        for (var i = 0; i < valence.length; i++) {
            var div = document.createElement("DIV");
            div.innerHTML=romans[valence[i]];
            div.addEventListener("click", toDo.bind(null,symbol,valence[i]));
            holder.appendChild(div);
        }
        document.getElementById("valence").classList.toggle("hidden");
    }
}

function toDo(symbol,valence){
    console.log(symbol+"["+valence+"]");
    document.getElementById("valence").classList.toggle("hidden");
}

function lookFor(atom){
    return atom.symbol==this;
}