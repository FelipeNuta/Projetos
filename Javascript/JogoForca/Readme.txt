## Jogo da Forca em JavaScript (Terminal)

Este projeto consiste em uma implementação do clássico **Jogo da Forca**, desenvolvido em **JavaScript para execução no terminal utilizando Node.js**. O objetivo do jogo é adivinhar o nome de uma fruta sorteada aleatoriamente a partir de uma lista pré-definida.

A arquitetura do projeto foi organizada em módulos para melhorar a **separação de responsabilidades e manutenção do código**. A lista de frutas é armazenada no arquivo `dados.js`, enquanto as regras e funcionalidades do jogo, como o sorteio da fruta e a exibição do título, ficam no arquivo `forcaService.js`. O arquivo `index.js` atua como ponto de entrada da aplicação e controla o fluxo principal do jogo.

Ao iniciar o jogo, uma fruta é sorteada aleatoriamente da lista e sua quantidade de letras é exibida ao jogador representada por underscores (`_`). O jogador possui **3 tentativas** para descobrir as letras que compõem a palavra.

Durante cada rodada, o usuário deve digitar uma letra. O sistema realiza validações para garantir que apenas **um único caractere alfabético** seja aceito como entrada. Caso a letra exista na palavra sorteada, ela é revelada nas posições corretas. Caso contrário, o número de tentativas restantes é reduzido.

O jogo continua em loop até que uma das condições seja atendida:

* O jogador descubra todas as letras da palavra e vença o jogo.
* O número de tentativas chegue a zero, resultando em derrota.

Ao final da partida, o sistema informa ao jogador se ele venceu ou perdeu, exibindo a palavra correta.

Este projeto tem como objetivo praticar conceitos fundamentais de JavaScript, como:

* manipulação de arrays
* controle de fluxo com loops e condicionais
* validação de entrada do usuário
* modularização de código
* organização de projeto em múltiplos arquivos
* execução de aplicações Node.js no terminal


## Tecnologias Utilizadas

* **JavaScript (ES Modules)**
* **Node.js** para execução do projeto no terminal
* **readline-sync** para captura de dados digitados pelo usuário
* **Git** para versionamento do projeto

---

## Como Executar o Projeto

1. Clone o repositório:

```
git clone https://github.com/FelipeNuta/Projetos/tree/master/Javascript/JogoForca
```

2. Acesse a pasta do projeto:

```
cd JogoForca
```

3. Instale as dependências:

```
npm install
```

4. Execute o jogo:

```
node index.js
```

O jogo será iniciado diretamente no terminal.

---

## Estrutura de Pastas

```
jogo-forca/
│
├── dados/
│   └── dados.js
│       Lista de frutas utilizadas no jogo
│
├── service/
│   └── forcaService.js
│       Funções responsáveis por regras do jogo
│       como sorteio da palavra e exibição do título
│
├── index.js
│   Arquivo principal que controla o fluxo do jogo
│
└── README.md
    Documentação do projeto
```

Essa estrutura segue o princípio de **separação de responsabilidades**, deixando os dados, serviços e fluxo principal organizados em arquivos diferentes.

---

## Possíveis Melhorias

Algumas melhorias que podem ser implementadas futuramente:

* Adicionar **níveis de dificuldade** (mais tentativas ou palavras maiores)
* Exibir **letras já utilizadas pelo jogador**
* Criar um **contador de vitórias e derrotas**
* Implementar **interface gráfica com HTML, CSS e JavaScript**
* Permitir **jogar novamente sem reiniciar o programa**
* Adicionar **testes automatizados para validar as regras do jogo**
* Permitir categorias diferentes de palavras (animais, países, objetos, etc.)

