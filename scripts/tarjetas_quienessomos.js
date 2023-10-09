'use strict'
// Botones Leer Más y Leer menos de la página de quienes somos.

//Botón Leer más
function leermas1() {
    $('#boton1').hide();
    $('.leermas1').css({"display":"block"});
    $('#botonM1').css({"display":"block"});
}

function leermas2() {
    $('#boton2').hide();
    $('.leermas2').css({"display":"block"});
    $('#botonM2').css({"display":"block"});
}

function leermas3() {
    $('#boton3').hide();
    $('.leermas3').css({"display":"block"});
    $('#botonM3').css({"display":"block"});
}
function leermas4() {
    $('#boton4').hide();
    $('.leermas4').css({"display":"block"});
    $('#botonM4').css({"display":"block"});
}
//Boton leermenos()
function leermenos1() {
    $('#botonM1').hide();
    $('.leermas1').css({"display":"none"});
    $('#boton1').show();
}

function leermenos2() {
    $('#botonM2').hide();
    $('.leermas2').css({"display":"none"});
    $('#boton2').show();
}

function leermenos3() {
    $('#botonM3').hide();
    $('.leermas3').css({"display":"none"});
    $('#boton3').show();
}
function leermenos4() {
    $('#botonM4').hide();
    $('.leermas4').css({"display":"none"});
    $('#boton4').show();
}