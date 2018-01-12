function suma() { 
    var numero1 = document.getElementById('num1').value;
    var numero2 = document.getElementById('num2').value;
    var resultado
    resultado = parseFloat(numero1) + parseFloat(numero2)
    document.getElementById('res').value = resultado
}

function resta() { 
    var numero1 = document.getElementById('num1').value;
    var numero2 = document.getElementById('num2').value;
    var resultado
    resultado = parseFloat(numero1) - parseFloat(numero2)
    document.getElementById('res').value = resultado
}

function multiplicacion() { 
    var numero1 = document.getElementById('num1').value;
    var numero2 = document.getElementById('num2').value;
    var resultado
    resultado = parseFloat(numero1) * parseFloat(numero2)
    document.getElementById('res').value = resultado
}

function division() { 
    var numero1 = document.getElementById('num1').value;
    var numero2 = document.getElementById('num2').value;
    var resultado
    resultado = parseFloat(numero1) / parseFloat(numero2)
    document.getElementById('res').value = resultado
}

 function raiz() { 
     var numero1 = document.getElementById('num1').value;
     var raiz 

     raiz = Math.sqrt(numero1)

     document.getElementById('res').value = raiz
}

function potencia(){
    var numero1 = document.getElementById('num1').value;
    var resultado 
    resultado = parseFloat(numero1) * parseFloat(numero1)

    document.getElementById('res').value = resultado
}

    window.onload = function(){

        document.getElementById('suma').onclick = suma;
        document.getElementById('resta').onclick = resta;
        document.getElementById('multiplicacion').onclick = multiplicacion;
        document.getElementById('division').onclick = division;
        document.getElementById('raiz').onclick = raiz;
        document.getElementById('potencia').onclick = potencia;
    }