/* eslint-disable no-undef */
//validation

var btnCheck = document.getElementById("sprawdzZadanie");
var divSprawdzenie = document.getElementById("wynikSprawdzeniaCheck");
var messageFailed = document.getElementById("messageFailed");
var btnWyjscieLista = document.getElementById("wyjscieLista");
var listaBledowH1 = document.getElementById("listaBledow");

var wynik = [];
var sprawdzenieWiazania = 0;
var isError = false;

//checking bindings
btnCheck.addEventListener("click", () => {
    isError = false;
    atomsList.forEach(elem => {
        sprawdzenieWiazania = elem.check();
        wynik = [elem.name, sprawdzenieWiazania];
        console.log(wynik);

        if (sprawdzenieWiazania > 0) {
            isError = true;
            createMessage(elem.name, sprawdzenieWiazania);
        }
        else if (sprawdzenieWiazania < 0) {
            isError = true;
            createMessage(elem.name, sprawdzenieWiazania);
        }
        else {
            if(!isError) createMessageAllGood();
        }
    });
});

//creating divs with error notifications
function createMessage(jakiPierwiastek, jakiBlad) {
    divSprawdzenie.classList.add("wynikSprawdzeniaActive");
    //generate div with error
    var bladWiazaniaKomunikat = document.createElement("div");
    var tekstWiadomosciBledu = document.createElement("h1");
    listaBledowH1.innerHTML = "Lista błędów w Twoim działaniu:"; 
    tekstWiadomosciBledu.innerHTML += `Złe wiązania dla pierwiastka "${jakiPierwiastek}", `;
    tekstWiadomosciBledu.innerHTML += ` ilość złych wiązań w liczbie: ${jakiBlad}`;
    bladWiazaniaKomunikat.classList.add("bladSprawdzenia");   
    bladWiazaniaKomunikat.appendChild(tekstWiadomosciBledu);    
    messageFailed.appendChild(bladWiazaniaKomunikat);
}

function createMessageAllGood() {
    divSprawdzenie.classList.add("wynikSprawdzeniaActive");
    listaBledowH1.innerHTML = "Brawo! Wszystko Dobrze!!!"; 
}

//button close from list of errors
btnWyjscieLista.addEventListener("click", ()=> {
    divSprawdzenie.classList.remove("wynikSprawdzeniaActive");
    var listaBledow = document.getElementsByClassName("bladSprawdzenia");
    //remove elements after click the button
    while(listaBledow.length > 0) {
        listaBledow[0].remove();
    }
});