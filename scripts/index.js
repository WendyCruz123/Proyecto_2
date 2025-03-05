import Curso from "./classes/Curso.js"
import Profesor from "./classes/profesor.js"
import Alumno from "./classes/Alumno.js"

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

//funcion mostrar profesor
const lista = document.getElementById("formProfesor"); // Contenedor donde se insertarán los profesores
function mostrarProfe(profesor) {
    const hijo = document.createElement("li"); // Crear un elemento de lista
    hijo.classList.add("card"); // Añadir clase "card" para estilos

    // Insertar contenido en la lista
    hijo.innerHTML = `
        <div class="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 class="t5 s-mb-2 s-center">${profesor.getNombre()}, ${profesor.getApellido()}, ${profesor.getCorreo()}, ${profesor.getActivo()}</h3>
            <div class="s-center">
              <span class="small">Clases: ${profesor.getCursosDictados()}, ${profesor.getCalificacion()}</span>
            </div>
        </div>
    `

    lista.appendChild(hijo); // Agregar a la lista
}
//Funcion mostrar estudiante 
const listEst = document.getElementById("formAlumno"); // Contenedor donde se insertarán los profesores
function mostrarAlum(alumno) {
    const hijo = document.createElement("li"); // Crear un elemento de lista
    hijo.classList.add("card"); // Añadir clase "card" para estilos

    // Insertar contenido en la lista
    hijo.innerHTML = `
        <div class="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 class="t5 s-mb-2 s-center">${alumno.getNombres()}, ${alumno.getApellidos()}, ${alumno.getCorreo()}, ${alumno.getActivo()}</h3>
            <div class="s-center">
              <span class="small">Clases: ${alumno.getCursosTomados()} </span>
            </div>
        </div>
    `
    listEst.appendChild(hijo); // Agregar a la lista
}
const formulario = document.getElementById("formCursos")

formulario.addEventListener("submit", e => {
    e.preventDefault()
    const target = e.target //en target esta guardado todos los elementos
    const curso = new Curso(target.nombreCurso.value, target.posterCurso.value, target.clasesCurso.value)//almacenamos datos a la variable curso para mostrara
    mostrarCurso(curso) //mostramos
    formulario.reset(); //limpiamos el formulario
})

//Crear un profesor
const forprof = document.getElementById("formProfesor")

forprof.addEventListener("submit", P => {
    P.preventDefault()
    const target = P.target //en target esta guardado todos los elementos
    const profesor = new Profesor(target.nombreProfesor.value, target.apellidoProfesor.value, target.correoProfesor.value, target.activoProfesor.value, target.cursosdicProfesor.value, target.calificacionProfesor.value)//almacenamos datos a la variable curso para mostrara
    mostrarProfe(profesor) //mostramos
    forprof.reset();//
})
//Crear un Alumno
const foralum= document.getElementById("formAlumno")

foralum.addEventListener("submit", P => {
    P.preventDefault()
    const target = P.target //en target esta guardado todos los elementos
    const alumno = new Alumno(target.nombreAlumno.value, target.apellidoAlumno.value, target.correoAlumno.value, target.activoAlumno.value, target.cursosTomados.value)//almacenamos datos a la variable curso para mostrara
    mostrarAlum(alumno) //mostramos
    foralum.reset();
})

//console.log(Curso.getInscrit)
