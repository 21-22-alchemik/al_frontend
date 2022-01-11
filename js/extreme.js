/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
//Ciprofloxacin

function extremeExample(){
    clearAll();

    // Atoms
    atomsList.push(new Atom("H", getColorBySymbol("H"), 1, 5, 405)); //0
    atomsList.push(new Atom("N", getColorBySymbol("N"), 4, 85, 365)); //1
    atomsList.push(new Atom("C", getColorBySymbol("C"), 4, 165, 405)); //2
    atomsList.push(new Atom("C", getColorBySymbol("C"), 4, 245, 365)); //3
    atomsList.push(new Atom("N", getColorBySymbol("N"), 4, 245, 285)); //4
    atomsList.push(new Atom("C", getColorBySymbol("C"), 4, 165, 205)); //5
    atomsList.push(new Atom("C", getColorBySymbol("C"), 4, 85, 285)); //6
    atomsList.push(new Atom("C", getColorBySymbol("C"), 4, 325, 205)); //7
    atomsList.push(new Atom("C", getColorBySymbol("C"), 4, 325, 125)); //8
    atomsList.push(new Atom("F", getColorBySymbol("F"), 4, 245, 85)); //9
    atomsList.push(new Atom("C", getColorBySymbol("C"), 4, 405, 85)); //10
    atomsList.push(new Atom("C", getColorBySymbol("C"), 4, 485, 125)); //11
    atomsList.push(new Atom("C", getColorBySymbol("C"), 4, 485, 205)); //12
    atomsList.push(new Atom("C", getColorBySymbol("C"), 4, 405, 285)); //13
    atomsList.push(new Atom("C", getColorBySymbol("C"), 4, 565, 85)); //14
    atomsList.push(new Atom("O", getColorBySymbol("O"), 2, 565, 5)); //15
    atomsList.push(new Atom("C", getColorBySymbol("C"), 4, 645, 125)); //16
    atomsList.push(new Atom("C", getColorBySymbol("C"), 4, 645, 205)); //17
    atomsList.push(new Atom("N", getColorBySymbol("N"), 2, 565, 285)); //18
    atomsList.push(new Atom("C", getColorBySymbol("C"), 4, 565, 405)); //19
    atomsList.push(new Atom("C", getColorBySymbol("C"), 4, 485, 445)); //20
    atomsList.push(new Atom("C", getColorBySymbol("C"), 4, 645, 445)); //21
    atomsList.push(new Atom("C", getColorBySymbol("C"), 4, 725, 85)); //22
    atomsList.push(new Atom("O", getColorBySymbol("O"), 2, 725, 5)); //23
    atomsList.push(new Atom("O", getColorBySymbol("O"), 2, 805, 125)); //24
    atomsList.push(new Atom("H", getColorBySymbol("H"), 1, 885, 85)); //25

    atomsList.push(new Atom("H", getColorBySymbol("H"), 1, 725, 285)); //26
    atomsList.push(new Atom("H", getColorBySymbol("H"), 1, 405, 5)); //27
    atomsList.push(new Atom("H", getColorBySymbol("H"), 1, 405, 365)); //28
    atomsList.push(new Atom("H", getColorBySymbol("H"), 1, 645, 125)); //29
    atomsList.push(new Atom("H", getColorBySymbol("H"), 1, 725, 445)); //30
    atomsList.push(new Atom("H", getColorBySymbol("H"), 1, 725, 445)); //31
    atomsList.push(new Atom("H", getColorBySymbol("H"), 1, 485, 445)); //32
    atomsList.push(new Atom("H", getColorBySymbol("H"), 1, 405, 445)); //33
    atomsList.push(new Atom("H", getColorBySymbol("H"), 1, 85, 445)); //34
    atomsList.push(new Atom("H", getColorBySymbol("H"), 1, 245, 445)); //35
    atomsList.push(new Atom("H", getColorBySymbol("H"), 1, 325, 405)); //36
    atomsList.push(new Atom("H", getColorBySymbol("H"), 1, 325, 325)); //37
    atomsList.push(new Atom("H", getColorBySymbol("H"), 1, 165, 125)); //38
    atomsList.push(new Atom("H", getColorBySymbol("H"), 1, 245, 125)); //39
    atomsList.push(new Atom("H", getColorBySymbol("H"), 1, 5, 285)); //40
    atomsList.push(new Atom("H", getColorBySymbol("H"), 1, 85, 205)); //41

    // bindings
    connection(atomsList[0], atomsList[1]);
    connection(atomsList[1], atomsList[2]);
    connection(atomsList[1], atomsList[6]);
    connection(atomsList[2], atomsList[3]);
    connection(atomsList[2], atomsList[34]);
    connection(atomsList[2], atomsList[35]);
    connection(atomsList[3], atomsList[4]);
    connection(atomsList[3], atomsList[36]);
    connection(atomsList[3], atomsList[37]);
    connection(atomsList[4], atomsList[5]);
    connection(atomsList[4], atomsList[7]);
    connection(atomsList[5], atomsList[6]);
    connection(atomsList[5], atomsList[38]);
    connection(atomsList[5], atomsList[39]);
    connection(atomsList[6], atomsList[40]);
    connection(atomsList[6], atomsList[41]);
    connection(atomsList[7], atomsList[8]);
    connection(atomsList[7], atomsList[8]);
    connection(atomsList[7], atomsList[13]);
    connection(atomsList[8], atomsList[9]);
    connection(atomsList[8], atomsList[10]);
    connection(atomsList[10], atomsList[11]);
    connection(atomsList[10], atomsList[11]);
    connection(atomsList[10], atomsList[27]);
    connection(atomsList[11], atomsList[12]);
    connection(atomsList[11], atomsList[14]);
    connection(atomsList[12], atomsList[13]);
    connection(atomsList[12], atomsList[13]);
    connection(atomsList[12], atomsList[18]);
    connection(atomsList[13], atomsList[28]);
    connection(atomsList[14], atomsList[15]);
    connection(atomsList[14], atomsList[15]);
    connection(atomsList[14], atomsList[16]);
    connection(atomsList[16], atomsList[17]);
    connection(atomsList[16], atomsList[17]);
    connection(atomsList[16], atomsList[22]);
    connection(atomsList[17], atomsList[18]);
    connection(atomsList[17], atomsList[26]);
    connection(atomsList[18], atomsList[19]);
    connection(atomsList[19], atomsList[20]);
    connection(atomsList[19], atomsList[21]);
    connection(atomsList[19], atomsList[29]);
    connection(atomsList[20], atomsList[21]);
    connection(atomsList[20], atomsList[32]);
    connection(atomsList[20], atomsList[33]);
    connection(atomsList[21], atomsList[30]);
    connection(atomsList[21], atomsList[31]);
    connection(atomsList[22], atomsList[23]);
    connection(atomsList[22], atomsList[23]);
    connection(atomsList[22], atomsList[24]);
    connection(atomsList[24], atomsList[25]);    
}