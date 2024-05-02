
const formularioEmpleado = document.getElementById('formularioEmpleado');
const tablaEmpleados = document.getElementById('tablaEmpleados');

/* al momento de que de click en submit se agregara */
formularioEmpleado.addEventListener('submit', (event)=>{

    event.preventDefault();

    // mandar a llamar a los id
    const nombre = document.getElementById("nombre").value;
    const fechaIngreso = document.getElementById("fechaIngreso").value;
    const puesto = document.getElementById("puesto").value;
    const salario = document.getElementById("salario").value;

    // verificacion de que esten todas las variables
    if(nombre && fechaIngreso && puesto && salario){
        // INSERTAR UNA NUEVA FILA EN LA TABLA
        const fila = tablaEmpleados.insertRow();
        // INSERTAR CELDA
        const celdaNombre = fila.insertCell();
        const celdaFechaIngreso = fila.insertCell();
        const celdaPuesto = fila.insertCell();
        const celdaSalario = fila.insertCell();

        // IGUALARLAS CON LAS VARIABLES DEL FORMULARIO
        celdaNombre.textContent = nombre;
        celdaFechaIngreso.textContent = fechaIngreso;
        celdaPuesto.textContent = puesto;
        celdaSalario.textContent = salario;

        // FUNCION PARA LIMPIAR EL FORMULARIO CUANDO SE DE SUBMIT
        limpiarFormulario();
    } else {
        alert("Tiene que completar todos los campos");
    }

});

// funcion para limpiar el formulario
function limpiarFormulario(){
    document.getElementById("nombre").value ="";
    document.getElementById("fechaIngreso").value = "";
    document.getElementById("puesto").value = "";
    document.getElementById("salario").value= "";
}

// eliminar primera fila
function eliminarPrimeraFila() {
    const tablaEmpleados = document.getElementById('tablaEmpleados');
    if (tablaEmpleados.rows.length > 1) {
      tablaEmpleados.deleteRow(1);
    } else {
      alert("No hay filas para eliminar");
    }
}

// eliminar ultima fila
function eliminarUltimaFila(){
    const tablaEmpleados = document.getElementById('tablaEmpleados');
    if (tablaEmpleados.rows.length > 1){
        tablaEmpleados.deleteRow(tablaEmpleados.rows.length -1);
    } else {
        alert("No hay filas para eliminar");
    }
}