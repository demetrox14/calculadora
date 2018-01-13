function suma() { 
    var numero1 = document.getElementById('num1').value;
    var numero2 = document.getElementById('num2').value;
    var resultado
    resultado = parseFloat(numero1) + parseFloat(numero2)
    document.getElementById('res').value = resultado
    document.getElementById('num1').value = resultado
    document.getElementById('num2').value = ""
}

function resta() { 
    var numero1 = document.getElementById('num1').value;
    var numero2 = document.getElementById('num2').value;
    var resultado
    resultado = parseFloat(numero1) - parseFloat(numero2)
    document.getElementById('res').value = resultado
    document.getElementById('num1').value = resultado
    document.getElementById('num2').value = ""
}

function multiplicacion() { 
    var numero1 = document.getElementById('num1').value;
    var numero2 = document.getElementById('num2').value;
    var resultado
    resultado = parseFloat(numero1) * parseFloat(numero2)
    document.getElementById('res').value = resultado
    document.getElementById('num1').value = resultado
    document.getElementById('num2').value = ""
}

function division() { 
    var numero1 = document.getElementById('num1').value;
    var numero2 = document.getElementById('num2').value;
    var resultado
    resultado = parseFloat(numero1) / parseFloat(numero2)
    document.getElementById('res').value = resultado
    document.getElementById('num1').value = resultado
    document.getElementById('num2').value = ""
}

 function raiz() { 
     var numero1 = document.getElementById('num1').value;
     var raiz 

     raiz = Math.sqrt(numero1)

     document.getElementById('res').value = raiz
     document.getElementById('num1').value = ""
}

function potencia(){
    var numero1 = document.getElementById('num1').value;
    var resultado

    alert('Proximamente estarán disponibles las potencias, esten atentos')
}

function borrar_num1(){
    document.getElementById('num1').value = ""


}
function borrar_num2(){
    document.getElementById('num2').value = ""
}

function borrar_todo(){
    document.getElementById('num1').value = ""
    document.getElementById('num2').value = ""
    document.getElementById('res').value = ""
}

    window.onload = function(){

        document.getElementById('suma').onclick = suma;
        document.getElementById('resta').onclick = resta;
        document.getElementById('multiplicacion').onclick = multiplicacion;
        document.getElementById('division').onclick = division;
        document.getElementById('raiz').onclick = raiz;
        document.getElementById('potencia').onclick = potencia;
        document.getElementById('b_num1').onclick = borrar_num1;
        document.getElementById('b_num2').onclick = borrar_num2;
        document.getElementById('b_todo').onclick = borrar_todo;
    }