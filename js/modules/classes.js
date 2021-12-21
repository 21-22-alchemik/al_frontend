/* eslint-disable no-unused-vars */
export class Counter {
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

export const counter = new Counter();

export class Atom{
    constructor(Name, Color, Valence=0, X=5, Y=5){
        this.id = counter.atom();
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
    newConnection(conn){
        /*if(this.connections.includes(conn))
			this.connections[this.connections.indexOf(conn)].changeCount(1);
		else*/
        this.connections.push(conn);
    }
    /*removeConnection(conn){
		console.log(conn);
		console.log(this.connections);
		this.connections.pop(this.connections.indexOf(conn));
		console.log(this.connections);
	}*/
    //generowanie obiektu
    generate(){
        var atom = document.createElement("DIV");
        atom.style.backgroundColor = this.color;
        atom.innerHTML = this.name;
        atom.style.top = this.y+"px";
        atom.style.left = this.x+"px";
        atom.style.zIndex = zIndexVal++;
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

export class Connection {
    constructor(Parent1, Parent2, Count = 1) {
        this.id = counter.connection();
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
        connsHolder.appendChild(conn);
        // podpięcie odnośnika do obiektu DOM
        this.DOM = conn;
        // utworzenie fizycznego połączenia
        connectionMove(this);
    }
    delete() {
        this.changeCount(-100);
        // usunięcie wpisu w rodzicach
        // this.parent1.removeConnection(this);
        // this.parent2.removeConnection(this);
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
export function connection(Parent1, Parent2){
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

export var atomsHolder = document.getElementById("atomsHolder");
export var connsHolder = document.getElementById("connsHolder");
export var atomsList = new Array();
export var connsList = new Array();


export var zIndexVal = 3;

export function dragElement(atom) {
    var elmnt = atom.DOM;
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    // przypisanie funkcji naciśnięcia klawisza myszki
    elmnt.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();

        // z index +1
        if (elmnt.style.zIndex == "")
            elmnt.style.zIndex = zIndexVal++;
        else
            elmnt.style.zIndex = parseInt(elmnt.style.zIndex) + 1 == zIndexVal ?
                elmnt.style.zIndex :
                zIndexVal++;

        // pozycja startowa myszy
        pos3 = e.clientX;
        pos4 = e.clientY;
        // funkcja przy puszczeniu klawisza myszki
        document.onmouseup = closeDragElement;
        // funkcja przy ruszaniu myszką
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();

        // stara i nowa pozycja myszki
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // nowa pozycja elementu
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";

        //zapisz x i y
        atom.y = parseInt(elmnt.style.top.substr(0, elmnt.style.top.length-2));
        atom.x = parseInt(elmnt.style.left.substr(0, elmnt.style.left.length-2));
        //console.log(elmnt.x + " - "+elmnt.y);

        // zmiana wyświetlania wiązania
        atom.connections.forEach(conn => connectionMove(conn));
    }

    function closeDragElement() {
        //przerwij poruszanie gdy klawisz myszy jest puszczony
        document.onmouseup = null;
        document.onmousemove = null;
        //czy div jest w przestrzeni planszy
        var restartNeeded = false;
        if(parseInt(elmnt.style.top.substr(0, elmnt.style.top.length-2))<0){
            elmnt.style.top="5px";
            restartNeeded = true;
        }
        if(parseInt(elmnt.style.top.substr(0, elmnt.style.top.length-2)) > (window.innerHeight - 75 - 75)) {
            elmnt.style.top = (window.innerHeight - 75 - 5 - 75) + "px";
            restartNeeded = true;
        }
        if(parseInt(elmnt.style.left.substr(0, elmnt.style.left.length-2))<0){
            elmnt.style.left="5px";
            restartNeeded = true;
        }
        if(parseInt(elmnt.style.left.substr(0, elmnt.style.left.length-2)) > (window.innerWidth - 58 - 75)) {
            elmnt.style.left = (window.innerWidth - 58 - 5 - 75) + "px";
            restartNeeded = true;
        }

        if(restartNeeded){
            atom.connections.forEach(conn => connectionMove(conn));
        }

        //popraw z-indexy
        zIndexReduction();
    }  
}

export function zIndexReduction(){
    var tab = new Array();
    atomsList.forEach(elem => tab.push([elem.DOM.style.zIndex,elem]));
    tab = tab.sort();
    for(var i = 3; i < tab.length+3;i++){
        tab[i-3][1].DOM.style.zIndex=i;
    }
    zIndexVal = i;
}

export function connectionMove(elem){
    if(elem.count>0){
        var x1, x2, y1, y2;
        var div1 = elem.parent1;
        var div2 = elem.parent2;

        y1 = parseInt(div1.DOM.style.top.substr(0, div1.DOM.style.top.length-2))+37;
        x1 = parseInt(div1.DOM.style.left.substr(0, div1.DOM.style.left.length-2))+37;
        y2 = parseInt(div2.DOM.style.top.substr(0, div2.DOM.style.top.length-2))+37;
        x2 = parseInt(div2.DOM.style.left.substr(0, div2.DOM.style.left.length-2))+37;
	
        var angle = Math.atan2((y1-y2),(x1-x2))*(180/Math.PI);
        var length = Math.sqrt(((x2-x1) * (x2-x1)) + ((y2-y1) * (y2-y1)));
        var cx = ((x1 + x2) / 2) - (length / 2);
        var cy = ((y1 + y2) / 2) - (elem.DOM.offsetHeight / 2);

        elem.DOM.style.top = cy + "px";
        elem.DOM.style.left = cx + "px";
        elem.DOM.style.width = length +"px"; 
        elem.DOM.style.transform="rotate(" + angle + "deg)";
    }
}