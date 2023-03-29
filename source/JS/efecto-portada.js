window.addEventListener("scroll",function(){
    const header = document.querySelector("header");
    header.classList.toggle("abajo_scroll",window.scrollY>0);
    const indicador = document.getElementById('icono_scroll');

    if ((document.body.getBoundingClientRect()).top > scrollPos)
        indicador.src="../assets/gui/icono_abajo.png";
        
    else
        indicador.src="../assets/gui/icono_arriba.png";
        scrollPos = (document.body.getBoundingClientRect()).top;
});
var scrollPos = 0;
const scrollAnimado = (elemento) => {
    const destino = document.querySelector(elemento);
    destino.scrollIntoView({
        behavior: 'smooth'
    });
}

