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
    diadelasemana = semana[fdia];
    document.getElementById("dia").innerHTML = diadelasemana;
    document.getElementById("hora").innerHTML = fhora;
    document.getElementById("minutos").innerHTML = fminutos;
    document.getElementById("segundos").innerHTML = fsegundos;

    // saludos code partially created by: copilot and me 
    if (fhora < 12) {
        document.getElementById("saludo").innerHTML = "Buenos días";
        document.getElementById("mBackground").style.backgroundImage = "url('/assets/media/img/fondos/morning.png')";
    
    } else if (fhora >= 12 && fhora < 18) {
        document.getElementById("saludo").innerHTML = "Buenas tardes";
        document.getElementById("mBackground").style.backgroundImage = "url('/assets/media/img/fondos/afternoon.png')";
    } else {
        document.getElementById("saludo").innerHTML = "Buenas noches";
        document.getElementById("mBackground").style.backgroundImage = "url('/assets/media/img/fondos/night.png')";
    }

}
setInterval("navoutput()", 1000);

