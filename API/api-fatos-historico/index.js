import express from 'express';
import {validaAno, buscaFato} from './service.js';

const app = express();

app.get('/', (req, res) => {
    const anoFato = req.query.ano;

    if (!anoFato) {
        return res.status(400).json({ mensagem: "Informe o parâmetro ano" });
    }

    if (!validaAno(anoFato)){
        res.status(400).json({ mensagem: "Ano inválido" });
    }

    const resultado = buscaFato(anoFato);

    if (resultado === "Digite um Ano entre 1920 e 2020") {
        return res.status(404).json({ mensagem: resultado });
    }

    res.status(200).json({ mensagem: resultado });
});

app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080");
});


