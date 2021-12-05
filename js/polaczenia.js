/* eslint-disable no-unused-vars */
class Counter {
    constructor() {
        this.atoms = 0;
        this.conns = 0;
    }
    atom() {
        return this.atoms++;
    }
    connection() {
        return this.conns++;
    }
}

const counter = new Counter();

class Atom {
	constructor(Name, Color, Valence = 0, X = 5, Y = 5) {
		this.atomId = counter.atom();
		this.name = Name;
		this.color = Color;
		this.x = X;
		this.y = Y;
		this.connections = new Array();
		this.valence = Valence;
		this.DOM = null;

		this.generate();
	}
	//dodawanie połączenia
	newConnection(conn) {
		/*if(this.connections.includes(conn))
			this.connections[this.connections.indexOf(conn)].changeCount(1);
		else*/
		this.connections.push(conn);
	}
	removeConnection(conn){
		//console.log(conn);
		//console.log(this.connections);
		this.connections.splice(this.connections.indexOf(conn));
		//console.log(this.connections);
	}
    //generowanie obiektu
    generate(){
        var atom = document.createElement("DIV");
        atom.style.backgroundColor = this.color;
        atom.innerHTML = this.name + "<sub>" + this.valence + "</sub>";
        atom.style.top = this.y+"px";
        atom.style.left = this.x+"px";
		atom.id = "atom_" + this.atomId;
        atomsHolder.appendChild(atom);
        this.DOM = atom;
        dragElement(this);
    }
    check(){
        var sum = 0;
        this.connections.forEach(elem => {
            sum += elem.count;
        });
        //ten if else jest tylko informacyjny, później sie go usunie bo on i tak nic nie zmienia
        //zbyt dużo wiązań
        if(sum > this.valence){
            console.log("ZA DUŻO!!!");
        }
        //zbyt mało wiązań - domyślnie są jeszcze atomy wodoru, które są niby domyślne i uzupełniają te braki w sumie, ale jeśli założymy tryb edukacyjny - wtedy użytkownik musi dodać je sam
        else if(sum < this.valence){
            console.log("ZA MAŁO!!!");
        }
        //jest dobrze
        else{
            console.log("jakby to powiedział Paweł, jest git");
        }
        //zwracana wartość
        // 0 - git
        //ujemna - za mało wiązań
        //dodatnia - zbyt dużo wiązań
        return sum - this.valence;
    }
}

class Connection {
    constructor(Parent1, Parent2, Count = 1) {
        this.connectionId = counter.connection();
        this.DOM = null;
        this.parent1 = Parent1;
        this.parent2 = Parent2;
        this.count = Count;
        // podpięcie pod rodziców
        Parent1.newConnection(this);
        Parent2.newConnection(this);
        // wygenerowanie w DOM
        this.generate();
    }
    generate() {
    // wygenerowanie obiektu DOM
        var conn = document.createElement("DIV");
        conn.className = "connection" + this.count;
		conn.id = "connection_" + this.connectionId;
        connsHolder.appendChild(conn);
        // podpięcie odnośnika do obiektu DOM
        this.DOM = conn;
        // utworzenie fizycznego połączenia
        connectionMove(this);
    }
    delete() {
        //this.changeCount(-100);
        // usunięcie wpisu w rodzicach
        this.parent1.removeConnection(this);
        this.parent2.removeConnection(this);
        // usunięcie obiektu DOM
        // connsHolder.removeChild(this.DOM);

    // destroy(this);
    }
    changeCount(value) {
    // zmiana rodzaju połączenia
        this.count += value;
        if (this.count > 9) {
            console.log("zbyt potężne wiązanie!");
            this.count = 9;
        } else if (this.count <= 0)
            this.delete();
        else
            this.DOM.classList = "connection" + this.count;
        connectionMove(this);
    }
}

//funkcja dodawania wiązania między atomami
function connection(Parent1, Parent2){
    var checker = false;
    Parent1.connections.forEach(elem => { 
        if(elem.parent1 == Parent2 || elem.parent2 == Parent2) {
            elem.changeCount(1);
            checker = true;
        }
    });
    if(!checker)
        connsList.push(new Connection(Parent1, Parent2));
}

var atomsHolder = document.getElementById("atomsHolder");
var connsHolder = document.getElementById("connsHolder");
var atomsList = new Array();
var connsList = new Array();

// Atomy
//atomsList.push(new Atom("H", "rebeccapurple", 1));
//atomsList.push(new Atom("O", "forestgreen", 2, 85, 5));
//atomsList.push(new Atom("H", "rebeccapurple", 1, 5, 85));

