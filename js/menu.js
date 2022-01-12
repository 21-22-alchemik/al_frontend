/* eslint-disable no-unused-vars */
//sprawdzanie rozmiaru okan przegladarki
// function checkSize() {
//     //wczytanie wartosci okna przegladarki
//     var width = window.innerWidth;
//     var newDivMessage = document.getElementById("newDivMessage");
//     //min 1000px, sprawdzenie
//     if(width < 1000){
//         newDivMessage.classList.remove("activeBadSize");
//     } else {
//         newDivMessage.classList.add("activeBadSize");
//     }
// }

// //sprawdzenie co zmiane szerokosci okna przegladarki
// window.addEventListener("resize", checkSize);

// MENU

//wczytanie elementów
var menuWrapper = document.getElementById("menuWrapper");
var btnMenu = document.getElementById("menu_menu");
var btnPierwiastki = document.getElementById("menu_pierwiastki");
var btnZwiazki = document.getElementById("menu_zwiazki");
var zakladkaMenu = document.getElementById("zakladkaMenu");
var zakladkaPierwiastki = document.getElementById("zakladkaPierwiastki");
var zakladkaZwiazki = document.getElementById("zakladkaZwiazki");
var blockScreen = document.getElementById("blockScreen");

//podpięcia akcji
btnMenu.addEventListener("click", menuControl.bind(null,"menu_menu"));
btnPierwiastki.addEventListener("click", menuControl.bind(null,"menu_pierwiastki"));
btnZwiazki.addEventListener("click", menuControl.bind(null,"menu_zwiazki"));
document.getElementById("wyjscie").addEventListener("click", closeMenu);
blockScreen.addEventListener("click", closeMenu);

function menuControl(element){
    //jeśli menu jest zamknięte
    if(menuWrapper.classList.contains("menuClosed")) {
        changeTab(element);
        openMenu();
    }
    //jeśli jest otwarte
    else {
        //jeśli jest otwarte i jest na obecnej zakładce
        if(document.getElementById(element).classList.contains("activeMenu")) {
            changeTab("close");
        }
        //jeśli zmieniamy karte
        else{
            changeTab(element);
        }
    }
}

function changeTab(element){

    if(element!="close"){
        //czyszczenie 
        btnMenu.classList.remove("activeMenu");
        btnPierwiastki.classList.remove("activeMenu");
        btnZwiazki.classList.remove("activeMenu");

        zakladkaMenu.classList.remove("activeZakladka");
        zakladkaPierwiastki.classList.remove("activeZakladka");
        zakladkaZwiazki.classList.remove("activeZakladka");
    }

    switch(element){

    //menu Menu
    case "menu_menu":{
        btnMenu.classList.add("activeMenu");
        zakladkaMenu.classList.add("activeZakladka");
        break;
    }

    //menu Pierwiastki
    case "menu_pierwiastki":{
        btnPierwiastki.classList.add("activeMenu");
        zakladkaPierwiastki.classList.add("activeZakladka");
        break;
    }

    //menu Związki
    case "menu_zwiazki":{
        btnZwiazki.classList.add("activeMenu");
        zakladkaZwiazki.classList.add("activeZakladka");
        break;
    }

    //jeśli zamykamy menu niezależnie od otwartej karty, albo wydarzy sie dziwny błąd i bedzie miało otworzyć zakładke której nie ma, to zamknie menu
    default:{
        closeMenu();
    }

    }
}

function openMenu(){
    menuWrapper.classList.remove("menuClosed");
    blockScreen.classList.remove("hidden");
    setTimeout(function(){ blockScreen.classList.remove("hiddenV"); },10);
}

// .activeMenu -> kolor zakładki

//zamykanie menu - przycisk
function closeMenu() {
    menuWrapper.classList.add("menuClosed");

    btnMenu.classList.remove("activeMenu");
    btnPierwiastki.classList.remove("activeMenu");
    btnZwiazki.classList.remove("activeMenu");
    blockScreen.classList.add("hiddenV");

    //zniknij po schowaniu menu
    setTimeout(function(){
        zakladkaMenu.classList.remove("activeZakladka");
        zakladkaPierwiastki.classList.remove("activeZakladka");
        zakladkaZwiazki.classList.remove("activeZakladka");
        blockScreen.classList.add("hidden");
    },500);
    
}