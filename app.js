function loadImage(url) {
    return new Promise(resolve => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = "blob";
        xhr.onload = function (e) {
            const reader = new FileReader();
            reader.onload = function(event) {
                const res = event.target.result;
                resolve(res);
            }
            const file = this.response;
            reader.readAsDataURL(file);
        }
        xhr.send();
    });
}

let signaturePad = null;

window.addEventListener('load', async () => {

    const canvas = document.getElementById("signature-canvas");
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight
    signaturePad = new SignaturePad(canvas, {});

    const form = document.querySelector('#form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let tipoResonancia = document.getElementById('tipoResonancia').value;
        let nombrePaciente = document.getElementById('nombrePaciente').value;
        let rut = document.getElementById('rut').value;
        let telefono = document.getElementById('telefono').value;
        let correo = document.getElementById('correo').value;
        let fechaExamen = document.getElementById('fechaExamen').value;
        let fechaNaciemiento = document.getElementById('fechaNaciemiento').value;
        let edad = document.getElementById('edad').value;
        let peso = document.getElementById('peso').value;
        let estatura = document.getElementById('estatura').value;

        let marcapasos = document.querySelector('input[name="marcapasos"]:checked');
        marcapasos = marcapasos ? marcapasos.value : '';

        let coclear = document.querySelector('input[name="coclear"]:checked');
        coclear = coclear ? coclear.value : '';

        let embarazoMenor = document.querySelector('input[name="embarazoMenor"]:checked');
        embarazoMenor = embarazoMenor ? embarazoMenor.value : '';

        let aneurisma = document.querySelector('input[name="aneurisma"]:checked');
        aneurisma = aneurisma ? aneurisma.value : '';

        let bombaMedicamentos = document.querySelector('input[name="bombaMedicamentos"]:checked');
        bombaMedicamentos = bombaMedicamentos ? bombaMedicamentos.value : '';

        let valulaCardiaca = document.querySelector('input[name="valulaCardiaca"]:checked');
        valulaCardiaca = valulaCardiaca ? valulaCardiaca.value : '';

        let lesionOjo = document.querySelector('input[name="lesionOjo"]:checked');
        lesionOjo = lesionOjo ? lesionOjo.value : '';

        let retirado = document.querySelector('input[name="retirado"]:checked');
        retirado = retirado ? retirado.value : '';

        let claustrofobico = document.querySelector('input[name="claustrofobico"]:checked');
        claustrofobico = claustrofobico ? claustrofobico.value : '';

        let cirugiaCardiaca = document.querySelector('input[name="cirugiaCardiaca"]:checked');
        cirugiaCardiaca = cirugiaCardiaca ? cirugiaCardiaca.value : '';

        let implantes = document.querySelector('input[name="implantes"]:checked');
        implantes = implantes ? implantes.value : '';

        let material = document.getElementById('material').value;
        let molestias = document.getElementById('molestias').value;
        let patologia = document.getElementById('patologia').value;
        let medicamento = document.getElementById('medicamento').value;
        let cirujiaComun = document.getElementById('cirujiaComun').value;

        let examenRelacionado = document.querySelector('input[name="examenRelacionado"]:checked');
        examenRelacionado = examenRelacionado ? examenRelacionado.value : '';

        let cualExamen = document.getElementById('cualExamen').value;
        let tenerAyuno = document.querySelector('input[name="tenerAyuno"]:checked');
        tenerAyuno = tenerAyuno ? tenerAyuno.value : '';

        let reaccion = document.querySelector('input[name="reaccion"]:checked');
        reaccion = reaccion ? reaccion.value : '';

        let alergiaMedicamento = document.querySelector('input[name="alergiaMedicamento"]:checked');
        alergiaMedicamento = alergiaMedicamento ? alergiaMedicamento.value : '';

        let enfermedadCardiaca = document.querySelector('input[name="enfermedadCardiaca"]:checked');
        enfermedadCardiaca = enfermedadCardiaca ? enfermedadCardiaca.value : '';

        let tratamiento = document.querySelector('input[name="tratamiento"]:checked');
        tratamiento = tratamiento ? tratamiento.value : '';

        let asmatico = document.querySelector('input[name="asmatico"]:checked');
        asmatico = asmatico ? asmatico.value : '';

        let años = document.querySelector('input[name="60anos"]:checked');
        años = años ? años.value : '';

        let cirujiaRenal = document.querySelector('input[name="cirujiaRenal"]:checked');
        cirujiaRenal = cirujiaRenal ? cirujiaRenal.value : '';

        let enfermedadesRenales = document.querySelector('input[name="enfermedadesRenales"]:checked');
        enfermedadesRenales = enfermedadesRenales ? enfermedadesRenales.value : '';

        let corticoides = document.querySelector('input[name="corticoides"]:checked');
        corticoides = corticoides ? corticoides.value : '';

        let mieloma = document.querySelector('input[name="mieloma"]:checked');
        mieloma = mieloma ? mieloma.value : '';

        let colagenopatias = document.querySelector('input[name="colagenopatias"]:checked');
        colagenopatias = colagenopatias ? colagenopatias.value : '';

        let miastenia = document.querySelector('input[name="miastenia"]:checked');
        miastenia = miastenia ? miastenia.value : '';

        let miasteniaGravis = document.querySelector('input[name="miasteniaGravis"]:checked');
        miasteniaGravis = miasteniaGravis ? miasteniaGravis.value : '';

        let pvvih = document.querySelector('input[name="pvvih"]:checked');
        pvvih = pvvih ? pvvih.value : '';

        let hipertension = document.querySelector('input[name="hipertension"]:checked');
        hipertension = hipertension ? hipertension.value : '';

        let diabetes = document.querySelector('input[name="diabetes"]:checked');
        diabetes = diabetes ? diabetes.value : '';

        let hipoglicemiante = document.querySelector('input[name="hipoglicemiante"]:checked');
        hipoglicemiante = hipoglicemiante ? hipoglicemiante.value : '';

        generatePDF(
            tipoResonancia, nombrePaciente, rut, telefono, correo, fechaExamen, 
            fechaNaciemiento, edad, peso, estatura, marcapasos, coclear, embarazoMenor, 
            aneurisma, bombaMedicamentos, valulaCardiaca, lesionOjo, retirado, claustrofobico, 
            cirugiaCardiaca, implantes, material, molestias, patologia, medicamento, cirujiaComun, 
            examenRelacionado, cualExamen, tenerAyuno, reaccion, alergiaMedicamento, enfermedadCardiaca, 
            tratamiento, asmatico, años, cirujiaRenal, enfermedadesRenales, corticoides, mieloma, 
            colagenopatias, miastenia, miasteniaGravis, pvvih, hipertension, diabetes, hipoglicemiante
        );

    })

});

