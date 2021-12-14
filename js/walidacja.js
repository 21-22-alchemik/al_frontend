/* eslint-disable no-undef */
//WALIDACJA

var btnCheck = document.getElementById("sprawdzZadanie");
var divSprawdzenie = document.getElementById("wynikSprawdzeniaCheck");
var messageFailed = document.getElementById("messageFailed");
var btnWyjscieLista = document.getElementById("wyjscieLista");

var wynik = [];
var sprawdzenieWiazania = 0;

//sprawdzanie wiazan
btnCheck.addEventListener("click", () => {
    atomsList.forEach(elem => {
        sprawdzenieWiazania = elem.check();
        wynik = [elem.name, sprawdzenieWiazania];
        console.log(wynik);

        if (sprawdzenieWiazania > 0) {
            createMessage(elem.name, sprawdzenieWiazania);
        }
        else if (sprawdzenieWiazania < 0) {
            createMessage(elem.name, sprawdzenieWiazania);
        }
        else {
            console.log("Jest DOBRZE!");
        }
    });
});
//tworzenie div'ow z powiadomienia o bledach
function createMessage(jakiPierwiastek, jakiBlad) {
    divSprawdzenie.classList.add("wynikSprawdzeniaActive");
    console.log(jakiPierwiastek);
    console.log(jakiBlad);

    //generowanie diva z wynikiem(błędem)
    var bladWiazaniaKomunikat = document.createElement("div");
    var tekstWiadomosciBledu = document.createElement("h1");
    tekstWiadomosciBledu.innerHTML += `Złe wiązania dla pierwiastka "${jakiPierwiastek}", `;
    tekstWiadomosciBledu.innerHTML += ` ilość złych wiązań w liczbie: ${jakiBlad}`;
    bladWiazaniaKomunikat.classList.add("bladSprawdzenia");   
    bladWiazaniaKomunikat.appendChild(tekstWiadomosciBledu);    
    messageFailed.appendChild(bladWiazaniaKomunikat);

}
//wyjscie z listy blędów
btnWyjscieLista.addEventListener("click", ()=> {
    divSprawdzenie.classList.remove("wynikSprawdzeniaActive");
    var listaBledow = document.getElementsByClassName("bladSprawdzenia");
    //usuwanie divów przy kazdym wylaczeniu okna z bledami
    while(listaBledow.length > 0) {
        listaBledow[0].remove();
    }
});