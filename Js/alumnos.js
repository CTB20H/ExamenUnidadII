// Declaración de objetos
const tabla = document.getElementById("tabla");
const body = document.getElementById("tbody");
const btnMostrar = document.getElementById("Mostrar");
const btnLimpiar = document.getElementById("Limpiar");
const inpPromedio = document.getElementById("Promedio");
const inpAprobados = document.getElementById("Aprobados");
const inpReprobados = document.getElementById("Reprobados");

    
            

// Funciones
function realizarLista(){
    fetch("calificaciones.json")
    .then (respuesta=>respuesta.json())
    .then(datos=>{

        // Declaración de variables para los datos de los Inputs
        let SumaCali = 0;
            let totalA = datos.length;
            let aprobados = 0;
            let reprobados = 0;

        datos.forEach(alumno => {

            // Calculo para el promedio, aprobado y reprobados
            SumaCali += alumno.calificacion;
            if (alumno.cali >= 7.00) {
                aprobados++;
            } else {
                reprobados++;
            }

    let tabla = document.getElementById("tabla")
    // Declaración de filas y celdas de la tabla
    const fila = document.createElement("tr");
    
    const Cmatri = document.createElement("td");
    Cmatri.textContent = alumno.matricula;
    fila.appendChild(Cmatri);

    const Cnombre = document.createElement("td");
    Cnombre.textContent = alumno.nombre;
    fila.appendChild(Cnombre);

    const Ccali = document.createElement("td");
    Ccali.textContent = alumno.calificacion;
    fila.appendChild(Ccali);

    // Se agrega la fila al cuerpo de la tabla
    body.appendChild(fila);
        });
    })
    .catch(error => console.log("Se ha detectado un error:" + console.error))
}

function limpiarTabla(){
    //Limpiado de datos de la tabla 
    body.innerHTML = '';
}

// Eventos
btnMostrar.addEventListener("click", realizarLista)
btnLimpiar.addEventListener("click", limpiarTabla)
