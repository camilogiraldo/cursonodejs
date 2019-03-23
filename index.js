// const estudiante1 = require ('./calculos');

// console.log(estudiante1.estudiante);
// console.log('El promedio del estudiante es: ' + estudiante1.obtenerPromedio(estudiante1.estudiante.notas.matematicas, estudiante1.estudiante.notas.ingles,  estudiante1.estudiante.notas.programacion))

//DESTRUCTURACIÓN

const {estudiante, obtenerPromedio} = require ('./calculos');

//filesystem
const fs = require('fs');

console.log('El nombre del estudiante es: ' + estudiante.nombre);
console.log('El promedio del estudiante es: ' + obtenerPromedio(estudiante.notas.matematicas, estudiante.notas.ingles, estudiante.notas.programacion));


//Destructuración más profunda

let {nombre, edad : anos, notas: {matematicas, ingles, programacion}} = estudiante;

console.log('El nombre del estudiante es: '+ nombre);
console.log('El promedio del estudiante es: ' + obtenerPromedio(matematicas, ingles, programacion));
console.log('la edad del estudiante es ' + anos);

let crearArchivo = (estudiante) =>{
    texto = 'el nombre del estudiante es: '+ nombre + 
    'ha obtenido un promedio de' + obtenerPromedio(matematicas, ingles, programacion);

//alimentamos el archivo fylesistem
    fs.writeFile('promedio.txt', texto, (err) => {
        if(err) throw (err);
        console.log('Se ha creado el archivo')
    });
}

crearArchivo(estudiante);