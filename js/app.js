function encriptar() {
    let textoOriginal = document.getElementById("ingresoTexto").value.toLowerCase();
    let textoEncriptado = textoOriginal
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");


    document.getElementById("imgDer").style.display = "none";
    let titulo = document.getElementById("mensajeAdv");
    titulo.style.display = "none";
    actualizarTexto(textoEncriptado);
    document.getElementById("txtInfo").classList.add("ajustar");
    
}

function desencriptar() {
    let texto = document.getElementById("ingresoTexto").value.toLowerCase();
    let textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    document.getElementById("imgDer").style.display = "none";
    let titulo = document.getElementById("mensajeAdv");
    titulo.style.display = "none";
    actualizarTexto(textoDesencriptado);
    document.getElementById("txtInfo").classList.add("ajustar");
}

function actualizarTexto(texto) {
    let mensajeElement = document.getElementById("txtInfo");
    mensajeElement.innerHTML = texto;

    // Mostrar el botón de copiar
    let botonCopiar = document.getElementById("botonCopiar");
    botonCopiar.style.display = "inline-block";
}

function copiar() {
    // Selecciona el elemento textarea de solo lectura
    let textarea = document.getElementById("txtInfo");
    
    // Obtiene el texto del textarea
    let textoCopiado = textarea.value;

    // Copia el texto al portapapeles
    navigator.clipboard.writeText(textoCopiado)
        .then(() => {
            // Notifica al usuario que el texto ha sido copiado exitosamente
            alert("¡Texto copiado éxitosamente!");
        })
        .catch(err => {
            // Maneja cualquier error que pueda ocurrir durante la copia
            console.error("Error al copiar texto: ", err);
        });
}