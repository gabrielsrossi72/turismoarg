'use strict'

// Menú de navegación responsive.

//Función que despliega y cierra el menú de hamburguesa de la barra de navegación
function hamburguesa() {
    let menu_hamburguesa_m = document.querySelector(".menu-hamburguesa");
    let menu_cerrar = document.querySelector(".menu-hamburguesa .bx-x");
     
    menu_hamburguesa_m.style.left = "0"; //Se abre el menú de hamburguesa al hacer click en él

    //Si se hace click en la 'X' se cierra el menú de hamburguesa
    menu_cerrar.onclick = function() {
      menu_hamburguesa_m.style.left = "-100%";
    }
}

//Función que despliega el cuadro de búsqueda del buscador al hacer clic en él
function buscadorAbrir(){
  let barra_navegacion = document.querySelector(".barra_navegacion");
  let buscador_c = document.querySelector(".buscador .bx-search");
  
  barra_navegacion.classList.toggle("showInput"); // Como NO existe la clase showInput, la añade
  if(barra_navegacion.classList.contains("showInput")){ // Se despliega el cuadro de búsqueda
    buscador_c.classList.replace("bx-search" ,"bx-x"); // Se reemplaza el icono del buscador por el icono 'X'

    var buscador_x = document.querySelector(".buscador .bx-x");
    buscador_x.setAttribute('onclick','buscadorCerrar()'); // Ahora al hacer click se va a llamar a la función que cierra
                                                           // el cuadro de búsqueda del buscador.
  }
}

//Función que cierraa el cuadro de búsqueda del buscador al hacer clic en el icono 'X'
function buscadorCerrar(){
  let barra_navegacion = document.querySelector(".barra_navegacion");
  let buscador_x = document.querySelector(".buscador .bx-x");
  
  barra_navegacion.classList.toggle("showInput"); // Como SI existe la clase showInput, la elimina y NO se despliega el cuadro de búsqueda.
  buscador_x.classList.replace("bx-x" ,"bx-search"); // Se reemplaza el icono de la 'X' por el icono del buscador

  var buscador_c = document.querySelector(".buscador .bx-search");
  buscador_c.setAttribute('onclick','buscadorAbrir()'); // Ahora al hacer click se va a llamar a la función que abre
                                                        // el cuadro de búsqueda del buscador.
}

// Funciones que muestran las subcategorías de las categorías principales, al hacer click en la flecha de
// cada categoría desplegable.

// Subcategorías de Destinos.
function mostrarSubCategoriasDes(){
  let menu_hamburguesa_m = document.querySelector(".menu-hamburguesa");
  let flecha = document.getElementById("flecha1");

  menu_hamburguesa_m.classList.toggle("show1");
  
  if(menu_hamburguesa_m.classList.contains("show1")){
    flecha.style.transform="rotate(180deg)";
  } else {
    flecha.style.transform="rotate(0deg)";
  }
}

// Subcategorías de Paquetes.
function mostrarSubCategoriasPaq(){
  let menu_hamburguesa_m = document.querySelector(".menu-hamburguesa");
  let flecha = document.getElementById("flecha2");

  menu_hamburguesa_m.classList.toggle("show2");
  
  if(menu_hamburguesa_m.classList.contains("show2")){
    flecha.style.transform="rotate(180deg)";
  } else {
    flecha.style.transform="rotate(0deg)";
  }
}

// Subcategorías de A donde ir.
function mostrarSubCategoriasAdndIr(){
  let menu_hamburguesa_m = document.querySelector(".menu-hamburguesa");
  let flecha = document.getElementById("flecha3");

  menu_hamburguesa_m.classList.toggle("show3");
  
  if(menu_hamburguesa_m.classList.contains("show3")){
    flecha.style.transform="rotate(180deg)";
  } else {
    flecha.style.transform="rotate(0deg)";
  }
}

// Subcategorías de Actividades.
function mostrarSubCategoriasAct(){
  let menu_hamburguesa_m = document.querySelector(".menu-hamburguesa");
  let flecha = document.getElementById("flecha4");

  menu_hamburguesa_m.classList.toggle("show4");
  
  if(menu_hamburguesa_m.classList.contains("show4")){
    flecha.style.transform="rotate(180deg)";
  } else {
    flecha.style.transform="rotate(0deg)";
  }
}
