import entradaDados from 'readline-sync';
import { questoes } from './data/questoes.js';
import { titulo, obterNomeJogador, cumprimentar, exibirPerguntas, exibirMensagemFinal } from './services/quizService.js';
import { selecionaPergunta, embaralhando } from './utils/embaralhar.js';

export const quantidadePerguntas = 10;

const iniciarJogo = () => {
    let jogarNovamente = true;

    while (jogarNovamente) {
        const perguntasSelecionadas = selecionaPergunta(questoes, quantidadePerguntas);

        titulo();

        const nome = obterNomeJogador();

        cumprimentar(nome);
        const pontuacao = exibirPerguntas(perguntasSelecionadas);

        console.log(`Você acertou ${pontuacao} de ${quantidadePerguntas} perguntas.\n`);

        exibirMensagemFinal(pontuacao);

        const resposta = entradaDados.question("Deseja jogar novamente? (s/n): ");

        if (resposta.trim().toLowerCase() !== 's') {
            jogarNovamente = false;
            console.log("\n Obrigado por jogar! Até a próxima!");
            console.log("\n--------------------------------------------------\n");
        };

    }

};

iniciarJogo();
