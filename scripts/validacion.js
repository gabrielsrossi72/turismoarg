'use strict'
// Variables globales para manejar los aciertos y errores del formulario
var acierto = 0;
var error = 0;

$(document).ready(function(){
    const form = document.getElementById('formulario_contacto');
    form.addEventListener('submit', e => {

        e.preventDefault();

        // Función que valida la información del formulario
        validarFormulario();
        
        if(acierto == 4) {
          $("#dialog").dialog("open");      
        } else if(error == 4){
          errorDialogo(true);
        } else if(acierto < 4){
          acierto=0;
          errorDialogo(false);
        }
        
    });
});

// Función para el mensaje de éxito con el objeto dialog() de jQuery-UI
$(document).ready(function (){

  $("#dialog").dialog({
    autoOpen: false,
    modal: true,
    width: '400px',
    resizable: false,
    position:  {  my: " center bottom", at: "center top", of: window },
    show: {
      effect: "blind",
      duration: 1000
    },
    hide: {
      effect: "fade",
      duration: 1000
    },
    buttons: {
      "Aceptar": function () {
        location.reload();
        $(this).dialog("close");
      }
    }
  });
});

//Función para el mensaje de error con el objeto dialog() de jQuery-UI
function errorDialogo(variable){
  var error = "";
  if (variable==true) {
    error = "¡No puede enviar el correo vacío! Revise su formulario por favor.";
  } else {
    error = "Algunos campos no son correctos o no se han rellenado.. Revise su formulario por favor.";
  }
  
  var dialogo=$('<div></div>');
  
  dialogo.text(error);
  
  dialogo.dialog({
    title:'Error al enviar el formulario',
    width: '400px',
    modal: true,
    resizable: false,
    position:  {  my: "center bottom", at: "center top", of: window },
    show: {
      effect: "shake",
      duration: 1000
    },
    hide: {
      effect: "fade",
      duration: 1000
    },
    buttons: [{
      text: "Aceptar",
      click: function() {
        $(this).dialog("close");
      }
    }]
  });
};

//Función que valida el formulario de la página de contacto desde la parte del cliente, 
// antes de enviar la informacíon del mismo al servidor
function validarFormulario(evento) {

   //Evitamos la acción por defecto del evento
   if(evento) evento.preventDefault();

    //Variables generales del formulario
    const asunto = document.getElementById('select_contacto');
    const comentario = document.getElementById('comentario1')
    const nombre = document.getElementById('nombreContacto');
    const email = document.getElementById('emailContacto');
    
    const nombreValue = nombre.value.trim();
    const asuntoValue = asunto.value;
    const comentarioValue = comentario.value.trim();
    const emailValue = email.value.trim();

    // ************************** Select **************************
    if(asuntoValue === '') {
        error++;
        mostrarError(asunto, '!Debe seleccionar alguna opción!');
    } else{
        mostrarExito(asunto);
    }

    // ************************** Textarea **************************
    //TextArea vacío, con más de 250 caracteres o con menos de 2 caracteres
    if(comentarioValue === '') {
        error++;
        mostrarError(comentario, '¡El comentario no puede estar en blanco!');
    } else if(comentarioValue.length > 250){
        error++;
        mostrarError(comentario, '¡El número máximo de caracteres es de 250!');
    } else if (comentarioValue.length < 2){
        error++;
        mostrarError(comentario, '¡El número mínimo de caracteres es de 2!');
    } else {
        mostrarExito(comentario);
    }

    // ************************** Nombre y apellidos **************************
    //Nombre y apellidos que no cumplen con el patrón de un nombre y apellidos
    if(nombreValue === '') { 
        error++;
        mostrarError(nombre, '¡El nombre y apellidos no puede estar en blanco!');	
    }else if(!esNombreApellidos(nombreValue)) {
        error++;
        mostrarError(nombre, 'Nombre inválido. Un nombre válido podría ser: Antonio García Rodríguez');	
    } else {
        mostrarExito(nombre);
    }
    
    // ************************** Email **************************
    //Email correcto siguiendo un patrón
    if(emailValue === '') {
        error++;
        mostrarError(email, '¡El email no puede estar en blanco!');
    } else if (!esEmail(emailValue)) {
        error++;
        mostrarError(email, 'Email inválido. Un email válido podría ser: jose.daw.99@gmail.com');
    } else {
        mostrarExito(email);
    }

}

function mostrarError(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}

function mostrarExito(input) {
    acierto++;
    const formControl = input.parentElement;
    formControl.className = 'form-control success';  
}
    
function esEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


function esNombreApellidos(nombre){
    return /^([a-z ñáéíóú]{4,60})$/i.test(nombre);
}

//Función que cuenta los caracteres restantes a escribir en el cuadro de texto del comentario del formulario.
function cuenta(){
    let tam = document.getElementById('comentario1').value.trim();
    let negrita = document.getElementById('strong');
    let restriccion = document.getElementById('em_com'); 
    let errorTxa = document.getElementById('error_textarea');

    negrita.innerHTML = 250 - tam.length;

    if(tam.length > 250 || tam.length < 0) {
        restriccion.style.display="none";
        errorTxa.innerHTML = "<p>Se ha excedido el número de caracteres permitidos, su formulario no se enviará.</p>";
    } else {
        restriccion.style.display="block"; 
        errorTxa.innerHTML="";
    }
}
