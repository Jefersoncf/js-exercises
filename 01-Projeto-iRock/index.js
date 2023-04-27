function getUser() {
  alert("Bem vindo ao iRock!");
}

function toggleModal() {
  var modal = document.getElementById("modal");
  if (modal.style.display === "none") {
    modal.style.display = "block";
  } else {
    modal.style.display = "none";
  }
}

let windowClient = document.body.clientHeight;
console.log(windowClient);
function resizeRock() {
  document.getElementById("img").style.height = windowClient;
  (document.body.clientHeight - 100) * 0.9;
}

window.addEventListener("load", toggleModal);

document.getElementById("close").addEventListener("click", toggleModal);

function touchImage() {
  let nome = prompt("Qual é o seu nome?");
  alert("Olá, " + nome + "!");

  if (nome) {
    alert("Prazer em te conhecer, " + nome + ".");
    document.getElementById("img").src = "coisa.jpg";
  }
  setTimeout(`document.getElementById("img").src = "rock.jpg";`, 5 * 60 * 1000);
}
// let timerId = setInterval(`alert('Wake up!');`, 60000);
