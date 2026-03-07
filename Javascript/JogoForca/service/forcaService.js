import { listaDeFrutas } from "../dados/dados.js";

export const sortearFruta = (lista) => {
  const indice = Math.floor(Math.random() * lista.length);
  return lista[indice];
};

export const frutaSorteada = sortearFruta(listaDeFrutas);
export const letrasFruta = frutaSorteada.length;

export const titulo = () => {
    console.log("---------- Jogo da Forca ----------\n");
    console.log(`A fruta tem ${letrasFruta} letras:`);
};