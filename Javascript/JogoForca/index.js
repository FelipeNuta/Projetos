import entradaDados from "readline-sync";
import { listaDeFrutas } from "./dados/dados.js";
import { sortearFruta, titulo, frutaSorteada, letrasFruta } from "./service/forcaService.js";

let tentativas = 3;
let letrasDescobertas = Array(frutaSorteada.length).fill("_");
let acertouPalavra = false;

titulo();

while (!acertouPalavra && tentativas > 0) {

    console.log(`\nFruta: ${letrasDescobertas.join(" ")}`);

    let letra = entradaDados.question("Digite uma letra: ").toLowerCase();

    if (letra.length !== 1 || !/[a-z]/.test(letra)) {
        console.log("Digite apenas UMA letra válida.");
        continue;
    }

    if (frutaSorteada.includes(letra)) {

        for (let i = 0; i < frutaSorteada.length; i++) {
            if (frutaSorteada[i] === letra) {
                letrasDescobertas[i] = letra;
            }
        }

        if (!letrasDescobertas.includes("_")) {
            acertouPalavra = true;
        };

    } else {
        tentativas--;
        console.log(`Letra incorreta! Restam ${tentativas} tentativas`);
    }

    if (tentativas == 0) {
        console.log("\n---------VOCÊ PERDEU---------");
        console.log(`Game Over! A fruta era: ${frutaSorteada.toUpperCase()}\n`);
        break;
    }
}

if (acertouPalavra && true) {
    console.log(`\nParabéns! Você acertou a fruta: ${frutaSorteada.toUpperCase()}\n`);
}

