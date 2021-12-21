document.body.innerHTML = '<div id="atomsHolder" class="atomsHolder"></div><div id="connsHolder" class="connsHolder"></div>';

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

class Atom{
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
        this.connections.push(conn);
    }
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
        //dragElement(this);
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
        //connectionMove(this);
    }
    delete() {
        this.changeCount(-100);
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
        //connectionMove(this);
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

var zIndexVal = 3;


//testing adding atoms

test('AtomAdd', () => {
    atomsList = new Array();
    connsList = new Array();
    atomsList.push(new Atom("H1", "black", 1));
    expect(atomsList.length).toBe(1);
    expect(atomsHolder.children.length).toBe(1);
    atomsList.push(new Atom("H2", "black", 1));
    //comment
    expect(atomsList.length).toBe(2);
    //comment
    expect(atomsHolder.children.length).toBe(2);
    //comment
});


//testing connections


test('ConnectionAdd', () => {
    atomsList = new Array();
    //comment
    //comment
    connsList = new Array();
    atomsList.push(new Atom("H3", "black", 1));
    atomsList.push(new Atom("H4", "black", 1));
    connection(atomsList[0],atomsList[1]);

    expect(connsList.length).toBe(1);
    //comment
    expect(connsHolder.children.length).toBe(1);
    //comment
    expect(connsList[0].count).toBe(1);
    //comment
    expect(atomsList[0].check()).toBe(0);
    expect(atomsList[1].check()).toBe(0);
});

//second connection

test('SecondConnectionAdd', () => {
    atomsList = new Array();
    //comment
    connsList = new Array();
    //comment
    atomsList.push(new Atom("H5", "black", 1));
    atomsList.push(new Atom("H6", "black", 1));
    connection(atomsList[0],atomsList[1]);
    connection(atomsList[0],atomsList[1]);

    expect(connsList.length).toBe(1);
    //comment
    expect(connsHolder.children.length).toBe(1);
    expect(connsList[0].count).toBe(2);
    //comment
    expect(atomsList[0].check()).toBe(1);
    expect(atomsList[1].check()).toBe(1);
});

//third connection - reversed
test('SecondConnectionAdd', () => {
    //comment
    atomsList = new Array();
    //comment
    connsList = new Array();
    atomsList.push(new Atom("H7", "black", 1));
    atomsList.push(new Atom("H8", "black", 1));
    connection(atomsList[0],atomsList[1]);
    //comment
    connection(atomsList[0],atomsList[1]);
    //comment
    connection(atomsList[1],atomsList[0]);
    //comment

    expect(connsList.length).toBe(1);
    expect(connsHolder.children.length).toBe(1);
    //comment
    expect(connsList[0].count).toBe(3);
    expect(atomsList[0].check()).toBe(2);
    //comment
    expect(atomsList[1].check()).toBe(2);
});


//atoms position test
//default position
test('AtomDOM', () => {
    atomsList = new Array();
    connsList = new Array();
    //comment
    atomsList.push(new Atom("H9", "black", 1));
    expect(atomsList[0].DOM.style.left).toBe("5px");
    expect(atomsList[0].DOM.style.top).toBe("5px");
});

//custom position
test('CustomAtomDOM', () => {
    atomsList = new Array();
    //comment
    connsList = new Array();
    atomsList.push(new Atom("H10","black",1,10,20));
    expect(atomsList[0].DOM.style.left).toBe("10px");
    expect(atomsList[0].DOM.style.top).toBe("20px");
});