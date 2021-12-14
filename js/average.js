/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
//Wanilina

function averageExample(){
    clearAll();
    // Atomy
    atomsList.push(new Atom("O", getColorBySymbol("O"), 2, 85, 5));
    atomsList.push(new Atom("H", getColorBySymbol("H"), 1, 245, 5));
    atomsList.push(new Atom("C", getColorBySymbol("C"), 4, 165, 45));
    atomsList.push(new Atom("C", getColorBySymbol("C"), 4, 165, 125));
    atomsList.push(new Atom("C", getColorBySymbol("C"), 4, 85, 165));
    atomsList.push(new Atom("C", getColorBySymbol("C"), 4, 245, 165));
    atomsList.push(new Atom("C", getColorBySymbol("C"), 4, 85, 245));
    atomsList.push(new Atom("C", getColorBySymbol("C"), 4, 245, 245));
    atomsList.push(new Atom("C", getColorBySymbol("C"), 4, 165, 285));
    atomsList.push(new Atom("O", getColorBySymbol("O"), 2, 165, 365));
    atomsList.push(new Atom("H", getColorBySymbol("H"), 1, 85, 405));
    atomsList.push(new Atom("O", getColorBySymbol("O"), 2, 325, 285));
    atomsList.push(new Atom("C", getColorBySymbol("C"), 4, 405, 245));
    atomsList.push(new Atom("H", getColorBySymbol("H"), 1, 485, 165));
    atomsList.push(new Atom("H", getColorBySymbol("H"), 1, 485, 245));
    atomsList.push(new Atom("H", getColorBySymbol("H"), 1, 485, 325));
    atomsList.push(new Atom("H", getColorBySymbol("H"), 1, 5, 125));
    atomsList.push(new Atom("H", getColorBySymbol("H"), 1, 5, 285));
    atomsList.push(new Atom("H", getColorBySymbol("H"), 1, 325, 125));

    // wiązania
    connection(atomsList[0], atomsList[2]);
    connection(atomsList[0], atomsList[2]);
    connection(atomsList[1], atomsList[2]);
    connection(atomsList[2], atomsList[3]);
    connection(atomsList[3], atomsList[4]);
    connection(atomsList[3], atomsList[5]);
    connection(atomsList[3], atomsList[5]);
    connection(atomsList[4], atomsList[6]);
    connection(atomsList[4], atomsList[6]);
    connection(atomsList[5], atomsList[7]);
    connection(atomsList[6], atomsList[8]);
    connection(atomsList[7], atomsList[8]);
    connection(atomsList[7], atomsList[8]);
    connection(atomsList[8], atomsList[9]);
    connection(atomsList[9], atomsList[10]);
    connection(atomsList[7], atomsList[11]);
    connection(atomsList[11], atomsList[12]);
    connection(atomsList[12], atomsList[13]);
    connection(atomsList[12], atomsList[14]);
    connection(atomsList[12], atomsList[15]);
    connection(atomsList[16], atomsList[4]);
    connection(atomsList[17], atomsList[6]);
    connection(atomsList[18], atomsList[5]);
}
