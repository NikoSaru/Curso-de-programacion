var lista = [12, 41, 23, 56, 67, 89];

var numMayor = 0;

document.write('Los numeros son:' + lista );

for(var i = 0; i < lista.length; i++){;

if(numMayor < lista[i]){
    numMayor = lista[i];
}
}
document.write('<br>');
document.write("El numero mayor es: " + numMayor)
