var nome, nota1, nota2;
nome = prompt("Digite seu nome: ")
nota1 = prompt("Digite a nota 1: ")
nota2 = prompt("Digite a nota 2: ")
media = (parseInt(nota1)+parseInt(nota2))/2
if (media >= 5)
        alert("Aluno aprovado " + nome + " a média é: " + media)
else
        alert("Aluno reprovado " + nome + " a média é: " + media)