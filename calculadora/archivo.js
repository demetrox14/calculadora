function valores() { 
    num1 = document.getElementById('num1')
    num2 = document.getElementById('num2')
    res = document.getElementById('res')

    return [parseFloat(num1.value) , parseFloat(num2.value)]
}

function escribir_resultado(resultado){
    res.value = resultado.toFixed(3)
    num1.value = res.value
    num2.value = ""
}

function suma(){
    val = valores()
    resultado = val[0] + val[1]
    escribir_resultado(resultado)
}

function resta() { 
    val = valores()
    resultado = val[0] - val[1]
    escribir_resultado(resultado)
}

function multiplicacion() { 
    val = valores()
    resultado = val[0] * val[1]
    escribir_resultado(resultado)

}

function division() { 
    val = valores()
    resultado = val[0] / val[1]
    escribir_resultado(resultado)
}

 function raiz() {
     val = valores() 
     if(num1.value !== ""){
         raiz = Math.sqrt(val[0])
        }else{
            raiz = Math.sqrt[1]
        }
        escribir_resultado(raiz)
}

function potencia(){
    var numero1 = document.getElementById('num1').value
    var numero2 = document.getElementById('num2').value
    var resultado = numero1
    var serie = 1

    resultado = 1
    while(serie<numero2){
        resultado = resultado * numero1
        serie = serie + 1
    }

    document.getElementById('res').value = resultado
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

        document.getElementById('suma').onclick = suma
        document.getElementById('resta').onclick = resta
        document.getElementById('multiplicacion').onclick = multiplicacion
        document.getElementById('division').onclick = division
        document.getElementById('raiz').onclick = raiz
        document.getElementById('potencia').onclick = potencia
        document.getElementById('b_num1').onclick = borrar_num1
        document.getElementById('b_num2').onclick = borrar_num2
        document.getElementById('b_todo').onclick = borrar_todo
    }