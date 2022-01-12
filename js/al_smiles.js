//credit: https://codereview.stackexchange.com/a/179484, thanks!
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
function find_closing_bracket_match_index(str) { 

    let depth = 0;
    for (let i = str.length-1; i > 0; i--) {
        switch (str[i]) {
        case ")":
            depth++;
            break;
        case "(":
            if (--depth == 0) {
                return i;
            }
            break;
        }
    }
    return -1;    // No matching closing parenthesis
}

function remove_redundant_brackets(smiles) {
    var index = find_closing_bracket_match_index(smiles);
    if(index!=-1){
        var smiles_substr = smiles.substring(index+1, smiles.length-1);
        return smiles.substring(0, index)+smiles_substr;
    }
    return smiles;
}


function molecule_to_smiles(atomsList, connectionList) {
    var is_cyclic = false;
    var atomsGraph = new Array();
    var signs = ["", "=", "#"];
    // create an aggregate list off all features of components of graph(molecule), like their relations
    for (var i = 0; i < atomsList.length; i++) {
        var lst_connections = [];
        connectionList.forEach((element) => {
            if (element[0] == i) {
                lst_connections.push(element[1]);
            }
        });
        //var atm = new Atom(i,atomsList[i][0],atomsList[i][2],lst_connections)
        atomsGraph.push([i, atomsList[i][1], atomsList[i][2], connectionListToCount(lst_connections)]);
    }

    //sort elements of molcule by amount of connections to later get element with leat conections
    atomsGraph.sort((a, b) => {
        return a[2] > b[2];
    });

    // in this function we map indyviudal conections to their amount in molecule
    function connectionListToCount(connections) {
        //input: [1, 2, 3, 3,4,4,4] outpt: {1:1,2:1,3:2,4:3}
        const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

        var output = {};
        connections.forEach((element) => {
            output[element] = countOccurrences(connections, element);
        });
        return output;
    }

    // this function is used to get starting element of molecule to build smiles
    function get_start(atomsGraph) {
        var start;
        atomsGraph.some(function(el) {
            start = el;
            return el[1] != "H";
        });
        return start;
    }

    //setting up empty variables
    var start = get_start(atomsGraph);
    var visited = [];
    var current = start;
    var smiles = "";
    var smiles_ghost = "";

    var current_cycle_id = 0;

    function getCycleId(el_id) {
        is_cyclic = true;
        current_cycle_id++;
        var position = smiles_ghost.search(el_id);
        var new_smiles = smiles.slice(0, position + 1) + current_cycle_id + smiles.slice(position + 1);
        //this bit assumes that there is never hoing to be more than 9 cycles TODO: PriestOfAdanos add support for unconstrained amount
        var new_smiles_ghost = smiles_ghost.slice(0, position + 1) + "X" + smiles_ghost.slice(position + 1);
        smiles = new_smiles;
        smiles_ghost = new_smiles_ghost;
        return current_cycle_id.toString();
    }

    function current_to_next(current, parent) {
        smiles += current[1];
        smiles_ghost += current[0];
        visited.push(current[0].toString());

        Object.keys(current[3]).forEach((element) => {
            if (parent[0] != element && visited.includes(element)) {
                var c_id = getCycleId(element);
                smiles += c_id;
                smiles_ghost += "X";
            }
            if (atomsGraph[element][1] == "H" && !visited.includes(element)) {
                visited.push(atomsGraph[element][0]);
            } else if (!visited.includes(element)) {
                if (Object.keys(current[3]).length > 1) {
                    smiles += "(";
                    smiles_ghost += "(";
                }
                smiles += signs[current[3][element] - 1];
                smiles_ghost += signs[current[3][element] - 1];
                current_to_next(atomsGraph.find((item) => element == item[0]), current);
                if (Object.keys(current[3]).length > 1) {
                    smiles += ")";
                    smiles_ghost += ")";
                }
            }
        });
    }

    current_to_next(current, current);

    if (is_cyclic) {
        var smiles_copy = smiles;

        for (var ij = current_cycle_id / 2+1; ij < current_cycle_id+1; ij++) {
            var ij_str = ij.toString();
            smiles_copy = smiles_copy.replace(new RegExp(ij_str,"g","i","m"), "");
        }
        return remove_redundant_brackets(smiles_copy);
    }
    else{

        return remove_redundant_brackets(smiles);
    }
}

