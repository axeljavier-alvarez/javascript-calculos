// VARIABLES
var salario;
var bonificacion;
var comision;
var resultado;

var ahorro;
var iggs;
var prestamos;
var resultado2;
var globalIggs;
var resultadoFinal;




function calcularIngresos(){
    // verificar que esten todos los campos
    salario = parseFloat(document.getElementById("salario").value);
    bonificacion = parseFloat(document.getElementById("bonificacion").value);
    comision = parseFloat(document.getElementById("comision").value);

    

    if(salario&&bonificacion&&comision){
        // calcular IGGS
    iggs = salario * 0.0483; // 4.83% del salario

    // mostrar resultado y IGGS en formulario 1 y 2 respectivamente
    resultado = salario + bonificacion + comision;
    resultado = resultado.toFixed(2);
    document.getElementById('resultado').value = "El total ganado es: " + resultado;
    
    // variable global para el iggs
    globalIggs = iggs;

    document.getElementById('iggs').innerHTML = "El IGGS es: " + iggs.toFixed(2);
} else {
    alert("Revise que este el iggs o que haya completado todos los campos");

}
}

function calcularEgresos() {   
  ahorro = parseFloat(document.getElementById("ahorro").value);
  prestamos = parseFloat(document.getElementById("prestamos").value);
  if(ahorro&&iggs&&prestamos){
  // Acceder a IGGS desde la variable global
  iggsCalculado = globalIggs; // Obtener el valor de IGGS almacenado
  // Calcular total de descuento
  resultado2 = ahorro + iggsCalculado + prestamos;
  resultado2 = resultado2.toFixed(2);
  document.getElementById('resultado2').value = "Descuento es: " + resultado2;
} else {
    alert("Revise que este el iggs o que haya completado todos los campos");
}
}

function obtenerSueldoLiquido(){
    calcularIngresos();
    calcularEgresos();
    resultado = parseFloat(document.getElementById('resultado').value.split(": ")[1]);
    resultado2 = parseFloat(document.getElementById('resultado2').value.split(": ")[1]);
    resultadoFinal = resultado - resultado2;
    resultadoFinal = resultadoFinal.toFixed(2);
    document.getElementById('resultadoFinal').innerHTML = "El resultado final de ingresos - egresos es: " +resultadoFinal;
}