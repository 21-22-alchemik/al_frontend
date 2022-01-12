document.body.innerHTML = '<div id="atomsHolder" class="atomsHolder"></div><div id="connsHolder" class="connsHolder"></div>';

const Atom = require('../../js/classes.js').TestAtom;
const connection = require('../../js/classes.js').connection;

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