 //cria referencia ao form e ao h3 (onde a resposta sera exibida)
 const frm = document.querySelector("form");
 const resp = document.querySelector("h3");

 //cria um ouvinte deevento, acionado quando submit for ativado
 frm.addEventListener("submit", (e) => {
   const nome = frm.inNome.value; //obtem o nome digitado
   resp.innerText = `Olá ${nome}`; // exibe a resposta do programa
   e.preventDefault(); //evita o envio do form
 });
const x = 10*(6-(2*2*(2+2*(3/2))))
alert(x)