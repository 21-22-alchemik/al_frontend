/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
//Create PDf from HTML...

function CreatePDFfromHTML() {
    var HTML_Width = $("#wizualizacjaDanych").width();
    console.log(HTML_Width);
    var HTML_Height = $("#wizualizacjaDanych").height();
    console.log(HTML_Height);
    var top_left_margin = 50;
    var PDF_Width = HTML_Width + (top_left_margin * 2);
    var PDF_Height = (PDF_Width * 1.5) + (top_left_margin);
    var canvas_image_width = HTML_Width;
    var canvas_image_height = HTML_Height;

    var totalPDFPages = Math.ceil(HTML_Height / PDF_Height) - 1;

    html2canvas($("#wizualizacjaDanych")[0]).then(function (canvas) {
        var imgData = canvas.toDataURL("image/jpeg", 1.0);
        var pdf = new jsPDF("p", "pt", [PDF_Width, PDF_Height]);
        pdf.text(250, 20, "Wyeksportowny plik z wynikiem twojej pracy!");
        pdf.addImage(imgData, "JPG", top_left_margin, top_left_margin, canvas_image_width, canvas_image_height);
        for (var i = 1; i <= totalPDFPages; i++) { 
            pdf.addPage(PDF_Width, PDF_Height);
            pdf.addImage(imgData, "JPG", top_left_margin, -(PDF_Height*i)+(top_left_margin*4),canvas_image_width,canvas_image_height);
        }
        pdf.save("wiazaniaPDF.pdf");
    });
}