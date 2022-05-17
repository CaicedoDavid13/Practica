	//EJERCICIO 1
function unoA(){
	let array=[];
	for (let i= 0; i < 10; i++) {
		array[i]= parseInt(Math.random()*(100-0)+0);//números aleatorios entre 0 y 100
	}
	document.write('Array inicial: ' + array + '<br>');
	do {
		posicion = parseInt(prompt('Introduce una posición del 1 al 10'));
	}while(posicion < 1 || posicion > 10);
	posicion -= 1;
	array.splice(posicion, 1);
	eliminado = array[posicion];
	document.write('Array final: ' + array + '<br>');
	document.write('Número eliminado: ' + eliminado);
}

function unoB(){
	let array=[];
	for (let i = 0; i < 10; i++) {
		array[i]= parseInt(Math.random()*(100-0)+0);//números aleatorios entre 0 y 100
	}
	document.write('Array inicial: ' + array + '<br>');
	do {
		posicion = parseInt(prompt('Introduce una posición del 1 al 10'));
	}while(posicion < 1 || posicion > 10);
	posicion -= 1;
	eliminado = array[posicion];
	for (let j = posicion; j < 10; j++){
		array[j] = array[j + 1];
	}
	document.write('Array final: ' + array + '<br>');
	document.write('Número eliminado: ' + eliminado);
}
	//EJERCICIO 2
function dos(){
	let array=[];

	for (let i = 0; i < 10; i++) {	//Empieza desde la primera posición
		if(i%2 == 0){				//Se intercala con 1 espaco
			do{						//Solo admite numeros random impares
				array[i] = parseInt(Math.random()*(25-14)+14);
			}while(array[i]%2 == 0);
		}
	}
	for (let j = 1; j < 10; j++) {
		if(j%2 != 0){
			do{
				array[j] = parseInt(Math.random()*(25-14)+14);
			}while(array[j]%2 != 0);
		}
	}
	document.write(array);
}
	//EJERCICIO 3
function tres(){
	let array1=[]; let array2=[]; let arrayFinal=[]; let count = 0;
	for (let i = 0; i < 10; i++) {
		array1[i] = parseInt(Math.random()*(10-0)+0);//números aleatorios entre 0 y 10
		array2[i] = parseInt(Math.random()*(10-0)+0);//números aleatorios entre 0 y 10
	}
	document.write('Array 1: ' + array1 + '<br>');
	document.write('Array 2: ' + array2 + '<br>');

	arrayFinal = array1.concat(array2);
	let dar = new Set(arrayFinal);
	let resultado = [...dar];

	document.write('Array final: ' + resultado);
}