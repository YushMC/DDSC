function notificacionPrueba(){
    swal({
        title: "Modo de prueba",
        text: "Esta función se encuentra en modo de prueba",
        icon: "info",
        button: "¡De acuerdo!",
    });
}
function colorSeleccionado(coloress){
    swal({
        title: "Cambio efectuado",
        text: "Se cambio al modo de color de: "+coloress,
        icon: "success",
        button: "¡De acuerdo!",
    });
}
function ErrorAlerta(error){
    swal({
        title: "ERROR",
        text: "Se presento el siguiente error "+error,
        icon: "warning",
        button: "Aceptar",
    });
}
function SuccesfulAlerta(mensaje){
    swal({
        title: "Correcto",
        text: mensaje,
        icon: "success",
        button: "Aceptar",
    });
}