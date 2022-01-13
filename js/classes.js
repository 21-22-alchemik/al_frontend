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
    //add connections
    newConnection(conn) {
        this.connections.push(conn);
    }
    removeConnection(conn){
        this.connections.splice(this.connections.indexOf(conn), 1);
    }

    //object generation
    generate(){
        var atom = document.createElement("DIV");
        atom.style.backgroundColor = this.color;
        atom.innerHTML = `${this.name}<sup>${this.valence}</sup>`;
        atom.style.top = this.y+"px";
        atom.style.left = this.x+"px";
        atom.id = "atom_" + this.atomId;
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
        //too many bindings
        if(sum > this.valence){
            console.log("ZA DUŻO!!!");
        }
        //too few bindings
        else if(sum < this.valence){
            console.log("ZA MAŁO!!!");
        }
        //it's good
        else{
            console.log("DOBRZE!!!");
        }
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
        // connected under parents
        Parent1.newConnection(this);
        Parent2.newConnection(this);
        // DOM generation
        this.generate();
    }
    generate() {
        // DOM object generation
        var conn = document.createElement("DIV");
        conn.className = "connection" + this.count;
        conn.id = "connection_" + this.connectionId;
        connsHolder.appendChild(conn);
        // link to the DOM object
        this.DOM = conn;
        // create connection
        connectionMove(this);
    }
    delete() {
        // deleting an entry in parents
        this.parent1.removeConnection(this);
        this.parent2.removeConnection(this);
        // remove DOM element
        // connsHolder.removeChild(this.DOM);
        // destroy(this);
    }
    changeCount(value) {
    // changing the connection type
        this.count += value;
        if (this.count > 9) {
            console.log("Zbyt potężne wiązanie!");
            this.count = 9;
        } else if (this.count <= 0)
            this.delete();
        else
            this.DOM.classList = "connection" + this.count;
        connectionMove(this);
    }
}

// function of adding a bond between atoms
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

function dragElement(atom) {
    var elmnt = atom.DOM;
    var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
    //assigning a mouse button press function
    elmnt.onmousedown = dragMouseDown;

    elmnt.ontouchstart = dragTouchStart;
    elmnt.ontouchmove = touchElementDrag;
    elmnt.ontouchend = closeDragElement;

    function dragTouchStart(e) {
        e.preventDefault();

        let touches = e.changedTouches;
        if(touches.length <= 0) return;

        //z index +1
        if (elmnt.style.zIndex == "")
            elmnt.style.zIndex = zIndexVal++;
        else
            elmnt.style.zIndex = parseInt(elmnt.style.zIndex) + 1 == zIndexVal ? elmnt.style.zIndex : zIndexVal++;
    
        pos3 = touches[0].pageX;
        pos4 = touches[0].pageY;
    }

    function touchElementDrag(e) {
        e.preventDefault();
        let touches = e.changedTouches;
        if(touches.length <= 0) return;

        elementDrag(touches[0]);
    }

    function mouseElementDrag(e) {
        e = e || window.event;
        e.preventDefault();

        elementDrag(e);
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();

        //z index +1
        if (elmnt.style.zIndex == "")
            elmnt.style.zIndex = zIndexVal++;
        else
            elmnt.style.zIndex = parseInt(elmnt.style.zIndex) + 1 == zIndexVal ? elmnt.style.zIndex : zIndexVal++;

        //mouse start position
        pos3 = e.pageX;
        pos4 = e.pageY;
        //function when releasing the mouse button
        document.onmouseup = closeDragElement;
        //mouseover function
        document.onmousemove = mouseElementDrag;
    }

    function elementDrag(e) {
        //old and new mouse position
        pos1 = pos3 - e.pageX;
        pos2 = pos4 - e.pageY;
        pos3 = e.pageX;
        pos4 = e.pageY;
        // new position of element
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";

        //save x and y
        atom.y = parseInt(elmnt.style.top.substr(0, elmnt.style.top.length-2));
        atom.x = parseInt(elmnt.style.left.substr(0, elmnt.style.left.length-2));

        // changing the display of the binding
        atom.connections.forEach(conn => connectionMove(conn));
    }

    function closeDragElement() {
        //stop moving when the mouse button is released
        document.onmouseup = null;
        document.onmousemove = null;
        //is the div in board space?
        var restartNeeded = false;
        if(parseInt(elmnt.style.top.substr(0, elmnt.style.top.length-2))<0){
            atom.y = 5;
            elmnt.style.top="5px";
            restartNeeded = true;
        }
        if(parseInt(elmnt.style.top.substr(0, elmnt.style.top.length-2)) > (document.getElementById("wizualizacjaDanych").offsetHeight)- 75 - 40) {
            atom.y = (document.getElementById("wizualizacjaDanych").offsetHeight - 75 - 40);
            elmnt.style.top = (document.getElementById("wizualizacjaDanych").offsetHeight - 75 - 40) + "px";
            restartNeeded = true;
        }
        if(parseInt(elmnt.style.left.substr(0, elmnt.style.left.length-2))<0){
            atom.x = 5;
            elmnt.style.left="5px";
            restartNeeded = true;
        }
        if(parseInt(elmnt.style.left.substr(0, elmnt.style.left.length-2)) > (document.getElementById("wizualizacjaDanych").offsetWidth)- 75 - 40 ){
            atom.x = (document.getElementById("wizualizacjaDanych").offsetWidth - 75 - 40);
            elmnt.style.left = (document.getElementById("wizualizacjaDanych").offsetWidth - 75 - 40) + "px";
            restartNeeded = true;
        }

        if(restartNeeded){
            atom.connections.forEach(conn => connectionMove(conn));
        }

        zIndexReduction();
    }  
}

