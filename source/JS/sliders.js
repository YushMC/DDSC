//llamamos al div con los sliders
const slider = document.querySelector("#slider");
//llamamos a todos los slider section (imagenes)
let sliderSection = document.querySelectorAll(".slider__section");
//variable para saber cual es la ultima imagen
let sliderSectionLast =sliderSection[sliderSection.length-1];

//creamos las variables para las funciones
const btnLeft = document.querySelector("#btn_left_slide");
const btnRight = document.querySelector("#btn_right_slide");

//Inicia la funcion

//para que no haya error se coloca al inicio del todo la ultima imagen
slider.insertAdjacentElement('afterbegin', sliderSectionLast);

//funcion para avanzar
function Next(){
    //tomar el primer elemento de todos los que se encuentren.
    let sliderSectionFirts = document.querySelectorAll(".slider__section")[0];
    //movemos la imagen con
    slider.style.marginLeft="-200%";
    //ponemos una transision
    slider.style.transition="all 3s ease-in-out";
    //hacer un bucle pero antes esperar a que lo anterior termine
    setTimeout(function(){
        //quitamos la transicion para que no se vuelva a mostrar
        slider.style.transition="none";
        //pasamos el slider anterior para la derecha
        slider.insertAdjacentElement('beforeend',sliderSectionFirts);
        //colocamos en el enfasis
        slider.style.marginLeft ="-100%";
    },1000);

}

//creamos el evento para que realize lo anterior
btnRight.addEventListener('click',function(){
    Next();
});

//funcion para avanzar izquierda
function Back(){
    //llamamos a todos los slider section (imagenes)
    let sliderSection = document.querySelectorAll(".slider__section");
    //variable para saber cual es la ultima imagen
    let sliderSectionLast =sliderSection[sliderSection.length-1];
    //movemos la imagen con
    slider.style.marginLeft="0%";
    //ponemos una transision
    slider.style.transition="all .5s ease-in-out";
    //hacer un bucle pero antes esperar a que lo anterior termine
    setTimeout(function(){
        //quitamos la transicion para que no se vuelva a mostrar
        slider.style.transition="none";
        //pasamos el slider anterior para la derecha
        slider.insertAdjacentElement('afterbegin',sliderSectionLast);
        //colocamos en el enfasis
        slider.style.marginLeft ="-100%";
    },500);

}

//creamos el evento para que realize lo anterior
btnLeft.addEventListener('click',function(){
    Back();
});

setInterval(function(){
    Next();
},9000);
