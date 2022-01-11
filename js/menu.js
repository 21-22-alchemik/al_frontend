/* eslint-disable no-unused-vars */

//check the size of the browser window
function checkSize() {
    //loading the values of a browser window
    var width = window.innerWidth;
    var newDivMessage = document.getElementById("newDivMessage");
    //min 1000px, checking
    if(width < 1000){
        newDivMessage.classList.remove("activeBadSize");
    } else {
        newDivMessage.classList.add("activeBadSize");
    }
}

//check when the width of the browser window changes
window.addEventListener("resize", checkSize);

// MENU

//loading elements
var menuWrapper = document.getElementById("menuWrapper");
var btnMenu = document.getElementById("menu_menu");
var btnPierwiastki = document.getElementById("menu_pierwiastki");
var btnZwiazki = document.getElementById("menu_zwiazki");
var zakladkaMenu = document.getElementById("zakladkaMenu");
var zakladkaPierwiastki = document.getElementById("zakladkaPierwiastki");
var zakladkaZwiazki = document.getElementById("zakladkaZwiazki");
var blockScreen = document.getElementById("blockScreen");

//sub-actions
btnMenu.addEventListener("click", menuControl.bind(null,"menu_menu"));
btnPierwiastki.addEventListener("click", menuControl.bind(null,"menu_pierwiastki"));
btnZwiazki.addEventListener("click", menuControl.bind(null,"menu_zwiazki"));
document.getElementById("wyjscie").addEventListener("click", closeMenu);
blockScreen.addEventListener("click", closeMenu);

function menuControl(element){
    //if is close
    if(menuWrapper.classList.contains("menuClosed")) {
        changeTab(element);
        openMenu();
    }
    //if is open
    else {
        //if it is open and on the current tab
        if(document.getElementById(element).classList.contains("activeMenu")) {
            changeTab("close");
        }
        //if change the tab
        else{
            changeTab(element);
        }
    }
}

function changeTab(element){

    if(element!="close"){
        //clear 
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

    //menu elements
    case "menu_pierwiastki":{
        btnPierwiastki.classList.add("activeMenu");
        zakladkaPierwiastki.classList.add("activeZakladka");
        break;
    }

    //menu relations
    case "menu_zwiazki":{
        btnZwiazki.classList.add("activeMenu");
        zakladkaZwiazki.classList.add("activeZakladka");
        break;
    }

    //if you close the menu regardless of the tab you have open, or if a weird error happens and you want to open a tab that isn't there, it will close the menu
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

// .activeMenu -> tab color

//close menu - button
function closeMenu() {
    menuWrapper.classList.add("menuClosed");

    btnMenu.classList.remove("activeMenu");
    btnPierwiastki.classList.remove("activeMenu");
    btnZwiazki.classList.remove("activeMenu");
    blockScreen.classList.add("hiddenV");

    //disappear after hiding the menu
    setTimeout(function(){
        zakladkaMenu.classList.remove("activeZakladka");
        zakladkaPierwiastki.classList.remove("activeZakladka");
        zakladkaZwiazki.classList.remove("activeZakladka");
        blockScreen.classList.add("hidden");
    },500);
    
}