# Quiz de História (Node.js)

Aplicação de linha de comando desenvolvida em **JavaScript com Node.js** que apresenta perguntas aleatórias de história ao jogador.
O usuário responde às perguntas e ao final recebe uma pontuação com uma mensagem baseada em seu desempenho.

O projeto foi estruturado com **separação de responsabilidades**, dividindo dados, serviços e utilitários em arquivos diferentes.

---

# Tecnologias utilizadas

* Node.js
* JavaScript (ES Modules)
* readline-sync (entrada de dados no terminal)

---

# Instalação

Clone o repositório:

```
git clone https://github.com/seuusuario/quiz-historia.git
```

Entre na pasta do projeto:

```
cd quiz-historia
```

Instale as dependências:

```
npm install readline-sync
```

Execute o projeto:

```
node index.js
```

---

# Como o jogo funciona

1. O jogo exibe um título de boas-vindas.
2. O jogador informa seu nome.
3. O sistema seleciona perguntas aleatórias.
4. O jogador responde as perguntas no terminal.
5. O sistema calcula a pontuação.
6. Uma mensagem final é exibida de acordo com o desempenho.
7. O jogador pode escolher jogar novamente.

---

# Estrutura do projeto

```
quizhistorico
│
├── data
│   └── questoes.js
│
├── services
│   └── quizService.js
│
├── utils
│   └── embaralhar.js
│
├── index.js
└── README.md
```

### index.js

Arquivo principal da aplicação.

Responsável por:

* iniciar o jogo
* controlar o loop de execução
* chamar as funções de serviço
* controlar a quantidade de perguntas

Principais conceitos utilizados:

* `while` para repetir o jogo
* `import/export` para modularização
* template string para exibir resultados

---

### data/questoes.js

Arquivo responsável por armazenar os **dados das perguntas**.

Cada pergunta é um objeto contendo:

```
{
 id: number,
 pergunta: string,
 resposta: string
}
```

Esse padrão facilita manutenção e expansão do banco de perguntas.

---

### services/quizService.js

Arquivo responsável pela **lógica do jogo**.

Funções existentes:

**titulo()**

Exibe o título e mensagem inicial do jogo.

**obterNomeJogador()**

Captura o nome do jogador usando `readline-sync`.

**cumprimentar(nome)**

Exibe uma mensagem de boas-vindas personalizada.

**exibirPerguntas(questoes)**

Percorre as perguntas e coleta respostas do jogador.

Lógicas utilizadas:

* `forEach()` para percorrer perguntas
* `trim()` para remover espaços da resposta
* comparação de resposta correta
* contagem de pontuação

**exibirMensagemFinal(pontuacao)**

Exibe uma mensagem baseada na pontuação final.

Utiliza estrutura condicional:

```
if / else if
```

---

### utils/embaralhar.js

Arquivo responsável por **funções utilitárias** relacionadas às perguntas.

Funções disponíveis:

**embaralhando(questoes)**

Embaralha o array de perguntas usando:

```
sort(() => Math.random() - 0.5)
```

Para evitar modificar o array original, é criada uma cópia usando:

```
[...questoes]
```

**selecionaPergunta(questoes, quantidade)**

Seleciona uma quantidade específica de perguntas após o embaralhamento.

Utiliza:

```
slice(0, quantidade)
```

---

# Conceitos de JavaScript utilizados

Este projeto utiliza diversos conceitos fundamentais da linguagem:

### Arrow Functions

Funções escritas de forma simplificada:

```
const titulo = () => {}
```

---

### ES Modules

Importação e exportação de módulos:

```
import { questoes } from './data/questoes.js'
export const titulo = () => {}
```

---

### Array Methods

Métodos utilizados:

* `forEach()` → percorrer perguntas
* `sort()` → embaralhar perguntas
* `slice()` → selecionar quantidade específica

---

### Template Strings

Utilizadas para interpolar variáveis:

```
console.log(`Você acertou ${pontuacao} perguntas`)
```

---

### Estruturas de Controle

Utilizadas no projeto:

* `if / else`
* `while`
* comparação de valores

---

# Possíveis melhorias futuras

Algumas evoluções possíveis para o projeto:

* adicionar níveis de dificuldade
* criar categorias de perguntas
* sistema de ranking de jogadores
* salvar pontuações em arquivo JSON
* versão web utilizando React
* cronômetro para responder perguntas

---

# Autor

Felipe
