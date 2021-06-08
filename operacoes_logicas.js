/*
Var
// Seção de Declarações das variáveis
   nota1, nota2, media: real
   nome: caracter
   passou: logico

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc...
   escreva("Digite o nome do aluno:")
   leia(nome)
   escreva("Digite a nota 1 do aluno:")
   leia(nota1)
   escreva("Digite a nota 2 do aluno:")
   leia(nota2)
   media := (nota1+nota2)/2

   se media >= 5 entao
      passou := verdadeiro
   fimse
   
   se (passou) && (media >= 5 || media <= 7) entao
      escreval("Aprovado! ", nome)
   senao
      escreval("Reprovado! ", nome)
   fimse

Fimalgoritmo
*/

var nota1, nota2, media, nome, passou;
nome = prompt("Digite o nome do aluno:")
nota1 = prompt("Digite a nota 1:")
nota2 = prompt("Digite a nota 2:")
media= ((parseInt(nota1)+parseInt(nota2))/2)
passou = false;

if (media >= 5)
    passou = true;

if (passou && media >= 7)
    alert("Aprovado")
else  
    alert("Reprovado")


