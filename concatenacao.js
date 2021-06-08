/*
Var
// Seção de Declarações das variáveis
   nome: caracter
   numero: real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   escreval("Informe o nome")
   leia(nome)
   escreval("Informe um número")
   leia(numero)
   
   escreval(nome, " : ", numero)

Fimalgoritmo
*/

var nome, numero;
nome = prompt("Informe o nome:")
numero = prompt("Informe um número")

document.getElementById("paragrafo").innerText = nome + " : " + numero;