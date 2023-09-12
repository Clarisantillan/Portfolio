document.addEventListener("DOMContentLoaded", function () {
    var typewriter = document.querySelector(".typewriter");
    var textList = ["Data Analyst", "Data Scientist", "Data Engineer","Full Stack Developer", "Backend Python"];
    var currentIndex = 0;

    function writeText() {
        var text = textList[currentIndex];
        var position = 0;
        var interval = setInterval(function () {
            if (position < text.length) {
                typewriter.textContent += text.charAt(position);
                position++;
            } else {
                clearInterval(interval);
                setTimeout(eraseText, 250); // Espera 1 segundo antes de borrar el texto
            }
        }, 100); // Velocidad de escritura

        function eraseText() {
            var textToErase = typewriter.textContent;
            var eraseInterval = setInterval(function () {
                if (textToErase.length > 0) {
                    typewriter.textContent = textToErase.slice(0, -1);
                    textToErase = typewriter.textContent;
                } else {
                    clearInterval(eraseInterval);
                    currentIndex = (currentIndex + 1) % textList.length; // Cambia al siguiente texto
                    setTimeout(writeText, 250); // Espera medio segundo antes de escribir el siguiente texto
                }
            }, 50); // Velocidad de borrado
        }
    }


    writeText(); // Inicia el proceso
})

var menu= document.getElementById("ul")
var click=1;

function funcionver(){
   if (click==1){
      menu.style.opacity =1;  
      click=click +1;
    }
    else{
        menu.style.opacity =0;  
        click=1;   
    }

}

function validarFormulario() {
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var mensaje = document.getElementById('mensaje').value;

    if (nombre === "" || email === "" || mensaje === "") {
        alert("Por favor, completa todos los campos.");
        return false;
    }
    return true;
}