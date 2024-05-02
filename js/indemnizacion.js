
var sueldo;
var añosPendientes;
var mesesPendientes;
var salarioPendiente;
var cobrosPendientes;
var bono14;
var aguinaldo;

var operacion;

function calcularIndemnizacion() {

    sueldo = parseFloat(document.getElementById("sueldo").value);
    añosPendientes = parseFloat(document.getElementById("añosPendientes").value);
    mesesPendientes = parseFloat(document.getElementById("mesesPendientes").value);
    salarioPendiente = parseFloat(document.getElementById("salarioPendiente").value);
    cobrosPendientes = parseFloat(document.getElementById("cobrosPendientes").value);

    if (sueldo && añosPendientes && mesesPendientes && salarioPendiente && cobrosPendientes) {
        bono14 = (sueldo / 12) * mesesPendientes;
        aguinaldo = (sueldo / 12) * mesesPendientes;

        operacion = sueldo + añosPendientes + mesesPendientes + salarioPendiente + cobrosPendientes + bono14 + aguinaldo;
        document.getElementById("resultado").value = "El resultado es " + operacion.toFixed(2);

        document.getElementById("bono14").innerHTML = "El bono 14 es: " + bono14.toFixed(2);
        document.getElementById("aguinaldo").innerHTML = "El aguinaldo es: " + aguinaldo.toFixed(2);

        swal({
            title: "¡Exito!",
            text: "Calculo realizado con éxito",
            icon: "success", // Cambiar "error" a "warning"
            showConfirmButton: true
          });

    } else {
        swal({
            title: "¡Alerta!",
            text: "Porfavor completar todos los campos",
            icon: "warning", // Cambiar "error" a "warning"
            showConfirmButton: true
          });
    }
}

function borrarDatos() {
    document.getElementById("sueldo").value = "";
    document.getElementById("añosPendientes").value = "";
    document.getElementById("mesesPendientes").value = "";
    document.getElementById("salarioPendiente").value = "";
    document.getElementById("cobrosPendientes").value = "";
    document.getElementById("resultado").value = "";
    document.getElementById("bono14").innerHTML = "";
    document.getElementById("aguinaldo").innerHTML = "";

    swal({
        title: "¡Exito!",
        text: "Se han borrado los campos",
        icon: "success", // Cambiar "error" a "warning"
        showConfirmButton: true
      });
}