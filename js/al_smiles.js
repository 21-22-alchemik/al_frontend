//credit: https://codereview.stackexchange.com/a/179484, thanks!


/* eslint-disable no-unused-vars */
const periodicTable = [
    {"atomicNumber":1,"symbol":"H","name":"Wodór","atomicMass":"1.00794(4)","hexColor":"#404040","valences":[1],"placement":[1, 1]},
    {"atomicNumber":2,"symbol":"He","name":"Hel","atomicMass":"4.002602(2)","hexColor":"#D9FFFF","valences":[0],"placement":[1, 18]},
    {"atomicNumber":3,"symbol":"Li","name":"Lit","atomicMass":"6.941(2)","hexColor":"#CC80FF","valences":[1],"placement":[2, 1]},
    {"atomicNumber":4,"symbol":"Be","name":"Beryl","atomicMass":"9.012182(3)","hexColor":"#C2FF00","valences":[2],"placement":[2, 2]},
    {"atomicNumber":5,"symbol":"B","name":"Bor","atomicMass":"10.811(7)","hexColor":"#FFB5B5","valences":[3],"placement":[2, 13]},
    {"atomicNumber":6,"symbol":"C","name":"Węgiel","atomicMass":"12.0107(8)","hexColor":"#909090","valences":[2, 4],"placement":[2, 14]},
    {"atomicNumber":7,"symbol":"N","name":"Azot","atomicMass":"14.0067(2)","hexColor":"#3050F8","valences":[1, 2, 3, 4, 5],"placement":[2, 15]},
    {"atomicNumber":8,"symbol":"O","name":"Tlen","atomicMass":"15.9994(3)","hexColor":"#FF0D0D","valences":[2],"placement":[2, 16]},
    {"atomicNumber":9,"symbol":"F","name":"Fluor","atomicMass":"18.9984032(5)","hexColor":"#900000","valences":[1],"placement":[2, 17]},
    {"atomicNumber":10,"symbol":"Ne","name":"Neon","atomicMass":"20.1797(6)","hexColor":"#B3E3F5","valences":[0],"placement":[2, 18]},
    {"atomicNumber":11,"symbol":"Na","name":"Sód","atomicMass":"22.98976928(2)","hexColor":"#AB5CF2","valences":[1],"placement":[3, 1]},
    {"atomicNumber":12,"symbol":"Mg","name":"Magnez","atomicMass":"24.3050(6)","hexColor":"#8AFF00","valences":[2],"placement":[3, 2]},
    {"atomicNumber":13,"symbol":"Al","name":"Glin","atomicMass":"26.9815386(8)","hexColor":"#BFA6A6","valences":[3],"placement":[3, 13]},
    {"atomicNumber":14,"symbol":"Si","name":"Krzem","atomicMass":"28.0855(3)","hexColor":"#F0C8A0","valences":[4],"placement":[3, 14]},
    {"atomicNumber":15,"symbol":"P","name":"Fosfor","atomicMass":"30.973762(2)","hexColor":"#FF8000","valences":[3, 5],"placement":[3, 15]},
    {"atomicNumber":16,"symbol":"S","name":"Siarka","atomicMass":"32.065(5)","hexColor":"#FFFF30","valences":[2, 4, 6],"placement":[3, 16]},
    {"atomicNumber":17,"symbol":"Cl","name":"Chlor","atomicMass":"35.453(2)","hexColor":"#1FF01F","valences":[1, 3, 5, 7],"placement":[3, 17]},
    {"atomicNumber":18,"symbol":"Ar","name":"Argon","atomicMass":"39.948(1)","hexColor":"#80D1E3","valences":[0],"placement":[3, 18]},
    {"atomicNumber":19,"symbol":"K","name":"Potas","atomicMass":"39.0983(1)","hexColor":"#8F40D4","valences":[1],"placement":[4, 1]},
    {"atomicNumber":20,"symbol":"Ca","name":"Wapń","atomicMass":"40.078(4)","hexColor":"#3DFF00","valences":[2],"placement":[4, 2]},
    {"atomicNumber":21,"symbol":"Sc","name":"Skand","atomicMass":"44.955912(6)","hexColor":"#E6E6E6","valences":[3],"placement":[4, 3]},
    {"atomicNumber":22,"symbol":"Ti","name":"Tytan","atomicMass":"47.867(1)","hexColor":"#BFC2C7","valences":[3, 4],"placement":[4, 4]},
    {"atomicNumber":23,"symbol":"V","name":"Wanad","atomicMass":"50.9415(1)","hexColor":"#A6A6AB","valences":[2, 3, 4, 5],"placement":[4, 5]},
    {"atomicNumber":24,"symbol":"Cr","name":"Chrom","atomicMass":"51.9961(6)","hexColor":"#8A99C7","valences":[2, 3, 5],"placement":[4, 6]},
    {"atomicNumber":25,"symbol":"Mn","name":"Mangan","atomicMass":"54.938045(5)","hexColor":"#9C7AC7","valences":[2, 3, 4, 6, 7],"placement":[4, 7]},
    {"atomicNumber":26,"symbol":"Fe","name":"Żelazo","atomicMass":"55.845(2)","hexColor":"#E06633","valences":[2, 3, 6],"placement":[4, 8]},
    {"atomicNumber":27,"symbol":"Co","name":"Kobalt","atomicMass":"58.933195(5)","hexColor":"#F090A0","valences":[2, 3],"placement":[4, 9]},
    {"atomicNumber":28,"symbol":"Ni","name":"Nikiel","atomicMass":"58.6934(4)","hexColor":"#50D050","valences":[2, 3],"placement":[4, 10]},
    {"atomicNumber":29,"symbol":"Cu","name":"Miedź","atomicMass":"63.546(3)","hexColor":"#C88033","valences":[1, 2, 3],"placement":[4, 11]},
    {"atomicNumber":30,"symbol":"Zn","name":"Cynk","atomicMass":"65.38(2)","hexColor":"#7D80B0","valences":[2],"placement":[4, 12]},
    {"atomicNumber":31,"symbol":"Ga","name":"Gal","atomicMass":"69.723(1)","hexColor":"#C28F8F","valences":[3],"placement":[4, 13]},
    {"atomicNumber":32,"symbol":"Ge","name":"German","atomicMass":"72.64(1)","hexColor":"#668F8F","valences":[2, 4],"placement":[4, 14]},
    {"atomicNumber":33,"symbol":"As","name":"Arsen","atomicMass":"74.92160(2)","hexColor":"#BD80E3","valences":[3, 5],"placement":[4, 15]},
    {"atomicNumber":34,"symbol":"Se","name":"Selen","atomicMass":"78.96(3)","hexColor":"#FFA100","valences":[2, 4, 6],"placement":[4, 16]},
    {"atomicNumber":35,"symbol":"Br","name":"Brom","atomicMass":"79.904(1)","hexColor":"#A62929","valences":[1, 3, 5, 7],"placement":[4, 17]},
    {"atomicNumber":36,"symbol":"Kr","name":"Krypton","atomicMass":"83.798(2)","hexColor":"#5CB8D1","valences":[2],"placement":[4, 18]},
    {"atomicNumber":37,"symbol":"Rb","name":"Rubid","atomicMass":"85.4678(3)","hexColor":"#702EB0","valences":[1],"placement":[5, 1]},
    {"atomicNumber":38,"symbol":"Sr","name":"Stront","atomicMass":"87.62(1)","hexColor":"#00FF00","valences":[2],"placement":[5, 2]},
    {"atomicNumber":39,"symbol":"Y","name":"Itr","atomicMass":"88.90585(2)","hexColor":"#94FFFF","valences":[3],"placement":[5, 3]},
    {"atomicNumber":40,"symbol":"Zr","name":"Cyrkon","atomicMass":"91.224(2)","hexColor":"#94E0E0","valences":[4],"placement":[5, 4]},
    {"atomicNumber":41,"symbol":"Nb","name":"Niob","atomicMass":"92.90638(2)","hexColor":"#73C2C9","valences":[2, 4, 5],"placement":[5, 5]},
    {"atomicNumber":42,"symbol":"Mo","name":"Molibden","atomicMass":"95.96(2)","hexColor":"#54B5B5","valences":[2, 3, 4, 5, 6],"placement":[5, 6]},
    {"atomicNumber":43,"symbol":"Tc","name":"Technet","atomicMass":"98","hexColor":"#3B9E9E","valences":[2, 4, 7],"placement":[5, 7]},
    {"atomicNumber":44,"symbol":"Ru","name":"Ruten","atomicMass":"101.07(2)","hexColor":"#248F8F","valences":[2, 3, 4, 6, 8],"placement":[5, 8]},
    {"atomicNumber":45,"symbol":"Rh","name":"Rod","atomicMass":"102.90550(2)","hexColor":"#0A7D8C","valences":[2, 3, 4, 5, 6],"placement":[5, 9]},
    {"atomicNumber":46,"symbol":"Pd","name":"Pallad","atomicMass":"106.42(1)","hexColor":"#698500","valences":[2, 4],"placement":[5, 10]},
    {"atomicNumber":47,"symbol":"Ag","name":"Srebro","atomicMass":"107.8682(2)","hexColor":"#C0C0C0","valences":[1, 2, 3],"placement":[5, 11]},
    {"atomicNumber":48,"symbol":"Cd","name":"Kadm","atomicMass":"112.411(8)","hexColor":"#FFD98F","valences":[2],"placement":[5, 12]},
    {"atomicNumber":49,"symbol":"In","name":"Ind","atomicMass":"114.818(3)","hexColor":"#A67573","valences":[1, 3],"placement":[5, 13]},
    {"atomicNumber":50,"symbol":"Sn","name":"Cyna","atomicMass":"118.710(7)","hexColor":"#668080","valences":[2, 4],"placement":[5, 14]},
    {"atomicNumber":51,"symbol":"Sb","name":"Antymon","atomicMass":"121.760(1)","hexColor":"#9E63B5","valences":[3, 5],"placement":[5, 15]},
    {"atomicNumber":52,"symbol":"Te","name":"Tellur","atomicMass":"127.60(3)","hexColor":"#D47A00","valences":[2, 4, 6],"placement":[5, 16]},
    {"atomicNumber":53,"symbol":"I","name":"Jod","atomicMass":"126.90447(3)","hexColor":"#940094","valences":[1, 3, 5, 7],"placement":[5, 17]},
    {"atomicNumber":54,"symbol":"Xe","name":"Ksenon","atomicMass":"131.293(6)","hexColor":"#429EB0","valences":[2, 4, 6, 8],"placement":[5, 18]},
    {"atomicNumber":55,"symbol":"Cs","name":"Cez","atomicMass":"132.9054519(2)","hexColor":"#57178F","valences":[1],"placement":[6, 1]},
    {"atomicNumber":56,"symbol":"Ba","name":"Bar","atomicMass":"137.327(7)","hexColor":"#00C900","valences":[2],"placement":[6, 2]},
    {"atomicNumber":57,"symbol":"La","name":"Lantan","atomicMass":"138.90547(7)","hexColor":"#70D4FF","valences":[3],"placement":[6, 3]},
    {"atomicNumber":58,"symbol":"Ce","name":"Cer","atomicMass":"140.116(1)","hexColor":"#FFFFC7","valences":[3, 4],"placement":[6, 3]},
    {"atomicNumber":59,"symbol":"Pr","name":"Prazeodym","atomicMass":"140.90765(2)","hexColor":"#D9FFC7","valences":[3, 4],"placement":[6, 3]},
    {"atomicNumber":60,"symbol":"Nd","name":"Neodym","atomicMass":"144.242(3)","hexColor":"#C7FFC7","valences":[3],"placement":[6, 3]},
    {"atomicNumber":61,"symbol":"Pm","name":"Promet","atomicMass":"145","hexColor":"#A3FFC7","valences":[3],"placement":[6, 3]},
    {"atomicNumber":62,"symbol":"Sm","name":"Samar","atomicMass":"150.36(2)","hexColor":"#8FFFC7","valences":[2, 3],"placement":[6, 3]},
    {"atomicNumber":63,"symbol":"Eu","name":"Europ","atomicMass":"151.964(1)","hexColor":"#61FFC7","valences":[2, 3],"placement":[6, 3]},
    {"atomicNumber":64,"symbol":"Gd","name":"Gadolin","atomicMass":"157.25(3)","hexColor":"#45FFC7","valences":[3],"placement":[6, 3]},
    {"atomicNumber":65,"symbol":"Tb","name":"Terb","atomicMass":"158.92535(2)","hexColor":"#30FFC7","valences":[3, 4],"placement":[6, 3]},
    {"atomicNumber":66,"symbol":"Dy","name":"Dysproz","atomicMass":"162.500(1)","hexColor":"#1FFFC7","valences":[3],"placement":[6, 3]},
    {"atomicNumber":67,"symbol":"Ho","name":"Holm","atomicMass":"164.93032(2)","hexColor":"#00FF9C","valences":[3],"placement":[6, 3]},
    {"atomicNumber":68,"symbol":"Er","name":"Erb","atomicMass":"167.259(3)","hexColor":"#00DE00","valences":[3],"placement":[6, 3]},
    {"atomicNumber":69,"symbol":"Tm","name":"Tul","atomicMass":"168.93421(2)","hexColor":"#00D452","valences":[3],"placement":[6, 3]},
    {"atomicNumber":70,"symbol":"Yb","name":"Iterb","atomicMass":"173.054(5)","hexColor":"#00BF38","valences":[2, 3],"placement":[6, 3]},
    {"atomicNumber":71,"symbol":"Lu","name":"Lutet","atomicMass":"174.9668(1)","hexColor":"#00AB24","valences":[3],"placement":[6, 3]},
    {"atomicNumber":72,"symbol":"Hf","name":"Hafn","atomicMass":"178.49(2)","hexColor":"#4DC2FF","valences":[4],"placement":[6, 4]},
    {"atomicNumber":73,"symbol":"Ta","name":"Tantal","atomicMass":"180.94788(2)","hexColor":"#4DA6FF","valences":[2, 4, 5],"placement":[6, 5]},
    {"atomicNumber":74,"symbol":"W","name":"Wolfram","atomicMass":"183.84(1)","hexColor":"#2194D6","valences":[2, 3, 4, 5, 6],"placement":[6, 6]},
    {"atomicNumber":75,"symbol":"Re","name":"Ren","atomicMass":"186.207(1)","hexColor":"#267DAB","valences":[2, 3, 4, 6, 7],"placement":[6, 7]},
    {"atomicNumber":76,"symbol":"Os","name":"Osm","atomicMass":"190.23(3)","hexColor":"#266696","valences":[3, 4, 6, 8],"placement":[6, 8]},
    {"atomicNumber":77,"symbol":"Ir","name":"Iryd","atomicMass":"192.217(3)","hexColor":"#175487","valences":[2, 3, 4, 5, 6],"placement":[6, 9]},
    {"atomicNumber":78,"symbol":"Pt","name":"Platyna","atomicMass":"195.084(9)","hexColor":"#D0D0E0","valences":[2, 4, 6],"placement":[6, 10]},
    {"atomicNumber":79,"symbol":"Au","name":"Złoto","atomicMass":"196.966569(4)","hexColor":"#FFD123","valences":[1, 3],"placement":[6, 11]},
    {"atomicNumber":80,"symbol":"Hg","name":"Rtęć","atomicMass":"200.59(2)","hexColor":"#B8B8D0","valences":[1, 2],"placement":[6, 12]},
    {"atomicNumber":81,"symbol":"Tl","name":"Tal","atomicMass":"204.3833(2)","hexColor":"#A6544D","valences":[1, 3],"placement":[6, 13]},
    {"atomicNumber":82,"symbol":"Pb","name":"Ołów","atomicMass":"207.2(1)","hexColor":"#575961","valences":[2, 4],"placement":[6, 14]},
    {"atomicNumber":83,"symbol":"Bi","name":"Bizmut","atomicMass":"208.98040(1)","hexColor":"#9E4FB5","valences":[3, 5],"placement":[6, 15]},
    {"atomicNumber":84,"symbol":"Po","name":"Polon","atomicMass":"209","hexColor":"#AB5C00","valences":[2, 4, 6],"placement":[6, 16]},
    {"atomicNumber":85,"symbol":"At","name":"Astat","atomicMass":"210","hexColor":"#754F45","valences":[1, 3, 5, 7],"placement":[6, 17]},
    {"atomicNumber":86,"symbol":"Rn","name":"Radon","atomicMass":"222","hexColor":"#428296","valences":[2],"placement":[6, 18]},
    {"atomicNumber":87,"symbol":"Fr","name":"Frans","atomicMass":"223","hexColor":"#420066","valences":[1],"placement":[7, 1]},
    {"atomicNumber":88,"symbol":"Ra","name":"Rad","atomicMass":"226","hexColor":"#007D00","valences":[2],"placement":[7, 2]},
    {"atomicNumber":89,"symbol":"Ac","name":"Aktyn","atomicMass":"227","hexColor":"#70ABFA","valences":[3],"placement":[7, 3]},
    {"atomicNumber":90,"symbol":"Th","name":"Tor","atomicMass":"232.03806(2)","hexColor":"#00BAFF","valences":[4],"placement":[7, 3]},
    {"atomicNumber":91,"symbol":"Pa","name":"Protaktyn","atomicMass":"231.03588(2)","hexColor":"#00A1FF","valences":[4, 5],"placement":[7, 3]},
    {"atomicNumber":92,"symbol":"U","name":"Uran","atomicMass":"238.02891(3)","hexColor":"#008FFF","valences":[3, 4, 5, 6],"placement":[7, 3]},
    {"atomicNumber":93,"symbol":"Np","name":"Neptun","atomicMass":"237","hexColor":"#0080FF","valences":[3, 4, 5, 6, 7],"placement":[7, 3]},
    {"atomicNumber":94,"symbol":"Pu","name":"Pluton","atomicMass":"244","hexColor":"#006BFF","valences":[3, 4, 5, 6],"placement":[7, 3]},
    {"atomicNumber":95,"symbol":"Am","name":"Ameryk","atomicMass":"243","hexColor":"#545CF2","valences":[3, 4, 5, 6],"placement":[7, 3]},
    {"atomicNumber":96,"symbol":"Cm","name":"Kiur","atomicMass":"247","hexColor":"#785CE3","valences":[3, 4],"placement":[7, 3]},
    {"atomicNumber":97,"symbol":"Bk","name":"Berkel","atomicMass":"247","hexColor":"#8A4FE3","valences":[3, 4],"placement":[7, 3]},
    {"atomicNumber":98,"symbol":"Cf","name":"Kaliforn","atomicMass":"251","hexColor":"#A136D4","valences":[3, 4],"placement":[7, 3]},
    {"atomicNumber":99,"symbol":"Es","name":"Einstein","atomicMass":"252","hexColor":"#B31FD4","valences":[2, 3, 4],"placement":[7, 3]},
    {"atomicNumber":100,"symbol":"Fm","name":"Ferm","atomicMass":"257","hexColor":"#B31FBA","valences":[2, 3],"placement":[7, 3]},
    {"atomicNumber":101,"symbol":"Md","name":"Mendelew","atomicMass":"258","hexColor":"#B30DA6","valences":[2, 3],"placement":[7, 3]},
    {"atomicNumber":102,"symbol":"No","name":"Nobel","atomicMass":"259","hexColor":"#BD0D87","valences":[2, 3],"placement":[7, 3]},
    {"atomicNumber":103,"symbol":"Lr","name":"Lorens","atomicMass":"262","hexColor":"#C70066","valences":[3],"placement":[7, 3]},
    {"atomicNumber":104,"symbol":"Rf","name":"Rutherford","atomicMass":"267","hexColor":"#CC0059","valences":[4],"placement":[7, 4]},
    {"atomicNumber":105,"symbol":"Db","name":"Dubn","atomicMass":"268","hexColor":"#D1004F","valences":[5],"placement":[7, 5]},
    {"atomicNumber":106,"symbol":"Sg","name":"Seaborg","atomicMass":"271","hexColor":"#D90045","valences":[6],"placement":[7, 6]},
    {"atomicNumber":107,"symbol":"Bh","name":"Bohr","atomicMass":"272","hexColor":"#E00038","valences":[7],"placement":[7, 7]},
    {"atomicNumber":108,"symbol":"Hs","name":"Has","atomicMass":"270","hexColor":"#E6002E","valences":[8],"placement":[7, 8]},
    {"atomicNumber":109,"symbol":"Mt","name":"Meitner","atomicMass":"276","hexColor":"#EB0026","valences":[0],"placement":[7, 9]},
    {"atomicNumber":110,"symbol":"Ds","name":"Darmsztadt","atomicMass":"281","hexColor":"#AF60F4","valences":[0],"placement":[7, 10]},
    {"atomicNumber":111,"symbol":"Rg","name":"Roentgen","atomicMass":"280","hexColor":"#802BD3","valences":[0],"placement":[7, 11]},
    {"atomicNumber":112,"symbol":"Cn","name":"Kopernik","atomicMass":"285","hexColor":"#7200BB","valences":[0],"placement":[7, 12]},
    {"atomicNumber":113,"symbol":"Nh","name":"Nihon","atomicMass":"284","hexColor":"#5A8E90","valences":[0],"placement":[7, 13]},
    {"atomicNumber":114,"symbol":"Fl","name":"Flerow","atomicMass":"289","hexColor":"#22C2F1","valences":[0],"placement":[7, 14]},
    {"atomicNumber":115,"symbol":"Mc","name":"Moskow","atomicMass":"289","hexColor":"#C42213","valences":[0],"placement":[7, 15]},
    {"atomicNumber":116,"symbol":"Lv","name":"Liwermor","atomicMass":"293","hexColor":"#252CBC","valences":[0],"placement":[7, 16]},
    {"atomicNumber":117,"symbol":"Ts","name":"Tenes","atomicMass":"294","hexColor":"#823A7C","valences":[0],"placement":[7, 17]},
    {"atomicNumber":118,"symbol":"Og","name":"Oganeson","atomicMass":"294","hexColor":"#FFFF80","valences":[0],"placement":[7, 18]}
];

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


    console.log(atoms_list);
    console.log(connection_list);
}


smiles_to_element_class("CCC(=O)O");
//export default {molecule_to_smiles, smiles_to_molecule}; // eslint-disable-line no-undef
