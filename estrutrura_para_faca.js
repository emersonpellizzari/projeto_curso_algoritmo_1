function acaoBotao() {
   var numInformado, resultado
   numInformado = prompt("Informe o número que deseja saber o fatorial:")
   resultado = 1

   for (var contador = 1; contador <= numInformado; contador++) {
      resultado = resultado * contador}

   document.getElementById("paragrafo").innerText = "O fatorial de " + numInformado + " é: " + resultado
}