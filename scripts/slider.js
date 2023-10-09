'use strict'
// Carrusel de imágenes dinámico

$(document).ready(function(){
    //Slider manual
    const slider = document.querySelector("#slider");
    let seccionSlider = document.querySelectorAll(".seccion-slider");
    let ultimoSlider = seccionSlider[seccionSlider.length -1];

    const botonIzq = document.querySelector("#boton-izquierdo");
    const botonDer = document.querySelector("#boton-derecho");

    slider.insertAdjacentElement('afterbegin', ultimoSlider);

    function Siguiente() {
        let primerSlider = document.querySelectorAll(".seccion-slider")[0];
        slider.style.marginLeft = "-200%";
        slider.style.transition = "all 0.4s";
        setTimeout(function (){
            slider.style.transition="none";
            slider.insertAdjacentElement('beforeend', primerSlider);
            slider.style.marginLeft = "-100%";
        }, 500);
    }

    function Anterior() {
        let seccionSlider = document.querySelectorAll(".seccion-slider");
        let ultimoSlider = seccionSlider[seccionSlider.length -1];
        slider.style.marginLeft = "0";
        slider.style.transition = "all 0.4s";
        setTimeout(function (){
            slider.style.transition="none";
            slider.insertAdjacentElement('afterbegin', ultimoSlider);
            slider.style.marginLeft = "-100%";
        }, 500);
    }

    botonDer.addEventListener('click', function(){
        Siguiente();
        pararAuto(); //Paramos el intervalo automático
        auto = setInterval(Siguiente, 2500); ///Volvemos a iniciar el intervalo automático
    });

    botonIzq.addEventListener('click', function(){
        Anterior();
        pararAuto(); //Paramos el intervalo automático
        auto = setInterval(Siguiente, 2500); ///Volvemos a iniciar el intervalo automático
    });

    // Slider automático
    var auto = setInterval(Siguiente, 2500);

    //Parar ejecución automático cuando se hace click en siguiente
    function pararAuto() {
        clearInterval(auto);
    }
});