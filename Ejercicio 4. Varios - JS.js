function uno(){
	let suma = 0;
	valor1 = parseInt(prompt(''));
	valor2 = parseInt(prompt(''));
	document.write(valor1 + valor2);
}

function dos(){
	valor1 = parseInt(prompt(''));
	valor2 = parseInt(prompt(''));
	if (valor1 > valor2)
		document.write(valor1);
	else if (valor1 < valor2)
		document.write(valor2);
	else
		alert('Son iguales');
}

function tres(){
	let mitad = 0; let cuarto = 0; let octavo = 0;
	valor = parseInt(prompt(''));
	mitad = valor/2; cuarto = valor/4; octavo = valor/8;
	document.write(mitad + '<br>' + cuarto + '<br>' + octavo);
}

function cuatro(){
	valor = parseInt(prompt(''));
	if(valor%2 == 0)
		alert('Par');
	else
		alert('Impar');
}

function cinco(){
	valor = parseInt(prompt(''));
	count = valor;
	for (let i=0; i < valor; i++) {
		document.write(count + '<br>');
		count--;
	}
}

function seisA(){
	valor1 = parseInt(prompt(''));
	valor2 = parseInt(prompt(''));
	valor3 = parseInt(prompt(''));
	if(valor1>valor3 && valor2>valor3)
		alert(valor3);
	else if(valor1>valor2 && valor3>valor2)
		alert(valor2);
	else if(valor2>valor1 && valor3>valor1)
		alert(valor1);
	else
		alert('Sin menor definido')
}

function seisB(){
	valor1 = parseInt(prompt(''));
	valor2 = parseInt(prompt(''));
	valor3 = parseInt(prompt(''));
	if(valor1<valor3 && valor2<valor3)
		alert(valor3);
	else if(valor1<valor2 && valor3<valor2)
		alert(valor2);
	else if(valor2<valor1 && valor3<valor1)
		alert(valor1);
	else
		alert('Sin mayor definido')
}

function siete(){
	valor1 = parseInt(prompt(''));
	valor2 = parseInt(prompt(''));
	valor3 = parseInt(prompt(''));
	if((valor1>valor3 && valor2<valor3) || (valor1<valor3 && valor2>valor3))
		alert(valor3);
	else if((valor1>valor2 && valor3<valor2) || (valor1<valor2 && valor3>valor2))
		alert(valor2);
	else if((valor2>valor1 && valor3<valor1) || (valor2<valor1 && valor3>valor1))
		alert(valor1);
	else
		alert('Sin mediano definido')
}

function ocho(){
	let array = new Array(4);
	for (let i=0; i < array.length; i++) {
		array[i] = parseInt(prompt(''));
	}
	var orden = array.sort((a,b)=>{
	    return a-b;
	 });
	document.write(orden);
}

function nueve(){
	let array = []; let i = 0; let cocientes = 0; let potencias = 0; let productos = 0;
	let total = 0; let aritmética = 0; let armónica = 0; let cuadrática = 0; let geométrica = 0;
	array[i] = parseInt(prompt(''));
	productos = array[i];
	if(array[0] >= 0){
		do{
			array[i] = parseInt(prompt(''));
			if (array[i] >= 0){
				total += array[i];
				cocientes += 1/array[i];
				potencias += Math.pow(array[i], 2);
				productos *= array[i];
			}
			i++;
		}while(array[i-1] >= 0);
	}
	aritmética = total/i;
	armónica = i/cocientes;
	cuadrática = potencias/i;
	geométrica = Math.pow(productos, 1/i);
	document.write('Media aritmética: ' + aritmética + '<br>');
	document.write('Media armónica: ' + armónica + '<br>');
	document.write('Media cuadrática: ' + cuadrática + '<br>');
	document.write('Media geométrica: ' + geométrica);
}

function once(){
	do{
		altura = parseFloat(prompt('Altura (m)'));
		peso = parseFloat(prompt('Peso (kg)'));
	}while(altura < 0 || peso < 0);
	
	imc = peso/(Math.pow(altura,2));

	if (imc < 18.5)
		alert('Peso bajo');
	else if (imc >= 25)
		alert('Sobrepeso');
	else
		alert('Peso medio');
}

function doce(){
	valor = parseInt(prompt('')); let total = 0;
	for(let i=1; i <= valor; i++){
		total += i;
	}
	alert(total);
}

function trece(){
	valor1 = parseInt(prompt(''));
	valor2 = parseInt(prompt(''));
	let total = 0; menor = valor1;

	if(valor1 > valor2){
		dif = valor1 - valor2;
		menor = valor2;
	}
	else if (valor2 > valor1){
		dif = valor2 - valor1;
		menor = valor1;
	}
	else dif = 0;

	for(let i=0; i <= dif; i++){
		total += menor;
		menor++;
		if (dif == 0)
			total = valor1 * 2;
	}
	alert(total);
}

function catorce(){
	hInicial = parseInt(prompt('Indique una hora entre 0 y 11'));
	hPasadas = parseInt(prompt('Indique el número de horas que quiere que pasen'));
	suma = hInicial + hPasadas; dia = 0;
	hFinal = 0;

	while(suma > 23){
		suma -= 24;
		dia++;
	}

	alert('Ha(n) pasado ' + dia + ' dia(s) y son la(s) ' + suma + 'h');
}

function quince(){
	valor = parseInt(prompt('')); let total = 0;

	for(let i=1; total < 100; i++){
		total = valor * i;
		document.write(valor + ' x ' + i + ' = ' + total + '<br>');
	}
}

function dieciseis(){
	valor = parseInt(prompt('')); let digitos = 0;
	do{
		valor /= 10;
		digitos++;
	}while(valor > 1);
	alert(digitos);
}

function diecisiete(){
	numero = parseInt(prompt(''));
	let invertido = 0;
    while (numero != 0) {
        invertido = 10 * invertido + numero % 10
        numero = (Math.floor(numero / 10))
    }
    document.write(invertido);
}

function dieciocho(){
	do{
	importe = parseInt(prompt('Importe'));		
	}while(importe < 0);
	importe += importe*0.21;
	alert('El importe con IVA es de ' + importe + '€')
}