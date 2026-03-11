import { fatosHistoricos } from './dados.js';

export const validaAno = (ano) => {
    if (ano.length === 4 && !isNaN(ano)) {
        return true;
    }
    return false;
};

export const buscaFato = (ano) => {

    const fato = fatosHistoricos.find(
        item => item.ano === Number(ano)
    );

    if (!fato) {
        return "Digite um Ano entre 1920 e 2020";
    }

    return fato || null;
};