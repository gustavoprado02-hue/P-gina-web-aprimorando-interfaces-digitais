const btnTema = document.getElementById("toggle-tema");
btnTema.addEventListener("click", function() {
    document.body.classList.toggle("dark-theme");
});

const reacoes = document.querySelectorAll(".reacoes");

reacoes.forEach(function(reacao) {
    const like = reacao.querySelector(".like");
    const dislike = reacao.querySelector(".dislike");
    const numeros = reacao.querySelectorAll(".contador span");

    const numeroLike = numeros[0];
    const numeroDislike = numeros[1];

    let escolha = "";

    like.addEventListener("click", function() {
        if (escolha === "") {
            numeroLike.textContent++;
            escolha = "like";
            like.classList.add("ativo");
        } else if (escolha === "dislike") {
            numeroDislike.textContent--;
            numeroLike.textContent++;
            escolha = "like";
            dislike.classList.remove("ativo");
            like.classList.add("ativo");
        }
    });

    dislike.addEventListener("click", function() {
        if (escolha === "") {
            numeroDislike.textContent++;
            escolha = "dislike";
            dislike.classList.add("ativo");
        } else if (escolha === "like") {
            numeroLike.textContent--;
            numeroDislike.textContent++;
            escolha = "dislike";
            dislike.classList.remove("ativo");
            dislike.classList.add("ativo");
        }
    });
});