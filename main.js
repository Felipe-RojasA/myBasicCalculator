function calcula(operacion){
    try{
        var operando1 = document.calc.operando1.value
        var operando2 = document.calc.operando2.value 
        var result = eval(operando1 + operacion + operando2)
        document.calc.resultado.value = result
    }
    catch(e){
        alert("You typed an invalid character")
    }
}