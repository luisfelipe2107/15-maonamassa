var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista"

//var dadosPaulo = document.querySelector('elinhaPaulo');
//var peso = dadosPaulo.queryselector(' .info-peso').textContent;
//var altura = dadosPaulo.querySelector('. info-altura').textoContent;
//var imc = peso / (altura*altura)
// dadosPaulo.querySelector('.info-imc).textContent = imc;

var pacientes = document.querySelectorAll('.paciente');
for (let contador = 0; contador < pacientes.length; contador++){
    var dadosPaciente = pacientes[contador];
    var peso = dadosPaciente.querySelector('.info-peso').textContent;
    var altura = dadosPaciente.querySelector('.info-altura').textContent;
    var imc = peso / (altura*altura);
    dadosPaciente.querySelector('.info-imc').textContent = imc;
}