/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

var examplesList = [
    ["Izocyjanian metylu","methylIsocyanate"],
    ["Wanilina","vaniline"],
    ["Etanol","ethanol"],
    ["Kwas octowy","aceticAcid"],
    ["Cyjanowodór","hydrogenCyanide"],
    ["Kwas acetylosalicylowy","aspirin"],
    // ["Cyprofloksacyna","ciprofloxacin"]
    
];

function generateExamples(){
    var holder = document.getElementById("zakladkaZwiazki");

    examplesList.forEach(example => {
        var btn = document.createElement("button");
        btn.classList = "zakladkaMenuBtn";
        btn.onclick = eval(example[1]);
        btn.textContent = example[0];
        holder.appendChild(btn);
    });
}

generateExamples();

function methylIsocyanate(){
    clearAll();
    // Atoms
    atomsList.push(new Atom("H", getColorBySymbol("H"), 1));
    atomsList.push(new Atom("H", getColorBySymbol("H"), 1, 85, 5));
    atomsList.push(new Atom("H", getColorBySymbol("H"), 1, 165, 5));
    atomsList.push(new Atom("C", getColorBySymbol("C"), 4,85,85));
    atomsList.push(new Atom("N", getColorBySymbol("N"), 3, 85, 165));
    atomsList.push(new Atom("C", getColorBySymbol("C"), 4, 85, 245));
    atomsList.push(new Atom("O", getColorBySymbol("O"), 2, 85, 325));

    // bindings
    connection(atomsList[0], atomsList[3]);
    connection(atomsList[1], atomsList[3]);
    connection(atomsList[2], atomsList[3]);
    connection(atomsList[3], atomsList[4]);
    connection(atomsList[4], atomsList[5]);
    connection(atomsList[4], atomsList[5]);
    connection(atomsList[5], atomsList[6]);
    connection(atomsList[5], atomsList[6]);
}

