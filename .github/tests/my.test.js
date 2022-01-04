const al_smiles = require('../../js/al_smiles.js').default


atomsList = new Array();
atomsList.push(['0', 'O', 2, 85, 325]);
atomsList.push(['1', 'C', 3, 85, 325]);
atomsList.push(['2', 'O', 2, 85, 325]);
atomsList.push(['3', 'O', 2, 85, 325]);
atomsList.push(['4', 'O', 2, 85, 325]);


connectionList = new Array();
connectionList.push([0, 1]);
connectionList.push([1, 2]);
connectionList.push([2, 0]);
connectionList.push([3, 1]);
connectionList.push([1, 4]);
connectionList.push([4, 3]);

//inversed

connectionList.push([1, 0]);
connectionList.push([2, 1]);
connectionList.push([0, 2]);
connectionList.push([1, 3]);
connectionList.push([4, 1]);
connectionList.push([3, 4]);

test('O1C2(O1)(O(O2))', () => {
    expect(al_smiles(atomsList, connectionList)).toBe("O1C2(O1)(O(O2))");
});



atomsList2 = new Array();
atomsList2.push(['0', 'H', 1, 85, 325]);
atomsList2.push(['1', 'H', 1, 85, 325]);
atomsList2.push(['2', 'H', 1, 85, 325]);
atomsList2.push(['3', 'C', 3, 85, 325]);
atomsList2.push(['4', 'C', 3, 85, 325]);
atomsList2.push(['5', 'O', 2, 85, 325]);
atomsList2.push(['6', 'O', 2, 85, 325]);
atomsList2.push(['7', 'H', 1, 85, 325]);

connectionList2 = new Array();
connectionList2.push([0, 3]);
connectionList2.push([1, 3]);
connectionList2.push([2, 3]);
connectionList2.push([3, 4]);
connectionList2.push([4, 5]);
connectionList2.push([4, 5]);
connectionList2.push([4, 6]);
connectionList2.push([6, 7]);

//inversed 


connectionList2.push([3, 0]);
connectionList2.push([3, 1]);
connectionList2.push([3, 2]);
connectionList2.push([4, 3]);
connectionList2.push([5, 4]);
connectionList2.push([5, 4]);
connectionList2.push([6, 4]);
connectionList2.push([7, 6]);




test('CC(=O)(O)', () => {
    expect(al_smiles(atomsList2, connectionList2)).toBe("CC(=O)(O)");
});


//h2so4

atomsList3 = new Array();
atomsList3.push(['0', 'O', 2, 85, 325]);
atomsList3.push(['1', 'O', 2, 85, 325]);
atomsList3.push(['2', 'O', 2, 85, 325]);
atomsList3.push(['3', 'O', 2, 85, 325]);
atomsList3.push(['4', 'H', 1, 85, 325]);
atomsList3.push(['5', 'H', 1, 85, 325]);
atomsList3.push(['6', 'S', 6, 85, 325]);

connectionList3 = new Array();
connectionList3.push([4, 0]);
connectionList3.push([0, 6]);

connectionList3.push([2, 6]);
connectionList3.push([2, 6]);

connectionList3.push([3, 6]);
connectionList3.push([3, 6]);

connectionList3.push([5, 1]);
connectionList3.push([1, 6]);

//inversed 

connectionList3.push([0, 4]);
connectionList3.push([6, 0]);

connectionList3.push([6, 2]);
connectionList3.push([6, 2]);

connectionList3.push([6, 3]);
connectionList3.push([6, 3]);

connectionList3.push([1, 5]);
connectionList3.push([6, 1]);



test('OS(O)(=O)(=O)', () => {
    expect(al_smiles(atomsList3, connectionList3)).toBe("OS(O)(=O)(=O)");
});
