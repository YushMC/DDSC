const preferedColorScheme =  'light';
const btnSwitch = document.querySelector('#swicth-mode');

const setTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
}

btnSwitch.addEventListener('click', ()  => {
    let switchToTheme = localStorage.getItem('theme') === 'dark' ? 'light' : 'dark';
    setTheme(switchToTheme);
});

setTheme(localStorage.getItem('theme') || preferedColorScheme);

const btnMonika = document.querySelector('#color-verde');
const btnNatsuki = document.querySelector('#color-rosa');
const btnSayori = document.querySelector('#color-azul');
const btnYuri = document.querySelector('#color-morado');


const setColor = (colores) => {
    document.documentElement.setAttribute('data-colores', colores);
    localStorage.setItem('colores', colores);
    indicadores();
}


btnMonika.addEventListener('click', ()  => {
    setColor('verde');
});

btnNatsuki.addEventListener('click', ()  => {
    setColor('rosa');
});

btnSayori.addEventListener('click', ()  => {
    setColor('azul');
});

btnYuri.addEventListener('click', ()  => {
    setColor('morado');
});

setColor(localStorage.getItem('colores'));

function indicadores(){
    if(localStorage.getItem('colores')=="verde"){
        btnMonika.style.background = "rgba( 33, 247, 172 ,0.5)"
        btnMonika.style.borderRadius = "15px"
        btnSayori.style.background = "none";
        btnYuri.style.background = "none";
        btnNatsuki.style.background = "none";
        

    }else  if(localStorage.getItem('colores')=="rosa"){
        btnNatsuki.style.background = "#e726ee"
        btnNatsuki.style.borderRadius = "15px"
        btnSayori.style.background = "none";
        btnYuri.style.background = "none";
        btnMonika.style.background = "none";
        

    }else if(localStorage.getItem('colores')=="azul"){
        btnSayori.style.background = "rgba( 33, 202, 247 ,0.5)"
        btnSayori.style.borderRadius = "15px"
         
        

    }else if(localStorage.getItem('colores')=="morado"){
        btnYuri.style.background = "rgba( 114, 33, 247 ,0.5)"
        btnYuri.style.borderRadius = "15px"
        btnSayori.style.background = "none";
        btnMonika.style.background = "none";
        
        btnNatsuki.style.background = "none";
    }
    document.getElementById('creadorName').innerHTML = localStorage.getItem('codigo');
}


const setCodigo = (name) => {
    localStorage.setItem('codigo', name);
    indicadores();
}
setCodigo(localStorage.getItem('codigo'));


function canje(){
    var datos = document.getElementById('codigos').value; 
   if (datos=='AngelG4el'){
    setColor(datos);
    colorSeleccionado("AngelG4el");
    setCodigo('AngelG4el');
    document.getElementById('creadorName').innerHTML = localStorage.getItem('codigo');
    document.getElementById("codigos").value = "";
    
   }else if(datos=='Just Yuri' || datos=='JUST YURI'){
    setColor("Slender");
    colorSeleccionado("Slender Dios");
    btnYuri.style.background = "none";
    btnNatsuki.style.background = "none";
    btnMonika.style.background = "none";
    btnSayori.style.background = "none";
    
    setCodigo('Slender Dios');
    document.getElementById("codigos").value = "";
    document.getElementById('creadorName').innerHTML = localStorage.getItem('codigo');
    
   }else{
    ErrorAlerta("Sin datos");
   }
   

}


function descanjear(){
    let h1 = document.querySelector('h1');
    setColor('rosa');
    h1.classList.remove('glitch');
    setCodigo('Sin Datos');
    document.getElementById("codigos").value = "";
    document.getElementById('creadorName').innerHTML = localStorage.getItem('codigo');
    delete datos;
    document.reload(true);
}