//punto 1
var salario = parseInt (prompt("digite salario del empleado"))
var salud = salario * 8/100; // salario * 0.08;
var pension = salario * 10/100 // salario * 0.1
var sueldoneto = salario - salud - pension // salario - (salud + pension)
document.write("el salario es : " +salario+"<br>");
document.write("el dto en salud es : " +salud+"<br>");
document.write("el dto en pension es : " +pension+"<br>");
document.write("el sueldo a pagar es : " +sueldoneto+"<br>");

//punto 2
var base1 = prompt("Ingrese la base del triangulo");
var altura1 = prompt("Ingrese la altura del triangulo");
var base = parseFloat(base1);
var altura = parseFloat(altura1);
var area = (base * altura) / 2;
console.log("El area del triangulo es: " + area);

//punto 3
var numero1 = document.getElementById("numero1");
var numero2 = document.getElementById("numero2");
var numero1 = parseInt(numero1);
var numero2 = parseInt(numero2);
var suma = numero1 + numero2;
var resta = numero1 - numero2;
var multiplicacion = numero1 * numero2;
var division = numero1 / numero2;
var modulo = numero1  % numero2;
document.getElementById("ResultadoSuma").textContent = "suma: " + suma;
document.getElementById("ResultadoResta").textContent = "resta " + resta;
document.getElementById("ResultadoMultiplicacion").textContent = "multiplicacion" + multiplicacion;
document.getElementById("ResultadoDivision").textContent = "division " + division;
document.getElementById("ResultadoModulo").textContent = "modulo " + modulo;

//punto 4
var horasTra = document.getElementById("HorasTrabajadas");
var valorhora = document.getElementById("ValorHora");
var valorextra = document.getElementById("valorextra");
var HorasTrabajadas = parseInt(HorasTrabajadas);
var valorhora = parseInt(valorhora);
var valorextra = parseInt(valorextra);
var horasNormales = Math.min(HorasTrabajadas, 40);
var horasExtras = Math.max(HorasTrabajadas - 40, 0);
var sueldoNormal = horasNormales * valorhora;
var sueldoExtra = horasExtras * valorextra;
var sueldoMensual = sueldoNormal + sueldoExtra;
document.getElementById("resultadosueldomensual") = "Sueldo Mensual: $" + sueldoMensual;

//punto 5 
var precioPro = document.getElementById("precioProducto");
var precioProducto = parseFloat(precioPro);
var iva = precioPro * 0.10 
var precioSinIva = precioProducto - iva;
var totalPagar = precioProducto;
document.getElementById("resultadoIva") = "iva: $" + iva;
document.getElementById("resultadoPrecioSinIva") = "precio sin Iva: $" + precioSinIva;
document.getElementById("resultadoTotalPagar") = "Total a pagar: $" + totalPagar;

//punto 6
var totalHombres = document.getElementById("TotalHombres");
var totalMujeres = document.getElementById("TotalMujeres");
var totalHombres = parseInt(totalHombres);
var totalMujeres = parseInt(totalMujeres);
var totalAlumnos = totalHombres + totalMujeres;
var porcentajeHombres = (totalHombres / totalAlumnos) * 30;
var porcentajeMujeres = (totalMujeres / totalAlumnos) * 30;
document.getElementById("resultadoPorcentajeH") = "Porcentaje de Hombres : " + porcentajeHombres;
document.getElementById("resultadoPorcentajeM") = "Porcentaje de Mujeres :" + porcentajeMujeres;

//punto 7 
var nota1 = document.getElementById("nota1");
var nota2 = document.getElementById("nota2");
var nota3 = document.getElementById("nota3");
var nota1 = parseFloat(nota1);
var nota2 = parseFloat(nota2);
var nota3 = parseFloat(nota3);
var notasValidas = nota1 >= 1 && nota1 <= 5 &&
                     nota2 >= 1 && nota2 <= 5 &&
                     nota3 >= 1 && nota3 <= 5;
if (notasValidas) {
  const promedio = (nota1 + nota2 + nota3) / 3;
  document.getElementById("resultadoPromedio") = "Promedio: " + promedio;
} else {
  document.getElementById("resultadoPromedio") = "Las notas deben estar en 1 al 5.";
}
