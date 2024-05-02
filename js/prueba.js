// Función para mostrar Sweet Alert de éxito
function mostrarAlertaExito() {
    swal({
      title: "¡Éxito!",
      text: "Esta es una alerta de éxito.",
      icon: "success",
      showConfirmButton: true
    });
  }
  
  // Función para mostrar Sweet Alert de error
  function mostrarAlertaError() {
    swal({
      title: "¡Error!",
      text: "Se ha producido un error.",
      icon: "error",
      showConfirmButton: true
    });
  }
  
  // Función para mostrar Sweet Alert de confirmación
  function mostrarAlertaConfirmacion() {
    swal({
      title: "¿Estás seguro?",
      text: "Esta acción no se puede revertir.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, estoy seguro",
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        swal({
          title: "¡Acción completada!",
          text: "La acción se ha realizado correctamente.",
          icon: "success"
        });
      } else {
        swal({
          title: "Acción cancelada",
          text: "La acción no se ha realizado.",
          icon: "info"
        });
      }
    });
  }