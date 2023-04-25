function toggleModal() {
  var modal = document.getElementById("modal");
  if (modal.style.display === "none") {
    modal.style.display = "block";
  } else {
    modal.style.display = "none";
  }
}

window.addEventListener("load", toggleModal);

document.getElementById("close").addEventListener("click", toggleModal);

// window.alert("Olá, seja bem vindo(a) ao iRock!");

// let nome = prompt("Qual o seu nome?");
// alert("Olá, " + nome + "! Seja bem vindo(a) ao iRock!");

// let imagem = document.querySelector("#img");
// imagem.addEventListener("click", function () {
//   let nome = prompt("Qual é o seu nome?");
//   alert("Olá, " + nome + "!");
// });

function touchImage() {
  let nome = prompt("Qual é o seu nome?");
  alert("Olá, " + nome + "!");

  if (nome) {
    alert("Prazer em te conhecer, " + nome + ".");
    document.getElementById("img").src = "coisa.jpg";
  }
}
