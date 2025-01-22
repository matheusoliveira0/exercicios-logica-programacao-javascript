const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h4");

// ouvinte 
frm.addEventListener('submit', (e)=> {
    e.preventDefault();
    const nome = frm.inNome.value;
    const nota1 = Number(frm.inNota1.value);
    const nota2 = Number(frm.inNota2.value);
    const media = (nota1+nota2)/2
    resp1.innerText =`Média das notas: ${media.toFixed(2)}`
    if (media >= 7) {
        resp2.innerText = `Parabéns ${nome}! Você foi aprovado!`
        resp2.style.color= "green"
    } else if (media >=5){
        resp2.innerText = `Atenção ${nome}! Você em analise!`
        resp2.style.color= "orange"
    } else {
        resp2.innerText = `Opss ${nome}! Você foi reprovado!`
        resp2.style.color= "red"
    }
})