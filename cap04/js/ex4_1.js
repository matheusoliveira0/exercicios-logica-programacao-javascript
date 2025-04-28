// cria referencia ao form

const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h4");

//ouvinte

frm.addEventListener("submit", (e) => {
  e.preventDefault();
  const nome = frm.inNome.value;
  const nota1 = Number(frm.inNota1.value);
  const nota2 = Number(frm.inNota2.value);
  const media = (nota1 + nota2) / 2;
  resp1.innerText = `Média das notas ${media.toFixed(2)}`;

  // cria as condiçoes

  if (media >= 7) {
    resp2.innerText = `Parabéns ${nome} você foi aprovado(a)`;
    resp2.style.color = "blue";
  } else if (media > 4) {
    resp2.innerText = `${nome} você está em analise`;
    resp2.style.color = "yellow";
  } else {
    resp2.innerText = `${nome} você foi reprovado(a)`;
    resp2.style.color = "red";
  }
});

// const frm = document.querySelector("form");
// const resp1 = document.querySelector("h3");
// const resp2 = document.querySelector("h4");

// // ouvinte
// frm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const nome = frm.inNome.value;
//   const nota1 = Number(frm.inNota1.value);
//   const nota2 = Number(frm.inNota2.value);
//   const media = (nota1 + nota2) / 2;
//   resp1.innerText = `Média das notas: ${media.toFixed(2)}`;
//   if (media >= 7) {
//     resp2.innerText = `Parabéns ${nome}! Você foi aprovado!`;
//     resp2.style.color = "green";
//   } else if (media >= 5) {
//     resp2.innerText = `Atenção ${nome}! Você está em analise!`;
//     resp2.style.color = "orange";
//   } else {
//     resp2.innerText = `Opss ${nome}! Você foi reprovado!`;
//     resp2.style.color = "red";
//   }
// });
