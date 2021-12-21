document.body.innerHTML = '<div id="atomsHolder" class="atomsHolder"></div><div id="connsHolder" class="connsHolder"></div>';

import {counter, Atom, Connection, connection, atomsList, atomsHolder, connsList, connsHolder, zIndexVal} from '../../js/modules/classes';


atomsHolder.innerHTML="";
atomsList = new Array();
connsHolder.innerHTML="";
connsList = new Array();

//testing adding atoms
atomsList.push(new Atom("H", "black", 1));

test('AtomAdd', () => {
    expect(atomsList.length).toBe(1);
});

test('AtomAddDOM', () => {
    expect(atomsHolder.children.length).toBe(1);
});

atomsList.push(new Atom("H", "black", 1));

test('SecondAtomAdd', () => {
    expect(atomsList.length).toBe(2);
});

test('SecondAtomAddDOM', () => {
    expect(atomsHolder.children.length).toBe(2);
});


//testing connections

connection(atomsList[0],atomsList[1]);

test('ConnectionAdd', () => {
    expect(connsList.length).toBe(1);
});

test('ConnectionAddDOM', () => {
    expect(connsHolder.children.length).toBe(1);
});

test('ConnectionValue', () => {
    expect(connsList[0].count).toBe(1);
});

test('AtomConnectionValue', () => {
    expect(atomsList[0].check()).toBe(0);
});

test('SecondAtomConnectionValue', () => {
    expect(atomsList[1].check()).toBe(0);
});

//second connection
connection(atomsList[0],atomsList[1]);

test('SecondConnectionAdd', () => {
    expect(connsList.length).toBe(1);
});

test('SecondConnectionAddDOM', () => {
    expect(connsHolder.children.length).toBe(1);
});

test('SecondConnectionValue', () => {
    expect(connsList[0].count).toBe(2);
});

test('AtomSecondConnectionValue', () => {
    expect(atomsList[0].check()).toBe(1);
});

test('SecondAtomSecondConnectionValue', () => {
    expect(atomsList[1].check()).toBe(1);
});

//third connection - reversed
connection(atomsList[1],atomsList[0]);

test('ThirdConnectionAdd', () => {
    expect(connsList.length).toBe(1);
});

test('ThirdConnectionAddDOM', () => {
    expect(connsHolder.children.length).toBe(1);
});

test('ThirdConnectionValue', () => {
    expect(connsList[0].count).toBe(3);
});

test('AtomThirdConnectionValue', () => {
    expect(atomsList[0].check()).toBe(2);
});

test('SecondAtomThirdConnectionValue', () => {
    expect(atomsList[1].check()).toBe(2);
});


//atoms position test
//default position
test('AtomDOMLeft', () => {
    expect(atomsList[0].DOM.offsetLeft).toBe(5);
});
test('AtomDOMTop', () => {
    expect(atomsList[0].DOM.offsetTop).toBe(5);
});

//custom position
atomsList.push(new Atom("H","black",1,10,20));
test('CustomAtomDOMLeft', () => {
    expect(atomsList[0].DOM.offsetLeft).toBe(10);
});
test('CustomAtomDOMTop', () => {
    expect(atomsList[0].DOM.offsetTop).toBe(20);
});