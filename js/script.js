const header = document.querySelector("header");
window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 100);
});


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
