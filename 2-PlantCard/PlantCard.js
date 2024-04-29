let botao_aparecer = document.getElementById("meu_botao");
let modal = document.querySelector(".espaço_modal");

function aparecer() {
    if (modal.style.visibility === "hidden") {
        modal.style.visibility = "visible";
    } else {
        modal.style.visibility = "hidden";
    }
}
modal.style.visibility = "hidden"