function smiles_to_element_class(smiles) {
    var current_anchor = 0;
    var atoms_list = [];
    var connection_list = [];
    var brackets_indexes = [];

    function add_connection(a,b,x=1){
        for(var i=0;i<x;i++){
            connection_list.push([a ,b]);
            
        }
    }

        
    function add_connection_info_to_atoms(){
        connection_list.forEach((element) => {
            var a = element[0];
            var b = element[1];
            atoms_list.forEach((el) => {
                if(el[0]==a){
                    el[2] +=1 ;
                }
                if(el[0]==b){
                    el[2] +=1 ;
                }
            });
        });
    }

    

    
    
    for(var i=0;i<smiles.length;i++){
        if(smiles[i]=="(")
        {  
            brackets_indexes.push(i);
        }
        else if(smiles[i]==")"){
            var index_of_opening_bracket = brackets_indexes.pop();
            add_connection(i-1,index_of_opening_bracket-1);
            add_connection(index_of_opening_bracket-1,i+1);
        }
        else if(smiles[i]=="="){
            if(smiles[i-1]!="("){
                add_connection(current_anchor,i+1);
            }
            add_connection(current_anchor,i+1);

        }
        else if(smiles[i]=="#"){
            if(smiles[i-1]!="("){
                add_connection(current_anchor,i+1);
            }
            add_connection(current_anchor,i+1,2);
        }
        else{
            current_anchor = i;

            atoms_list.push([i,smiles[i],0]);
            if(smiles[i+1]!=")" && smiles[i+1]!="(" && i+1<smiles.length){
                add_connection(current_anchor,i+1);
            }

        }
    }



    
    function get_minium_connections(){
        atoms_list.forEach(el=>{
            
            periodicTable.forEach((element) => {
                console.log(el[1]);
                if(el[1]==element["symbol"]){
                    element["valences"].some((valence) => {if(valence>=el[2]){
                        for(var i=0;i<valence-el[2];i++){
                            var x = atoms_list.slice(-1)[0][0]+1;
                            atoms_list.push([x,"H",1]);
                            connection_list.push([el[0],x]);
                        }

                        el[2] = valence;
                        return true;
                    }});
                }
            });
            
        });
    }
    



    add_connection_info_to_atoms();
    get_minium_connections();

    generateResult(atoms_list, connection_list);
}


function smilesMenu(){
    document.getElementById("smilesInfoHolder").classList.remove("hidden");
    if(connsList.length>0){
        var atoms = new Array();
        atomsList.forEach(atom =>{
            atoms.push([atom.atomId,atom.name,atom.valence])
        })
        var conns = new Array();
        connsList.forEach(conn =>{
            for(var i = 0; i<conn.count;i++){
                conns.push([conn.parent1.atomId,conn.parent2.atomId])
            }
        })
        document.getElementById("smilesHolder").classList.remove("hidden");
        document.querySelector("#smilesHolder h2").textContent= molecule_to_smiles(atoms,conns);
    }
}

function hideSmiles(){
    document.getElementById("smilesInfoHolder").classList.add("hidden");
    document.getElementById("smilesHolder").classList.add("hidden");
}

function goSmiles(){
    clearAll();
    smiles_to_element_class(document.getElementById("smilesInput").value);
}

function generateResult(atoms, conns){
    clearAll();

    atoms.forEach(atom => {
        console.log(atom)
        atomsList.push(new Atom(atom[1],getColorBySymbol(atom[1]),atom[2]))
    })

    conns.forEach(conn =>{
        console.log(conn)
        connection(atomsList[conn[0]],atomsList[conn[1]])
    })
}

module.exports = al_smiles; // eslint-disable-line no-undef