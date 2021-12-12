/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
//Izocyjanian metylu


function easyExample(){
    clearAll();
    // Atomy
    atomsList.push(new Atom("H", getColorBySymbol("H"), 1));
    atomsList.push(new Atom("H", getColorBySymbol("H"), 1, 85, 5));
    atomsList.push(new Atom("H", getColorBySymbol("H"), 1, 165, 5));
    atomsList.push(new Atom("C", getColorBySymbol("C"), 4,85,85));
    atomsList.push(new Atom("N", getColorBySymbol("N"), 3, 85, 165));
    atomsList.push(new Atom("C", getColorBySymbol("C"), 4, 85, 245));
    atomsList.push(new Atom("O", getColorBySymbol("O"), 2, 85, 325));

    // wiązania
    connection(atomsList[0], atomsList[3]);
    connection(atomsList[1], atomsList[3]);
    connection(atomsList[2], atomsList[3]);
    connection(atomsList[3], atomsList[4]);
    connection(atomsList[4], atomsList[5]);
    connection(atomsList[4], atomsList[5]);
    connection(atomsList[5], atomsList[6]);
    connection(atomsList[5], atomsList[6]);
}
