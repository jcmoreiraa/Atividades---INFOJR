let modal = document.querySelector(".espaço_modal");
let botao = document.getElementById("meu_botao");

function aparecer() {
    if (modal.style.visibility === "hidden") {
        modal.style.visibility = "visible";
    } else {
        modal.style.visibility = "hidden";
    }
    
    if (modal.style.opacity === "0") {
        modal.style.opacity = "1";
    } else if (modal.style.opacity === "1") {
        modal.style.opacity = "0";
    }
}

modal.style.visibility = "hidden";
modal.style.opacity = "0";

botao.onclick = aparecer;

