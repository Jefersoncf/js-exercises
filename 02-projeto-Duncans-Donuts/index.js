function updateOrder() {
  const TAXRATE = 0.0925;
  const DONUTPRICE = 0.5;

  let numCakeDonuts = parseInt(document.getElementById("cake").value);
  let numGlazedDonuts = parseInt(document.getElementById("glazed").value);

  if (isNaN(numCakeDonuts)) {
    numCakeDonuts = 0;
  }
  if (isNaN(numGlazedDonuts)) {
    numGlazedDonuts = 0;
  }

  let subtotal = (numCakeDonuts + numGlazedDonuts) * DONUTPRICE;
  let tax = subtotal * TAXRATE;
  let total = subtotal + tax;

  document.getElementById("subtotal").value = "R$ " + subtotal.toFixed(2);
  document.getElementById("tax").value = "R$ " + tax.toFixed(2);
  document.getElementById("total").value = "R$ " + total.toFixed(2);
}

function parseDonuts(donutString) {
  numDonuts = parseInt(donutString);
  if (donutString.indexOf("dose") != -1) numDonuts *= 12;

  return numDonuts;
}

function placeOrder() {
  //submit order to server
  if (document.getElementById("name").value == "") {
    alert("Por favor insira seu nome.");
  } else if (
    document.getElementById("cake").value == "" ||
    document.getElementById("glazed").value == ""
  ) {
    alert("O campo não pode ficar vazio, insira a quantidade que deseja.");
  } else if (
    document.getElementById("time-pickup").value == "" ||
    isNaN(document.getElementById("time-pickup").value)
  ) {
    alert(
      "Você deve inserir um tempo determinado de minutos antes de enviar seu pedido."
    );
  } else {
    form.submit(); //submit form to server
  }
}
