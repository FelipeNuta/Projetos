import entradaDados from 'readline-sync';

console.log('\nAplicação de Juros' + '\n');

let valor = entradaDados.questionFloat('Informe o valor devido: ');

if (valor <= 0) {
    console.log('\nValor inválido.\nA aplicação será encerrada.\n');
    process.exit();
}
let vencimento = entradaDados.questionInt('Informe quantos dias se passaram desde o vencimento do boleto: ');
let taxaJuros = vencimento >= 15 ? 10 : 5;
let valorJuros = (valor / 100) * taxaJuros;

console.log('\nValor original da dívida: R$ ' + valor);
console.log('Dias atrasados: ' + vencimento);
console.log('Taxa de Juros: ' + taxaJuros + '%');

if (vencimento >= 1){
    console.log('Valor total com juros: R$ ' + (valor + valorJuros) + '\n');
} else {
    console.log('\nVocê está em Dia \n');
}

