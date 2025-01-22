const frm = document.querySelector("form");
const resp = document.querySelector("h3");

// ouvinte
frm.addEventListener("reset", ()=> {
    resp.innerText = "";
})
frm.addEventListener("submit", (e)=> {
    e.preventDefault()
    const nome = frm.inNome.value;
    const masculino = frm.inMasc.checked;
    const altura = Number(frm.inAltura.value);
    let peso;
    if (masculino) {
        peso = 22 * Math.pow(altura,2)
    } else {
        peso = 21 * Math.pow(altura, 2)
    }
    resp.innerText = `${nome} seu peso ideal é ${peso.toFixed(3)} kg`

})
