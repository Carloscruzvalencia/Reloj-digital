hourFormat = 0
language = 0

// function to change the format of the hour
function btclick() {
    if (hourFormat == 0) {
        hourFormat = 1
        document.getElementById("changeHourFormat").innerHTML = "20h";
    } else {
        hourFormat = 0
        document.getElementById("changeHourFormat").innerHTML = "12h";
    }
}
// function to change the language
function changeLanguage() {
    if (language == 0) {
        language = 1
        document.getElementById("language").innerHTML = "Spanish";
    } else {
        language = 0
        document.getElementById("language").innerHTML = "Iingles";
    }
}

function navoutput() {
    fecha = new Date();
    fdia = fecha.getDay(); //dia de la semana
    fhora = fecha.getHours(); //hora
    fminutos = fecha.getMinutes(); //minutos
    fsegundos = fecha.getSeconds(); //segundos
    // dias en español
    semana = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];

    // dias en ingles
    semanaIN = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    // dia de la semana fecha actual
    if (language == 0) {
        diadelasemana = semana[fdia];
    } else {
        diadelasemana = semanaIN[fdia];
    }

    document.getElementById("dia").innerHTML = diadelasemana;
    document.getElementById("minutos").innerHTML = fminutos;
    document.getElementById("segundos").innerHTML = fsegundos;

    // saludos code partially created by: copilot and me 
    if (fhora < 12) {
        if (language == 0) {
            document.getElementById("saludo").innerHTML = "Buenos dias";
        } else {
            document.getElementById("saludo").innerHTML = "Good morning";
        }
        document.getElementById("mBackground").style.backgroundImage = "url('../media/img/fondos/morning.png')";

    } else if (fhora >= 12 && fhora < 18) {
        if (language == 0) {
            document.getElementById("saludo").innerHTML = "Buenas tardes";
        } else {
            document.getElementById("saludo").innerHTML = "Good afternoon";
        }
        document.getElementById("mBackground").style.backgroundImage = "url('../media/img/fondos/afternoon.png')";
    } else {
        if (language == 0) {
            document.getElementById("saludo").innerHTML = "Buenas noches";
        } else {
            document.getElementById("saludo").innerHTML = "Good night";
        }
        document.getElementById("mBackground").style.backgroundImage = "url('../media/img/fondos/night.png')";
    }

    // hora actual en formato 12h
    if (hourFormat == 1) {
        var format = document.getElementById("hora").value;
        if (format == "24") {
            document.getElementById("hora").innerHTML = fhora;
        } else {
            document.getElementById("hora").innerHTML = fhora % 12;
        }
    } else {
        document.getElementById("hora").innerHTML = fhora;
    }
}
setInterval("navoutput()", 1000);