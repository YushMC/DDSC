window.addEventListener("scroll",function(){
    const header = document.querySelector("header");
    header.classList.toggle("abajo_scroll",window.scrollY>0);
});

const scrollAnimado = (elemento) => {
    const destino = document.querySelector(elemento);
    destino.scrollIntoView({
        behavior: 'smooth'
    });
}

