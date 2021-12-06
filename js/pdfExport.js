//Create PDf from HTML...
var doc = new jsPDF();
var specialElementHandlers = {
    '#wizualizacjaDanych': function (element, renderer) {
        return true;
    }
};

function CreatePDFfromHTML() {
    //sprawdzenie
    console.log('dziala');

    doc.fromHTML($('#wizualizacjaDanych').html(), 15, 15, {
        'width': 170,
        'elementHandlers': specialElementHandlers
    });
    doc.save('sample-file.pdf');

}