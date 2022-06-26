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
}

setInterval("navoutput()", 1000);