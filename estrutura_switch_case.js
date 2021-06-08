function acaoBotao() {
    var num1, num2, resultado, operacao
    num1 = prompt("Informe o primeiro número:")
    operacao = prompt ("Informe a operação matemática:")
    num2 = prompt("Informe o segundo número:")
    
    switch (operacao) {
        case "+":
            resultado = (parseInt(num1) + parseInt(num2)) 
            break;
        case "-":
            resultado = (parseInt(num1) - parseInt(num2)) 
        break;
        case "*":
            resultado = (parseInt(num1) * parseInt(num2)) 
            break;
        case "/":
        resultado = (parseInt(num1) / parseInt(num2)) 
        break;
    }
    document.getElementById("paragrafo").innerText = resultado
    
}
