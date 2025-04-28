// criar referencia

const frm = document.querySelector("form");
const resp = document.querySelector("h3");

// ouvinte

frm.addEventListener("submit", (e) => {
  e.preventDefault();
  // obtém e converte o conteúdo do campo inHoraBrasil

  const horaBrasil = Number(frm.inHoraBrasil.value);
  let horaFranca = horaBrasil + 5;

  if (horaFranca > 24) {
    horaFranca = horaFranca - 24;
  }

  // exibe resposta
  resp.innerText = `Hora na França ${horaFranca.toFixed(2)}`;
});
