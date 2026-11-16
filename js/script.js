const days = document.getElementById("days"),
      hours = document.getElementById("hours"),
      min = document.getElementById("min"),
      sec = document.getElementById("sec");

const navidad = new Date("March 27, 2027 16:00:00").getTime();
setInterval(() => {

let hoy= new Date().getTime()

let tiempoRest = navidad - hoy;

//Conversion mes dias horas min sec 
let dias = Math.floor(tiempoRest/86400000),
horas = Math.floor (tiempoRest/3600000) % 24,
minutos = Math.floor (tiempoRest/60000) % 60,
segundos = Math.floor(tiempoRest/1000) % 60;

//Mostrar en pantalla los resultados
days.innerHTML = dias;
hours.innerHTML = horas;
min.innerHTML= minutos;
sec.innerHTML= segundos;

//Acomodar formato de nuestras fechas
if (horas < 10) hours.innerHTML="0" + horas;
if (minutos < 10) min. innerHTML="0" + minutos;
if (segundos < 10) sec.innerHTML = "O" + segundos;
}, 1000);