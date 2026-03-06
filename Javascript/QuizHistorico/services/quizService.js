import entradaDados from 'readline-sync';

export const titulo = () => {
    console.log("-------QUIZ DE HISTÓRIA-------\n");
    console.log("Seja Bem-Vindo Jogador(a)!");
};

export const obterNomeJogador = () => {
    return entradaDados.question("Digite seu nome: ");
};

export const cumprimentar = (nome) => {
    console.log(`Olá, ${nome}! Vamos começar o quiz?\n`);
    entradaDados.question("Pressione Enter para iniciar\n");
};

export const exibirPerguntas = (questoes) => {
    let pontuacao = 0;

    questoes.forEach((questao, index) => {
        console.log(`Pergunta ${index + 1}: ${questao.pergunta}`);
        const resposta = entradaDados.question("Resposta: ");
        if (resposta.trim() == questao.resposta) {
            console.log("Resposta correta!\n");
            pontuacao++;
        } else {
            console.log(`Resposta incorreta! A resposta correta é: ${questao.resposta}\n`);
        }

    });
    return pontuacao;
};


export const exibirMensagemFinal = (pontuacao) => {
    if (pontuacao >= 1 && pontuacao <= 3) {
        console.log("OH NÃO! Tente mais uma vez.\n");
    } else if (pontuacao >= 4 && pontuacao <= 6) {
        console.log("BOM TRABALHO! Pratique um pouco mais.\n");
    }
    else if (pontuacao >= 7 && pontuacao <= 9) {
        console.log("MUITO BOM! Você acertou a maioria.\n");
    }
    else if (pontuacao == 10) {
        console.log("EXCELENTE! Você é um verdadeiro expert.\n");
    }
    else if (pontuacao == 0) {
        console.log("Você não acertou nenhuma pergunta. Não desanime, tente novamente!\n");
    }
};
