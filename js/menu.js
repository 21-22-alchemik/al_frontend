//sprawdzanie rozmiaru okan przegladarki
function checkSize() {
	//wczytanie wartosci okna przegladarki
	var width = window.innerWidth;
	var newDivMessage = document.getElementById('newDivMessage');
	//min 1000px, sprawdzenie
	if (width < 1000) {
		newDivMessage.classList.remove('active_badSize');
	} else {
		newDivMessage.classList.add('active_badSize');
	}
}
//sprawdzenie co zmiane szerokosci okna przegladarki
window.addEventListener('resize', checkSize);

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
		btnMenu.classList.toggle('active_menu');
		zakladkaMenu.classList.add('active_zakladka');
	} else if (element === "menu_pierwiastki") {
		btnPierwiastki.classList.toggle('active_menu');
	} else if (element === "menu_zwiazki") {
		btnZwiazki.classList.toggle('active_menu');
	}
}
btnMenu.addEventListener('click', () => {
	if (btnPierwiastki.classList.contains("active_menu") || btnZwiazki.classList.contains("active_menu")) {
		btnMenu.classList.add('active_menu');
		btnPierwiastki.classList.remove('active_menu');
		btnZwiazki.classList.remove('active_menu');
		zakladkaMenu.classList.add('active_zakladka');
	}
})
btnPierwiastki.addEventListener('click', () => {
	if (btnMenu.classList.contains("active_menu") || btnZwiazki.classList.contains("active_menu")) {
		btnPierwiastki.classList.add('active_menu');
		btnMenu.classList.remove('active_menu');
		btnZwiazki.classList.remove('active_menu');
		zakladkaMenu.classList.remove('active_zakladka');
	}
})
btnZwiazki.addEventListener('click', () => {
	if (btnPierwiastki.classList.contains("active_menu") || btnMenu.classList.contains("active_menu")) {
		btnMenu.classList.remove('active_menu');
		btnPierwiastki.classList.remove('active_menu');
		btnZwiazki.classList.add('active_menu');
		zakladkaMenu.classList.remove('active_zakladka');
	}
})
//zamykanie menu - przycisk
function closeMenu() {
	menuWrapper.style.right = "-384px";
	btnMenu.classList.remove('active_menu');
	btnPierwiastki.classList.remove('active_menu');
	btnZwiazki.classList.remove('active_menu');
	zakladkaMenu.classList.remove('active_zakladka')
}