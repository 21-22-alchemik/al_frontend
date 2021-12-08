/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
//Create PDf from HTML...

function CreatePDFfromHTML() {
    var HTML_Width = $("#wizualizacjaDanych").width();
    var HTML_Height = $("#wizualizacjaDanych").height();
    var top_left_margin = 50;
    var PDF_Width = HTML_Width + (top_left_margin * 2);
    var PDF_Height = (PDF_Width * 1.5) + (top_left_margin);
    // var canvas_image_width = HTML_Width;
    // var canvas_image_height = HTML_Height;

    var totalPDFPages = Math.ceil(HTML_Height / PDF_Height) - 1;

    html2canvas($("#wizualizacjaDanych")[0]).then(function (canvas) {
        var imgData = canvas.toDataURL("image/jpeg", 1.0);
        var pdf = new jsPDF("p", "pt", [PDF_Width, PDF_Height]);
        pdf.text("Wyeksportowny plik z wynikiem twojej pracy!", (HTML_Width + 100) / 2, 30, "center");
        pdf.addImage(imgData, "JPG", top_left_margin, top_left_margin, 780, 540);
        for (var i = 1; i <= totalPDFPages; i++) { 
            pdf.addPage(PDF_Width, PDF_Height);
            pdf.addImage(imgData, "JPG", top_left_margin, -(PDF_Height*i)+(top_left_margin*4),780,540);
        }
        pdf.save("wiazaniaPDF.pdf");
    });
}