async function generatePDF(
    tipoResonancia, nombrePaciente, rut, telefono, correo, fechaExamen, 
    fechaNaciemiento, edad, peso, estatura, marcapasos, coclear, embarazoMenor, 
    aneurisma, bombaMedicamentos, valulaCardiaca, lesionOjo, retirado, claustrofobico, 
    cirugiaCardiaca, implantes, material, molestias, patologia, medicamento, cirujiaComun, 
    examenRelacionado, cualExamen, tenerAyuno, reaccion, alergiaMedicamento, enfermedadCardiaca, 
    tratamiento, asmatico, años, cirujiaRenal, enfermedadesRenales, corticoides, mieloma, 
    colagenopatias, miastenia, miasteniaGravis, pvvih, hipertension, diabetes, hipoglicemiante
) {
    const image = await loadImage("ENCUESTA RNM_1.jpg");
    const signatureImage = signaturePad.toDataURL();

    const pdf = new jsPDF('p', 'pt', 'letter');

    pdf.addImage(image, 'PNG', 0, 0, 565, 792);
    pdf.addImage(signatureImage, 'PNG', 220, 665, 400, 50);

   // pdf.setFontSize(12);
   // pdf.text(curso, 260, 125);

    // const date = new Date();
    // pdf.text(date.getUTCDate().toString(), 235, 150);
    // pdf.text((date.getUTCMonth() + 1).toString(), 275, 150);
    // pdf.text(date.getUTCFullYear().toString(), 320, 150);

    pdf.setFontSize(10);
    pdf.text(tipoResonancia, 380, 85);
    pdf.text(nombrePaciente, 150, 120);
    pdf.text(rut, 410, 120);
    pdf.text(telefono, 150, 132);
    pdf.text(correo, 210, 132);
    pdf.text(fechaExamen, 410, 132);
    pdf.text(fechaNaciemiento, 150, 145);
    pdf.text(edad, 355, 145);
    pdf.text(peso, 410, 145);
    pdf.text(estatura, 480, 145);

    // pdf.setFillColor(0,0,0);

    if (parseInt(marcapasos) === 0) {
         pdf.circle(485, 218, 6, 'FD');
         //         lado, arriba
     } 
     
     if (parseInt(marcapasos) === 1){
        pdf.circle(392, 218, 6, 'FD');
     }

     if (parseInt(coclear) === 0) {
        pdf.circle(485, 234, 6, 'FD');
     } 
    
     if (parseInt(coclear) === 1){
       pdf.circle(392, 234, 6, 'FD');
     }

     if (parseInt(embarazoMenor) === 0) {
        pdf.circle(485, 249, 6, 'FD');
     } 
    
     if (parseInt(embarazoMenor) === 1){
       pdf.circle(392, 249, 6, 'FD');
     }

     if (parseInt(aneurisma) === 0) {
        pdf.circle(485, 264, 6, 'FD');
     } 
    
     if (parseInt(aneurisma) === 1){
       pdf.circle(392, 264, 6, 'FD');
     }

     if (parseInt(bombaMedicamentos) === 0) {
        pdf.circle(485, 279, 6, 'FD');
     } 
    
     if (parseInt(bombaMedicamentos) === 1){
       pdf.circle(392, 279, 6, 'FD');
     }

     if (parseInt(valulaCardiaca) === 0) {
        pdf.circle(485, 294, 6, 'FD');
     } 
    
     if (parseInt(valulaCardiaca) === 1){
       pdf.circle(392, 294, 6, 'FD');
     }

     if (parseInt(lesionOjo) === 0) {
        pdf.circle(485, 312, 6, 'FD');
     } 
    
     if (parseInt(lesionOjo) === 1){
       pdf.circle(392, 312, 6, 'FD');
     }

     if (parseInt(retirado) === 0) {
        pdf.circle(357, 324, 4, 'FD');
     } 
    
     if (parseInt(retirado) === 1){
       pdf.circle(287, 324, 4, 'FD');
     }

     if (parseInt(claustrofobico) === 0) {
        pdf.circle(484, 373, 6, 'FD');
         //       lado, arriba
     } 
    
     if (parseInt(claustrofobico) === 1){
       pdf.circle(391, 373, 6, 'FD');
     }

     if (parseInt(cirugiaCardiaca) === 0) {
        pdf.circle(484, 388, 6, 'FD');
         //       lado, arriba
     } 
    
     if (parseInt(cirugiaCardiaca) === 1){
       pdf.circle(391, 388, 6, 'FD');
     }

     if (parseInt(implantes) === 0) {
        pdf.circle(484, 404, 6, 'FD');
         //       lado, arriba
     } 
    
     if (parseInt(implantes) === 1){
       pdf.circle(391, 404, 6, 'FD');
     }

     pdf.text(material, 215, 420);
     pdf.text(molestias, 60, 460);
     pdf.text(patologia, 60, 506);
     pdf.text(medicamento, 60, 540);
     pdf.text(cirujiaComun, 60, 574);

     if (parseInt(examenRelacionado) === 0) {
        pdf.circle(293, 603, 5, 'FD');
         //       lado, arriba
     } 
    
     if (parseInt(examenRelacionado) === 1){
       pdf.circle(326, 603, 5, 'FD');
     }

     pdf.text(cualExamen, 90, 620);
     


    pdf.save("ResonanciaMagnetica.pdf");

}



document.addEventListener("DOMContentLoaded", function() {
    // Obtén los elementos de los radio buttons
    const contrasteSi = document.getElementById("contraste-si");
    const contrasteNo = document.getElementById("contraste-no"); // Agrega esta línea

    const formularioAdicional = document.getElementById("formulario-adicional");

    // Agrega un evento al cambio de selección del radio button "Sí"
    contrasteSi.addEventListener("change", function() {
        // Si se selecciona "Sí", muestra el formulario adicional
        if (contrasteSi.checked) {
            formularioAdicional.style.display = "block";
        } else {
            // Si se selecciona "No", oculta el formulario adicional
            formularioAdicional.style.display = "none";
        }
    });

    // Agrega un evento al cambio de selección del radio button "No"
    contrasteNo.addEventListener("change", function() {
        // Si se selecciona "No", oculta el formulario adicional
        if (contrasteNo.checked) {
            formularioAdicional.style.display = "none";
        }
    });
});


