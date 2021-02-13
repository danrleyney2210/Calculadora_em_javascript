function limpaTela(){
  document.form.textview.value = "";
}

var valor;
var resultado;

function insert(num){
  valor = document.form.textview.value += num;
}
function soma(){
  document.form.textview.value = eval(document.form.textview.value)
}
function calcular(){
  resultado = eval(valor);
  document.form.textview.value = resultado.toLocaleString('pt-BR');
}