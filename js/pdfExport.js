/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

//Create PDf from HTML...
/*
function CreatePDFfromHTML() {
    var HTML_Width = $("#wizualizacjaDanych").width();
    var HTML_Height = $("#wizualizacjaDanych").height();
    var top_left_margin = 50;
    var PDF_Width = HTML_Width + (top_left_margin * 2);
    var PDF_Height = (PDF_Width * 1.5) + (top_left_margin);

    var totalPDFPages = Math.ceil(HTML_Height / PDF_Height) - 1;

    html2canvas($("#wizualizacjaDanych")[0]).then(function (canvas) {
        var imgData = canvas.toDataURL("image/jpeg", 1.0);
        var pdf = new jsPDF("p", "pt", [PDF_Width, PDF_Height]);
        pdf.text("Wyeksportowny plik z wynikiem twojej pracy!", (HTML_Width + 100) / 2, 30, "center");
        pdf.addImage(imgData, "JPG", top_left_margin, top_left_margin, 1320, 800);
        for (var i = 1; i <= totalPDFPages; i++) { 
            pdf.addPage(PDF_Width, PDF_Height);
            pdf.addImage(imgData, "JPG", top_left_margin, -(PDF_Height*i)+(top_left_margin*4),1320,800);
        }
        pdf.save("wiazaniaPDF.pdf");
    });
}
*/

function createPdf() {
    let svg = generateSvg();
    let png = generateCanvas();
    let svgHTML = document.createElement("div");
    svgHTML.innerHTML=svg;
    let child = svgHTML.firstChild.attributes;
    if(svg!=false){
        let options = {
            width: parseFloat(child.width.value),
            height: parseFloat(child.height.value),
            useCss: true,
            preserveAspectRatio: true
        };
        let doc = new PDFDocument({layout: "landscape", size: "A4"});

        SVGtoPDF(doc, svg, 0, 0);
        
        let stream = doc.pipe(blobStream());
        stream.on("finish", function() {
            let blob = stream.toBlobURL("application/pdf");
            var link = document.createElement("a");
            link.download = "structure.pdf";
            link.href = blob;
            link.click();
        });
        doc.end();
    }
}