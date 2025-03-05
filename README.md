#SEGUNDO PROYECTO
pequeña aplicaion que permite registrar cursos y usuarios para dichos cursos.
----------------------------------------------------------------
INDEX.JS
---------
import Curso from "./classes/Curso.js"
//instanciando objetos de la clase curso
const html = new Curso("HTML desde cero", "https://edteam-media.s3.amazonaws.com/courses/big/c32aad4d-6dd6-4ae5-aa86-8254069988df.png",10)
const css = new Curso("CSS desde cero", "https://edteam-media.s3.amazonaws.com/courses/big/656d4405-191d-40c1-a168-2723dfeacc45.png",9)
const elem =document.getElementById("cursos")
//imprime un curso en el DOM
//Recibe un objeto de tipo curso
function mostrarCurso(curso) {
    const hijo = document.createElement("div")
    hijo.classList.add("card")//añarde card a div de index.html
   //pone estilos 
    hijo.innerHTML= `
        <div class="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
          <img src="${curso.getPoster()}" alt="${curso.getNombre()}" />
        </div>
        <div class="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 class="t5 s-mb-2 s-center">${curso.getNombre()}</h3> 
            <div class="s-center">
              <span class="small">Clases: ${curso.getClases()}</span>
            </div>
        </div>
        `
    elem.appendChild(hijo)
}
//llamadas a la funcion mostrar curso
mostrarCurso(html)
mostrarCurso(css)
---------------------------------------------------------------------------------


centrea el texto
<div class="s-center">
    <span class="small">Clases: ${curso.getClases()}</span>
</div>


MODIFICA LOS VORDES DEL POSTER
<div class="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
    <img src="${curso.getPoster()}" alt="${curso.getNombre()}" />
</div>

INSERTA EL TEXTO DENTRO DE UN CONTAINER
<div class="card__data s-border s-radius-br s-radius-bl s-pxy-2">
    <h3 class="t5 s-mb-2 s-center">${curso.getNombre()}</h3> 
    <div class="s-center">
        <span class="small">Clases: ${curso.getClases()}</span>
    </div>
</div>