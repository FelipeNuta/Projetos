export const embaralhando = (questoes) => {
    return [...questoes].sort(() => Math.random() - 0.5);
};

export const selecionaPergunta = (questoes, quantidade) => {
    return embaralhando(questoes).slice(0, quantidade);
};