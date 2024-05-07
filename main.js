
let button = document.querySelector("#botao_verificar");
button.addEventListener("click", verificar);

function verificar() {
    let n1 = document.querySelector("#n1");
    let n2 = document.querySelector("#n2");
    let n3 = document.querySelector("#n3");
    let n4 = document.querySelector("#n4");

    let p1 = document.querySelector("#p1");
    let p2 = document.querySelector("#p2");
    let p3 = document.querySelector("#p3");
    let p4 = document.querySelector("#p4");

    let presenca = document.querySelector("#presenca");

    let media = calculaMedia(n1.value, n2.value, n3.value, n4.value, p1.value, p2.value, p3.value, p4.value).toFixed(2);
    document.querySelector("#media").textContent = media;

    let aprovado = verificaAprovacao(media, presenca.value)

    const element = document.querySelector('#resultado');

    console.log(element)
    if (aprovado) {
        element.textContent = "Aprovado"
        element.classList.add('passou');
        element.classList.remove('reprovado');
    } else {
        element.textContent = "Reprovado"
        element.classList.add('reprovado');
        element.classList.remove('passou');
    }

}