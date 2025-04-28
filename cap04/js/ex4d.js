const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const ladoA = Number(frm.inLadoA.value);
    const ladoB = Number(frm.inLadoB.value);
    const ladoC = Number(frm.inLadoC.value);

    if (ladoA < ladoB + ladoC && ladoC < ladoA+ladoB){
        resp1.innerText = "Todos os lados podem formar um triâgulo"
        
    if ((ladoA === ladoB) && ladoA === ladoC)  {
        resp2.innerText = "Tipo: Equilátero"
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC ) {
        resp2.innerText= "Tipo isósceles"
    } else {
        resp2.innerText = "Tipo escaleno"
    } 
   } else {
        resp1.innerText = "Os lados não formam um triângulo"
        resp2.innerText = ""
    }
})