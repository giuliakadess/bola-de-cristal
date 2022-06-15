const elementoResposta = document.querySelector("#resposta")
const inputPergunta = document.querySelector("#inputPergunta")
const botaoPerguntar = document.querySelector("#botaoPerguntar")
const respostas = [
  "Sim!",
  "Não tenho tanta certeza",
  "Não conte com isso",
  "Sem dúvidas!",
  "Jura, anjo?",
  "Sim, definitivamente",
  "Não.",
  "Espera sentadx",
  "Melhor não te dizer agora",
  "Minhas fontes dizem que não",
  "Provavelmente",
  "Pode ser que sim...",
  "Não consigo prever agora, volte mais tarde",
  "Concentre-se e pergunte novamente.",
  "Para, vai viver!",
]

//clicar em fazer pergunta
function fazerPergunta() {

if(inputPergunta.value == ""){
  alert("Digite sua pergunta!")
  return
}

botaoPerguntar.setAttribute("disabled", true)

const pergunta = "<div>" + inputPergunta.value + "</div>"

  //gerar número aleatório
const totalRespostas = respostas.length
const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]

elementoResposta.style.opacity = 1;

//sumir a repsosta depois de 3seg
setTimeout(function() {
  elementoResposta.style.opacity = 0;
  botaoPerguntar.removeAttribute("disabled")
}, 3000)
}