document.body.innerHTML = '<div id="atomsHolder" class="atomsHolder"></div><div id="connsHolder" class="connsHolder"></div>';
var Classes = require("../../js/modules/classes");
//import {counter, Atom, Connection, connection, atomsList, atomsHolder, connsList, connsHolder, zIndexVal} from '../../js/modules/classes';

Classes.atomsHolder.innerHTML="";
Classes.atomsList = new Array();
Classes.connsHolder.innerHTML="";
Classes.connsList = new Array();

//testing adding atoms
atomsList.push(new Classes.Atom("H", "black", 1));

test('AtomAdd', () => {
    expect(Classes.atomsList.length).toBe(1);
});

test('AtomAddDOM', () => {
    expect(Classes.atomsHolder.children.length).toBe(1);
});

atomsList.push(new Classes.Atom("H", "black", 1));

test('SecondAtomAdd', () => {
    expect(Classes.atomsList.length).toBe(2);
});

test('SecondAtomAddDOM', () => {
    expect(Classes.atomsHolder.children.length).toBe(2);
});


//testing connections

connection(Classes.atomsList[0],Classes.atomsList[1]);

test('ConnectionAdd', () => {
    expect(Classes.connsList.length).toBe(1);
});

test('ConnectionAddDOM', () => {
    expect(Classes.connsHolder.children.length).toBe(1);
});

test('ConnectionValue', () => {
    expect(Classes.connsList[0].count).toBe(1);
});

test('AtomConnectionValue', () => {
    expect(Classes.atomsList[0].check()).toBe(0);
});

test('SecondAtomConnectionValue', () => {
    expect(Classes.atomsList[1].check()).toBe(0);
});

//second connection
connection(Classes.atomsList[0],atomsList[1]);

test('SecondConnectionAdd', () => {
    expect(Classes.connsList.length).toBe(1);
});

test('SecondConnectionAddDOM', () => {
    expect(Classes.connsHolder.children.length).toBe(1);
});

test('SecondConnectionValue', () => {
    expect(Classes.connsList[0].count).toBe(2);
});

test('AtomSecondConnectionValue', () => {
    expect(Classes.atomsList[0].check()).toBe(1);
});

test('SecondAtomSecondConnectionValue', () => {
    expect(Classes.atomsList[1].check()).toBe(1);
});

//third connection - reversed
connection(Classes.atomsList[1],Classes.atomsList[0]);

test('ThirdConnectionAdd', () => {
    expect(Classes.connsList.length).toBe(1);
});

test('ThirdConnectionAddDOM', () => {
    expect(Classes.connsHolder.children.length).toBe(1);
});

test('ThirdConnectionValue', () => {
    expect(Classes.connsList[0].count).toBe(3);
});

test('AtomThirdConnectionValue', () => {
    expect(Classes.atomsList[0].check()).toBe(2);
});

test('SecondAtomThirdConnectionValue', () => {
    expect(Classes.atomsList[1].check()).toBe(2);
});


//atoms position test
//default position
test('AtomDOMLeft', () => {
    expect(Classes.atomsList[0].DOM.offsetLeft).toBe(5);
});
test('AtomDOMTop', () => {
    expect(Classes.atomsList[0].DOM.offsetTop).toBe(5);
});

//custom position
atomsList.push(new Classes.Atom("H","black",1,10,20));
test('CustomAtomDOMLeft', () => {
    expect(Classes.atomsList[0].DOM.offsetLeft).toBe(10);
});
test('CustomAtomDOMTop', () => {
    expect(Classes.atomsList[0].DOM.offsetTop).toBe(20);
});