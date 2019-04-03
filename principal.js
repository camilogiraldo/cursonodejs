let cursos = [{
		id: 1,
		curso: 'Angular',
		tiempo: 40,
		precio: 100000
	},
	{
		id: 2,
		curso: 'Node js',
		tiempo: 30,
		precio: 50000
	},
	{
		id: 3,
		curso: 'Git hub',
		tiempo: 20,
		precio: 200000
	}
];

let opciones = {
	codigo: {
		demand: true,
		alias: 'i'
	},
	nombre: {
		demand: true,
		alias: 'n'
	},
	cedula: {
		demand: true,
		alias: 'c'
	},
}

const express = require('express')
const app = express()
const fs = require('fs');
const argv = require('yargs').command('Registrar', 'Realizar registro, escriba uno de los siguientes códigos: 1,2,3', opciones).argv

if (cursos[argv.codigo]) {
	console.log('Curso: ' + cursos[argv.codigo].curso + ', Duracion: ' + cursos[argv.codigo].tiempo + ', Horas Precio: ' + cursos[argv.codigo].precio);
	console.log('Abra el navegador en la url localhost:3000');

	var texto = '<h1>CURSO MATRICULADO</h1> <br> El estudiante: ' + argv.nombre + '<br>' + 'Con numero de identificacion: ' + argv.cedula + '<br>' + 'Se ha matriculado en el curso: ' + cursos[argv.codigo].curso +
		'<br>' + 'Con una duracion de: ' + cursos[argv.codigo].tiempo + ' horas<br>' +
		'El cual tiene un valor de: ' + cursos[argv.codigo].precio + ' pesos<br>';
} else {
	console.log('El codigo que ingresó no es valido');
	console.log('Los cursos actuales son:');
	cursos.forEach(curso => {
		console.log('Codigo: ' + curso.id + ', Curso: ' + curso.curso + ', precio:' + curso.precio + ', Duracion: ' + curso.tiempo);

	});
}

app.get('/', function (req, res) {
	res.send(texto)
})

app.listen(3000)

