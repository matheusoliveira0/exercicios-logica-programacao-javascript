const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const velocidadePermitida = Number(frm.inVelocidadePermitida.value);
  const velocidadeCondutor = Number(frm.inVelocidadeCondutor.value);

  const multaleve = velocidadePermitida + velocidadePermitida * (20 / 100);

  if (velocidadeCondutor > multaleve) {
    resp.innerText = "Multa grave";
  } else if (
    velocidadeCondutor >= velocidadePermitida &&
    velocidadeCondutor <= multaleve
  ) {
    resp.innerText = `Multa leve`;
  } else {
    resp.innerText = "Sem multa";
  }
});