// wiązania
//connection(atomsList[0], atomsList[1]);
//connection(atomsList[0], atomsList[1]);
//connection(atomsList[1], atomsList[2]);

// atomsList.forEach(elem => elem.check());
//WALIDACJA
var btnCheck = document.getElementById("sprawdzZadanie");
btnCheck.addEventListener("click", () => {
    atomsList.forEach(elem => elem.check());
});

//tryb usuwania połączeń
//conn1.addEventListener("click", event => {connsHolder.removeChild(conn1);});
//connection(document.getElementById("moving1"),document.getElementById("connection1"),document.getElementById("moving2"));


var zIndexVal = 3;

function dragElement(atom) {
	var elmnt = atom.DOM;
	var pos1 = 0,
		pos2 = 0,
		pos3 = 0,
		pos4 = 0;
	//przypisanie funkcji naciśnięcia klawisza myszki
	elmnt.onmousedown = dragMouseDown;

	function dragMouseDown(e) {
		e = e || window.event;
		e.preventDefault();

		//z index +1
		if (elmnt.style.zIndex == "")
			elmnt.style.zIndex = zIndexVal++;
		else
			elmnt.style.zIndex = parseInt(elmnt.style.zIndex) + 1 == zIndexVal ? elmnt.style.zIndex : zIndexVal++;

		//pozycja startowa myszy
		pos3 = e.clientX;
		pos4 = e.clientY;
		//funkcja przy puszczeniu klawisza myszki
		document.onmouseup = closeDragElement;
		//funkcja przy ruszaniu myszką 
		document.onmousemove = elementDrag;
	}

	function elementDrag(e) {
		e = e || window.event;
		e.preventDefault();

		//stara i nowa pozycja myszki
		pos1 = pos3 - e.clientX;
		pos2 = pos4 - e.clientY;
		pos3 = e.clientX;
		pos4 = e.clientY;
		// nowa pozycja elementu
		elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
		elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";

		//zmiana wyświetlania wiązania
		atom.connections.forEach(conn => connectionMove(conn));
	}

	function closeDragElement() {
		//przerwij poruszanie gdy klawisz myszy jest puszczony
		document.onmouseup = null;
		document.onmousemove = null;
		//czy div jest w przestrzeni planszy
		if (parseInt(elmnt.style.top.substr(0, elmnt.style.top.length - 2)) < 0) {
			elmnt.style.top = "5px";
			atom.connections.forEach(conn => connectionMove(conn));
		}
		if (parseInt(elmnt.style.left.substr(0, elmnt.style.left.length - 2)) < 0) {
			elmnt.style.left = "5px";
			atom.connections.forEach(conn => connectionMove(conn));
		}
		//popraw z-indexy
		zIndexReduction();
	}
}

function zIndexReduction() {
	var tab = new Array();
	atomsList.forEach(elem => tab.push([elem.DOM.style.zIndex, elem]));
	tab = tab.sort();
	for (var i = 3; i < tab.length + 3; i++) {
		tab[i - 3][1].DOM.style.zIndex = i;
	}
	zIndexVal = i;
}

function connectionMove(elem) {
	if (elem.count > 0) {
		var x1, x2, y1, y2;
		var div1 = elem.parent1;
		var div2 = elem.parent2;

		y1 = parseInt(div1.DOM.style.top.substr(0, div1.DOM.style.top.length - 2)) + 37;
		x1 = parseInt(div1.DOM.style.left.substr(0, div1.DOM.style.left.length - 2)) + 37;
		y2 = parseInt(div2.DOM.style.top.substr(0, div2.DOM.style.top.length - 2)) + 37;
		x2 = parseInt(div2.DOM.style.left.substr(0, div2.DOM.style.left.length - 2)) + 37;

		var angle = Math.atan2((y1 - y2), (x1 - x2)) * (180 / Math.PI);
		var length = Math.sqrt(((x2 - x1) * (x2 - x1)) + ((y2 - y1) * (y2 - y1)));
		var cx = ((x1 + x2) / 2) - (length / 2);
		var cy = ((y1 + y2) / 2) - (elem.DOM.offsetHeight / 2);

		elem.DOM.style.top = cy + "px";
		elem.DOM.style.left = cx + "px";
		elem.DOM.style.width = length + "px";
		elem.DOM.style.transform = "rotate(" + angle + "deg)";
	}
}