Durante o desenvolvimento deste projeto foi criada uma API simples utilizando Node.js e Express com o objetivo de retornar um fato histórico com base no ano informado pelo usuário. A aplicação foi estruturada em três arquivos principais para organizar melhor as responsabilidades do sistema.

No arquivo **index.js** foi configurado o servidor Express e criada a rota GET principal. Essa rota recebe um parâmetro chamado **ano** através da query da URL. O código realiza validações iniciais para garantir que o parâmetro foi informado e se possui um formato válido. Dependendo da situação, a API retorna respostas HTTP apropriadas, como **400** para erros de requisição, **404** quando o fato não é encontrado e **200** quando a consulta é realizada com sucesso.

No arquivo **service.js** foram implementadas as funções responsáveis pela lógica da aplicação. A função **validaAno** verifica se o valor informado possui quatro caracteres e se representa um número válido. Já a função **buscaFato** procura na base de dados um fato correspondente ao ano informado, utilizando o método **find** do JavaScript para localizar o registro correto.

O arquivo **dados.js** contém um array com diversos fatos históricos organizados por ano, servindo como base de dados da aplicação. Esses dados são importados no serviço para permitir a consulta.

Com essa estrutura foi possível separar responsabilidades entre rota, regras de negócio e dados, tornando o código mais organizado e fácil de manter. Durante o desenvolvimento surgiram algumas dificuldades, principalmente relacionadas à validação de dados e à construção da lógica da busca, mas com estudo e apoio de ferramentas de apoio foi possível concluir a implementação da API funcionando corretamente.
