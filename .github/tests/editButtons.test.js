document.body.innerHTML = "<button class=\"sprawdzZadanie\" id=\"sprawdzZadanie\">SPRAWDŹ</button>" + 
"<button class=\"przyciskEdycji\" id=\"addConnection\">DODAJ WIĄZANIA</button>" + 
"<button class=\"przyciskEdycji\" id=\"deleteConnectionAtom\">USUŃ ELEMENT</button>" +
"<button class=\"przyciskEdycji\" id=\"getAtomColor\">POBIERZ KOLOR ATOMU</button>" +
"<button class=\"przyciskEdycji\" id=\"changeAtomColor\">NADAJ KOLOR ATOMOWI</button>" +
"<input class=\"przyciskEdycji\" type=\"color\" id=\"colorPicker\"></input>" +
"<div id=\"atomsHolder\" class=\"atomsHolder\"></div>" +
"<div id=\"connsHolder\" class=\"connsHolder\"></div>" + 
"<div class=\"wrapper menuClosed\" id=\"menuWrapper\"></div>";

const TestAtom = require('../../js/classes.js').TestAtom;
const connection = require('../../js/classes.js').connection;
const enablePanel = require('../../js/editButtons.js').enablePanel;
const disablePanel = require('../../js/editButtons.js').disablePanel;
const getConnectionById = require('../../js/editButtons.js').getConnectionById;
const getAtomById = require('../../js/editButtons.js').getAtomById;

const atomsList = require('../../js/classes.js').atomsList;
const connsList = require('../../js/classes.js').connsList;

atomsList.push(new TestAtom("H", "black", 1));
atomsList.push(new TestAtom("H", "black", 1, 85, 5));
atomsList.push(new TestAtom("H", "black", 1, 165, 5));
atomsList.push(new TestAtom("C", "gray", 4,85,85));
atomsList.push(new TestAtom("N", "blue", 3, 85, 165));
atomsList.push(new TestAtom("C", "gray", 4, 85, 245));
atomsList.push(new TestAtom("O", "red", 2, 85, 325));

connection(atomsList[0], atomsList[3]);
connection(atomsList[1], atomsList[3]);
connection(atomsList[2], atomsList[3]);
connection(atomsList[3], atomsList[4]);
connection(atomsList[4], atomsList[5]);
connection(atomsList[4], atomsList[5]);
connection(atomsList[5], atomsList[6]);
connection(atomsList[5], atomsList[6]);

test('atomsCount', () => {
    expect(atomsList.length).toBe(7);
});

test('connectionCount', () => {
    expect(connsList.length).toBe(6);
});

var addConnection = document.getElementById("addConnection");
var deleteConnectionAtom = document.getElementById("deleteConnectionAtom");

disablePanel(addConnection);
enablePanel(addConnection);
disablePanel(deleteConnectionAtom);

test('is DeleteConnectionAtom button stil enabled', () => {
    expect(deleteConnectionAtom.style.borderColor).toBe('black');
});

test('is not clicked button disabled', () => {
    expect(addConnection.style.pointerEvents).toBe('none');
    expect(addConnection.style.borderColor).toBe('white');
});

test('checking connections sorting', () => {
    expect(getConnectionById(document.getElementById('connection_3'), connsList).index).toBe(3);
});

test('checking atoms sorting', () => {
    expect(getAtomById(document.getElementById('atom_5'), atomsList).index).toBe(5);
});

test('checking connection count', () => {
    expect(getConnectionById(document.getElementById('connection_5'), connsList).connection.count).toBe(2);
});

test('checking atom color', () => {
    expect(getAtomById(document.getElementById('atom_0'), atomsList).atom.color).toBe('black');
});