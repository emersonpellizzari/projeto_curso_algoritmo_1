function acaoBotao() {
    var sairLoop, valor1, valor2
    do {
        valor1 = prompt("Digite o primeiro valor:")
        valor2 = prompt("Digite o segundo valor:")
        document.getElementById("paragrafo").innerText = "Resultado é: " + (parseInt (valor1) + parseInt (valor2) )
        sairLoop = prompt("Deseja Sair? S/N")
    } while (sairLoop == "N");
    
}