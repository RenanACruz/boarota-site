function buscarPacote() {
  let destino = document.getElementById("destino").value;
  let tipo = document.getElementById("tipo").value;
  let orcamento = document.getElementById("orcamento").value;
  let resultado = document.getElementById("resultado-busca");

  if (destino === "" || tipo === "" || orcamento === "") {
    resultado.innerHTML = "Por favor, selecione todas as opções da busca.";
    return;
  }

  resultado.innerHTML = "Encontramos opções de viagem para o seu perfil: " + destino + ", " + tipo + ", orçamento " + orcamento + ".";
}

function enviarFormulario() {
  let destino = document.getElementById("destino-personalizado").value;
  let pessoas = document.getElementById("pessoas").value;
  let tipo = document.getElementById("tipo-personalizado").value;
  let orcamento = document.getElementById("orcamento-personalizado").value;
  let resultado = document.getElementById("resultado-personalizado");

  if (destino === "" || pessoas === "" || tipo === "" || orcamento === "") {
    resultado.style.display = "block";
    resultado.innerHTML = "Por favor, preencha todos os campos.";
    return;
  }

  resultado.style.display = "block";
  resultado.innerHTML =
    "Solicitação enviada com sucesso! Recebemos seu interesse em uma viagem para " +
    destino +
    " com " +
    pessoas +
    " pessoas. Em breve entraremos em contato com opções para o perfil escolhido.";
}

function enviarContato() {
  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email").value;
  let mensagem = document.getElementById("mensagem").value;
  let resultado = document.getElementById("resultado-contato");

  if (nome === "" || email === "" || mensagem === "") {
    resultado.innerHTML = "Por favor, preencha todos os campos do formulário.";
    return;
  }

  resultado.innerHTML = "Mensagem enviada com sucesso! Em breve entraremos em contato.";
}