/* 

   contador := 0
   enquanto contador < limite faca
       escreva("Informe o nome da pessoa: ")
       leia(nome)
       escreva("Informe a idade da pessoa: ")
       leia(idade)
       se idade > 18 entao
           escreval(nome, " é maior de idade")
       senao
            escreval(nome, " é menor de idade")
       fimse
       contador := contador + 1
   fimenquanto
Fimalgoritmo

*/
function acaoBotao() {
    var nome, idade, limite, contador
    limite = prompt("Informe a quantidade de vezes que sera verificado a idade")
    contador = 0
    while (contador < limite) {
        nome = prompt("Informe o nome da pessoal")
        idade = prompt("Informe a idade da pessoa")
        if (idade > 18) {
            document.getElementById("paragrafo").innerText = (nome + " é maior de idade")
        } else {
            document.getElementById("paragrafo").innerText = (nome + " é menor de idade")
            
        }
        contador++
    }    
}