function zIndexReduction() {
    var tab = new Array();
    atomsList.forEach(elem => tab.push([elem.DOM.style.zIndex, elem]));
    tab = tab.sort(function(a,b) { return parseInt(a) - parseInt(b); });
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

function resizeDragElement(atom) {
    var elmnt = atom.DOM;
    
    //is the div in board space?
    var restartNeeded = false;
    if(parseInt(elmnt.style.top.substr(0, elmnt.style.top.length-2))<0){
        atom.y = 5;
        elmnt.style.top="5px";
        restartNeeded = true;
    }
    if(parseInt(elmnt.style.top.substr(0, elmnt.style.top.length-2)) > (document.getElementById("wizualizacjaDanych").offsetHeight)- 75 - 40) {
        atom.y = (document.getElementById("wizualizacjaDanych").offsetHeight - 75 - 40);
        elmnt.style.top = (document.getElementById("wizualizacjaDanych").offsetHeight - 75 - 40) + "px";
        restartNeeded = true;
    }
    if(parseInt(elmnt.style.left.substr(0, elmnt.style.left.length-2))<0){
        atom.x = 5;
        elmnt.style.left="5px";
        restartNeeded = true;
    }
    if(parseInt(elmnt.style.left.substr(0, elmnt.style.left.length-2)) > (document.getElementById("wizualizacjaDanych").offsetWidth)- 75 - 40 ){
        atom.x = (document.getElementById("wizualizacjaDanych").offsetWidth - 75 - 40);
        elmnt.style.left = (document.getElementById("wizualizacjaDanych").offsetWidth - 75 - 40) + "px";
        restartNeeded = true;
    }

    if(restartNeeded){
        atom.connections.forEach(conn => connectionMove(conn));
    }

}

module.exports.TestAtom = Atom; // eslint-disable-line no-undef
module.exports.TestConnection = Connection; // eslint-disable-line no-undef
module.exports.connection = connection; // eslint-disable-line no-undef
module.exports.atomsList = atomsList; // eslint-disable-line no-undef
module.exports.connsList = connsList; // eslint-disable-line no-undef