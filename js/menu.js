/* eslint-disable no-unused-vars */
//sprawdzanie rozmiaru okan przegladarki
function checkSize() {
    //wczytanie wartosci okna przegladarki
    var width = window.innerWidth;
    var newDivMessage = document.getElementById("newDivMessage");
    //min 1000px, sprawdzenie
    if(width < 1000){
        newDivMessage.classList.remove("activeBadSize");
    } else {
        newDivMessage.classList.add("activeBadSize");
    }
}
//sprawdzenie co zmiane szerokosci okna przegladarki
window.addEventListener("resize", checkSize);

// MENU
//wczytanie elementów
var menuWrapper = document.getElementById("menuWrapper");
var btnMenu = document.getElementById("menu_menu");
var btnPierwiastki = document.getElementById("menu_pierwiastki");
var btnZwiazki = document.getElementById("menu_zwiazki");
var zakladkaMenu = document.getElementById("zakladkaMenu");
//otwieranie menu, zarzadzanie zakladkami
function showMenu(element) {
    //wysuniecie menu
    menuWrapper.style.right = "0";
    //wybór zakładki
    if (element === "menu_menu") {
        btnMenu.classList.toggle("activeMenu");
        zakladkaMenu.classList.add("activeZakladka");
    } else if (element === "menu_pierwiastki") {
        btnPierwiastki.classList.toggle("activeMenu");
    } else if (element === "menu_zwiazki") {
        btnZwiazki.classList.toggle("activeMenu");
    }
}
btnMenu.addEventListener("click", () => {
    if (btnPierwiastki.classList.contains("activeMenu") || btnZwiazki.classList.contains("activeMenu")) {
        btnMenu.classList.add("activeMenu");
        btnPierwiastki.classList.remove("activeMenu");
        btnZwiazki.classList.remove("activeMenu");
        zakladkaMenu.classList.add("activeZakladka");
    }
});
btnPierwiastki.addEventListener("click", () => {
    if (btnMenu.classList.contains("activeMenu") || btnZwiazki.classList.contains("activeMenu")) {
        btnPierwiastki.classList.add("activeMenu");
        btnMenu.classList.remove("activeMenu");
        btnZwiazki.classList.remove("activeMenu");
        zakladkaMenu.classList.remove("activeZakladka");
    }
});
btnZwiazki.addEventListener("click", () => {
    if (btnPierwiastki.classList.contains("activeMenu") || btnMenu.classList.contains("activeMenu")) {
        btnMenu.classList.remove("activeMenu");
        btnPierwiastki.classList.remove("activeMenu");
        btnZwiazki.classList.add("activeMenu");
        zakladkaMenu.classList.remove("activeZakladka");
    }
});
//zamykanie menu - przycisk
function closeMenu() {
    menuWrapper.style.right = "-384px";
    btnMenu.classList.remove("activeMenu");
    btnPierwiastki.classList.remove("activeMenu");
    btnZwiazki.classList.remove("activeMenu");
    zakladkaMenu.classList.remove("activeZakladka");
}