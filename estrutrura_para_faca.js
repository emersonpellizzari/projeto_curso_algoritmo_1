/*Var
// Seção de Declarações das variáveis 
   numFatorial, resFatorial, aux: inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   escreval("Informe o número que deseja saber o fatorial")
   leia(numFatorial)
   resFatorial := 1
   para aux de 1 ate numFatorial faca
        resFatorial := resFatorial * aux
   fimpara
   escreval("O fatorial do número informado é: ", resFatorial)
Fimalgoritmo*/

function acaoBotao() {
   var numInformado, resultado
   numInformado = prompt("Informe o número que deseja saber o fatorial:")
   resultado = 1

   for (var contador = 1; contador <= numInformado; contador++) {
      resultado = resultado * contador}

   document.getElementById("paragrafo").innerText = "O fatorial de " + numInformado + " é: " + resultado
}