function vaniline(){
    clearAll();
    // Atoms
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

    // bindings
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

function ethanol(){
    clearAll();

    // Atoms
    atomsList.push(new Atom("C", getColorBySymbol("C"), 4, 85, 85));
    atomsList.push(new Atom("C", getColorBySymbol("C"), 4, 165, 85));
    atomsList.push(new Atom("O", getColorBySymbol("O"), 2, 245, 85));
    atomsList.push(new Atom("H", getColorBySymbol("H"), 1, 85, 5));
    atomsList.push(new Atom("H", getColorBySymbol("H"), 1, 5, 85));
    atomsList.push(new Atom("H", getColorBySymbol("H"), 1, 85, 165));
    atomsList.push(new Atom("H", getColorBySymbol("H"), 1, 165, 5));
    atomsList.push(new Atom("H", getColorBySymbol("H"), 1, 165, 165));
    atomsList.push(new Atom("H", getColorBySymbol("H"), 1, 325, 85));
    
    // bindings
    connection(atomsList[0], atomsList[1]);
    connection(atomsList[0], atomsList[3]);
    connection(atomsList[0], atomsList[4]);
    connection(atomsList[0], atomsList[5]);
    connection(atomsList[1], atomsList[2]);
    connection(atomsList[1], atomsList[6]);
    connection(atomsList[1], atomsList[7]);
    connection(atomsList[2], atomsList[8]);
}

function aceticAcid(){
    clearAll();

    // Atoms
    atomsList.push(new Atom("C", getColorBySymbol("C"), 4, 85, 85));
    atomsList.push(new Atom("C", getColorBySymbol("C"), 4, 165, 85));
    atomsList.push(new Atom("O", getColorBySymbol("O"), 2, 205, 5));
    atomsList.push(new Atom("O", getColorBySymbol("O"), 2, 205, 165));
    atomsList.push(new Atom("H", getColorBySymbol("H"), 1, 285, 165));
    atomsList.push(new Atom("H", getColorBySymbol("H"), 1, 85, 5));
    atomsList.push(new Atom("H", getColorBySymbol("H"), 1, 5, 85));
    atomsList.push(new Atom("H", getColorBySymbol("H"), 1, 85, 165));
    
    // bindings
    connection(atomsList[0], atomsList[1]);
    connection(atomsList[0], atomsList[5]);
    connection(atomsList[0], atomsList[6]);
    connection(atomsList[0], atomsList[7]);
    connection(atomsList[1], atomsList[2]);
    connection(atomsList[1], atomsList[2]);
    connection(atomsList[1], atomsList[3]);
    connection(atomsList[3], atomsList[4]);
}

function hydrogenCyanide(){
    clearAll();

    // Atoms
    atomsList.push(new Atom("H", getColorBySymbol("H"), 1, 5, 5));
    atomsList.push(new Atom("C", getColorBySymbol("C"), 4, 85, 5));
    atomsList.push(new Atom("N", getColorBySymbol("N"), 3, 165, 5));
    
    // bindings
    connection(atomsList[0], atomsList[1]);
    connection(atomsList[1], atomsList[2]);
    connection(atomsList[1], atomsList[2]);
    connection(atomsList[1], atomsList[2]);
}

function aspirin(){
    clearAll();

    // Atoms
    //up part
    atomsList.push(new Atom("O", getColorBySymbol("O"), 2, 85, 5));
    atomsList.push(new Atom("C", getColorBySymbol("C"), 4, 165, 45));
    atomsList.push(new Atom("O", getColorBySymbol("O"), 2, 245, 5));
    atomsList.push(new Atom("H", getColorBySymbol("H"), 1, 325, 5));

    //cycle
    atomsList.push(new Atom("C", getColorBySymbol("C"), 4, 165, 125));
    atomsList.push(new Atom("C", getColorBySymbol("C"), 4, 85, 165));
    atomsList.push(new Atom("C", getColorBySymbol("C"), 4, 85, 245));
    atomsList.push(new Atom("C", getColorBySymbol("C"), 4, 165, 285));
    atomsList.push(new Atom("C", getColorBySymbol("C"), 4, 245, 245));
    atomsList.push(new Atom("C", getColorBySymbol("C"), 4, 245, 165));
    //cycle addons
    atomsList.push(new Atom("H", getColorBySymbol("H"), 1, 5, 125));
    atomsList.push(new Atom("H", getColorBySymbol("H"), 1, 5, 285));
    atomsList.push(new Atom("H", getColorBySymbol("H"), 1, 165, 365));
    atomsList.push(new Atom("H", getColorBySymbol("H"), 1, 325, 285));

    //right part
    atomsList.push(new Atom("O", getColorBySymbol("O"), 2, 325, 125));
    atomsList.push(new Atom("C", getColorBySymbol("C"), 4, 405, 165));
    atomsList.push(new Atom("O", getColorBySymbol("O"), 2, 405, 245));
    atomsList.push(new Atom("C", getColorBySymbol("C"), 4, 485, 125));

    atomsList.push(new Atom("H", getColorBySymbol("H"), 1, 525, 45));
    atomsList.push(new Atom("H", getColorBySymbol("H"), 1, 565, 125));
    atomsList.push(new Atom("H", getColorBySymbol("H"), 1, 525, 205));

    
    // bindings
    connection(atomsList[0], atomsList[1]);
    connection(atomsList[0], atomsList[1]);
    connection(atomsList[1], atomsList[2]);
    connection(atomsList[1], atomsList[4]);
    connection(atomsList[2], atomsList[3]);

    connection(atomsList[4], atomsList[5]);
    connection(atomsList[4], atomsList[9]);
    connection(atomsList[4], atomsList[9]);

    connection(atomsList[5], atomsList[6]);
    connection(atomsList[5], atomsList[6]);
    connection(atomsList[5], atomsList[10]);

    connection(atomsList[6], atomsList[7]);
    connection(atomsList[6], atomsList[11]);

    connection(atomsList[7], atomsList[8]);
    connection(atomsList[7], atomsList[8]);
    connection(atomsList[7], atomsList[12]);

    connection(atomsList[8], atomsList[9]);
    connection(atomsList[8], atomsList[13]);

    connection(atomsList[9], atomsList[14]);

    connection(atomsList[14], atomsList[15]);

    connection(atomsList[15], atomsList[16]);
    connection(atomsList[15], atomsList[16]);
    connection(atomsList[15], atomsList[17]);

    connection(atomsList[17], atomsList[18]);
    connection(atomsList[17], atomsList[19]);
    connection(atomsList[17], atomsList[20]);


}

function ciprofloxacin(){
    clearAll();

    // Atoms
    atomsList.push(new Atom("H", getColorBySymbol("H"), 1, 5, 365)); //0
    atomsList.push(new Atom("N", getColorBySymbol("N"), 4, 85, 325)); //1
    atomsList.push(new Atom("C", getColorBySymbol("C"), 4, 165, 365)); //2
    atomsList.push(new Atom("C", getColorBySymbol("C"), 4, 245, 325)); //3
    atomsList.push(new Atom("N", getColorBySymbol("N"), 4, 245, 245)); //4
    atomsList.push(new Atom("C", getColorBySymbol("C"), 4, 165, 205)); //5
    atomsList.push(new Atom("C", getColorBySymbol("C"), 4, 85, 245)); //6
    atomsList.push(new Atom("C", getColorBySymbol("C"), 4, 325, 205)); //7
    atomsList.push(new Atom("C", getColorBySymbol("C"), 4, 325, 125)); //8
    atomsList.push(new Atom("F", getColorBySymbol("F"), 4, 285, 45)); //9
    atomsList.push(new Atom("C", getColorBySymbol("C"), 4, 405, 85)); //10
    atomsList.push(new Atom("C", getColorBySymbol("C"), 4, 485, 125)); //11
    atomsList.push(new Atom("C", getColorBySymbol("C"), 4, 485, 205)); //12
    atomsList.push(new Atom("C", getColorBySymbol("C"), 4, 405, 245)); //13
    atomsList.push(new Atom("C", getColorBySymbol("C"), 4, 565, 85)); //14
    atomsList.push(new Atom("O", getColorBySymbol("O"), 2, 565, 5)); //15
    atomsList.push(new Atom("C", getColorBySymbol("C"), 4, 645, 125)); //16
    atomsList.push(new Atom("C", getColorBySymbol("C"), 4, 645, 205)); //17
    atomsList.push(new Atom("N", getColorBySymbol("N"), 2, 565, 245)); //18
    atomsList.push(new Atom("C", getColorBySymbol("C"), 4, 565, 325)); //19
    atomsList.push(new Atom("C", getColorBySymbol("C"), 4, 525, 405)); //20
    atomsList.push(new Atom("C", getColorBySymbol("C"), 4, 605, 405)); //21
    atomsList.push(new Atom("C", getColorBySymbol("C"), 4, 725, 85)); //22
    atomsList.push(new Atom("O", getColorBySymbol("O"), 2, 725, 5)); //23
    atomsList.push(new Atom("O", getColorBySymbol("O"), 2, 805, 125)); //24
    atomsList.push(new Atom("H", getColorBySymbol("H"), 1, 885, 85)); //25

    atomsList.push(new Atom("H", getColorBySymbol("H"), 1, 725, 245)); //26
    atomsList.push(new Atom("H", getColorBySymbol("H"), 1, 405, 5)); //27
    atomsList.push(new Atom("H", getColorBySymbol("H"), 1, 405, 325)); //28
    atomsList.push(new Atom("H", getColorBySymbol("H"), 1, 645, 325)); //29
    atomsList.push(new Atom("H", getColorBySymbol("H"), 1, 645, 485)); //30
    atomsList.push(new Atom("H", getColorBySymbol("H"), 1, 685, 405)); //31
    atomsList.push(new Atom("H", getColorBySymbol("H"), 1, 485, 485)); //32
    atomsList.push(new Atom("H", getColorBySymbol("H"), 1, 445, 405)); //33
    atomsList.push(new Atom("H", getColorBySymbol("H"), 1, 125, 445)); //34
    atomsList.push(new Atom("H", getColorBySymbol("H"), 1, 205, 445)); //35
    atomsList.push(new Atom("H", getColorBySymbol("H"), 1, 325, 405)); //36
    atomsList.push(new Atom("H", getColorBySymbol("H"), 1, 325, 325)); //37
    atomsList.push(new Atom("H", getColorBySymbol("H"), 1, 125, 125)); //38
    atomsList.push(new Atom("H", getColorBySymbol("H"), 1, 205, 125)); //39
    atomsList.push(new Atom("H", getColorBySymbol("H"), 1, 5, 245)); //40
    atomsList.push(new Atom("H", getColorBySymbol("H"), 1, 45, 165)); //41

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