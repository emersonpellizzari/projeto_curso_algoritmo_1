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


