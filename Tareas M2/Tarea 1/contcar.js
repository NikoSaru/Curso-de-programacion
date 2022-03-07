function contador(){
    var total = 20;
    setTimeout(function(){
        var valor = document.getElementById('contador');
        var respuesta = document.getElementById('resultado');
        var cantidad = valor.value.length;
        document.getElementById('resultado').innerHTML = cantidad + " caracteres que quedan " + (total - cantidad);
        if(cantidad > 15){
            respuesta.style.color  = "red";
        }
        else{
            respuesta.style.color = "black";
        }
    })

}