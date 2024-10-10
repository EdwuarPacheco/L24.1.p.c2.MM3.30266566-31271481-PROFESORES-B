/*
PROFESORES-B
En la Universidad se le paga a cada profesores un bono, sin embargo si es personal fijo tiene
un sueldo y si es contratado tiene cantidad de horas, donde cada una se paga a $10. Considere
que a todos los profesores se les pide su nombre, y las clases Cl_fijo y Cl_contratado heredan
de la clase Cl_profesor.
Haga un programa que haga uso de la misma clase Cl_profesor del ejercicio anterior, lea los
datos de un profesor contratado y reporte su ingreso total.
*/

import Cl_Fijo from "./Cl_Fijo.js";
import Cl_Contratado from "./Cl_Contratado.js";
import Cl_Escuela from "./Cl_Escuela.js";


const escuela = new Cl_Escuela();
const contratado = new Cl_Contratado("Juan", 50, 15);
const contratado2 = new Cl_Contratado("Pedro", 20, 10);

escuela.procesarProfesor(contratado);
escuela.procesarProfesor(contratado2);

let salida = document.getElementById("salida");
salida.innerHTML = `
<br> Nombre del profesor contratado: ${contratado.nombre} 
<br> Monto del bono: $${contratado.bono}
<br> Cantidad de horas: $${contratado.horas}
<br> Ingreso Total del profesor Juan: $${contratado.calcularIngresos()}
<br><br>`

salida.innerHTML += `
<br> Nombre del profesor contratado: ${contratado2.nombre} 
<br> Monto del bono: $${contratado2.bono}
<br> Cantidad de horas: $${contratado2.horas}
<br> Ingreso Total del profesor Pedro: $${contratado2.calcularIngresos()}`

