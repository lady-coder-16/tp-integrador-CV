//------------------------------------------------------------------------------------
//Se adhiere el header mientras se scrollea por la pagina
const header = document.querySelector("header");
window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 100);
});

//------------------------------------------------------------------------------------
/* Cada vez que se hace click en uno de los checkbox de Habilidad,
se vuelven a tildar todos.*/

const bloque_skills = document.getElementById("listado-habilidades");
console.log(bloque_skills);
bloque_skills.addEventListener("click",tildarTodosLosCheckbox);

function tildarTodosLosCheckbox(){
    for(var i=1; i<12; i++){
        palabraUsandoContenidoVariable="skill_"+i;

        var skill= document.getElementById(palabraUsandoContenidoVariable);
        console.log(skill);

        skill.checked=true;
    }
}
//------------------------------------------------------------------------------------
/*----------- En resoluciones mas pequeñas, aparece el menu desplegable --------------*/
let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick=()=>{
    menu.classList.toggle("bx-x");
    navlist.classList.toggle("open");
}

window.onscroll=()=>{
    menu.classList.remove("bx-x");
    navlist.classList.remove("open");
}

//-------------------------------------------------------------------------------------
/*--------------Script de Modo Oscuro--------------------------------------------------*/

const botonCambioTema = document.getElementById("boton-modo-noche");
const modoOscuro = "dark-theme";
const iconoModoClaro = "bx-sun";

console.log(botonCambioTema);
console.log(document.body.classList.contains(modoOscuro)? "dark":"light");
console.log(botonCambioTema.classList.contains(iconoModoClaro)? "bx-moon":"bx-sun");
/*
const cambioTemaActivado = document.getElementById("boton-modo-noche");
console.log(cambioTemaActivado);
cambioTemaActivado.addEventListener("click",cambiarModo());
*/

//Comprueba en el navegador si el usuario ya habia elegido un Modo para visualizar
const temaSeleccionado = localStorage.getItem("tema-seleccionado");
const iconoSeleccionado = localStorage.getItem("icono-seleccionado");

//Nos devuelve el tema actual
const getTemaActual=()=> document.body.classList.contains(modoOscuro)? "dark":"light";
const getIconoActual=()=> botonCambioTema.classList.contains(iconoModoClaro)? "bx-moon":"bx-sun";

// Se hace una validacion si se ha elegido un tema
if(temaSeleccionado){
    document.body.classList[temaSeleccionado === "dark" ? "add" : "remove"] (modoOscuro);
    botonCambioTema.classList[iconoSeleccionado === "bx-moon" ? "add" : "remove"] (iconoModoClaro);
}

//El tema es activado o desactivado a traves del "boton-modo-noche"
botonCambioTema.addEventListener("click",()=>{
    document.body.classList.toggle(modoOscuro)
    botonCambioTema.classList.toggle(iconoModoClaro);

    /*Se guardan las variables en el Almacenamiento Local,
    para que la proxima vez que se recargue la pagina,
    siga estando el mismo tema que estaba presente antes de cargar.*/
    localStorage.setItem("tema-seleccionado", getTemaActual());
    localStorage.setItem("icono-seleccionado", getIconoActual());
})
