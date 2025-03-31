//variaveis cotações
var cotWonReal = 0.003873;
var cotWonDolar = 0.0006788;
var cotWonEuro = 0.0006273;

//inicio do programa
var valorWon = prompt("Quantos Wons você gostaria de converter?");
//conversão
var valorReal = valorWon * cotWonReal;
var valorDolar = valorWon * cotWonDolar;
var valorEuro = valorWon * cotWonEuro;
valorReal = valorReal.toFixed(2);
valorDolar = valorDolar.toFixed(2);
valorEuro = valorEuro.toFixed(2);

//alerta mostrando resultados
alert(
  "O valor de " +
    valorWon +
    " wons é de aproximadamente R$ " +
    valorReal +
    " reais, $ " + valorDolar + " dólares e € " + valorEuro + " euros."
);
