# Atividade de Núcleo

## Informações principais

- **Núcleo:** Web
- **Orientadores:** [Márcio Ribeiro Júnior](https://github.com/ribmarciojr), [Djair Mycon]() e [Fábio Matos]()
- **Coorientadores gerais:** Raissa Luna | Lucas Júlio

## Descrição da atividade

O projeto MovieDB tem por objetivo explorar a API¹ do site [TheMovieDB](https://www.themoviedb.org/) e aprender como configurar a comunicação entre front-end e back-end em um mesmo projeto. O lado server-side será responsável por habilitar o servidor, puxar as informações da API do TheMovieDB e disponibilizar para ser utilizado pelo front. O lado client-side será responsável por obter os dados do servidor local e estruturar a página de forma que transforme os dados obtidos em um sites de filmes.

### Requisitos Obrigatórios:

- Atividade em dupla
- Utilizar Typescript, React e NextJS | Front-end
- Utilizar o Typescript, ExpressJS, Prisma ORM e Banco de Dados Relacional | Back-end
- Responsividade

### Das Funcionalidades:

- Deve ser possível se cadastrar como usuário;
- Deve ser possível fazer login como usuário;
- Deve ser possível acessar página principal com todos os filmes;
- Deve ser possível buscar um filme por nome;
- Deve ser possível favoritar um filme;
- Deve ser possível verificar filmes favoritos;
- Deve ser possível excluir filmes favoritos;


### Requisistos Opcionais
- Deve ser possível filtrar filmes(ex:. busca por gênero, busca por mais acessos);
- Deve ser possível consultar detalhes de um filme em página do filme;

### Interface

A atividade não possui um mockup pré-definido, então toda a estrutura e estilização do layout ficará livre, contudo, alguns elementos mínimos deverão estar presentes na página.
- Página de Login;
- Página principal;
- Página de favoritos;


### API_KEY²

- Key do TMDB - https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1
- URL para obter imagens dos posters - https://image.tmdb.org/t/p/w500
- URL para buscar filmes (não será obrigatório implementar o sistema de busca, é uma ferramenta adicional) - https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=

---

_¹API é um conjunto de rotinas e padrões de programação para acesso a um aplicativo de software ou plataforma baseado na Web. A sigla API refere-se ao termo em inglês "Application Programming Interface" que significa em tradução para o português "Interface de Programação de Aplicativos". Uma API é criada quando uma empresa de software tem a intenção de que outros criadores de software desenvolvam produtos associados ao seu serviço._

_²API Keys são credenciais de acesso fornecidas de maneira a autorizar o uso de funcionalidades específicas de uma API. Existem vários tipos de implementações. Aplicações web: API Keys podem ser fornecidas como JSON Web Tokens (JWT) via cookies ou cabeçalhos HTTP; em operações de back-end, podem ser parte da URI original do request._

## Materiais de apoio

### Cursos Completos

- [Node.js Tutorial for Beginners: Learn Node in 1 Hour - Programming with Mosh](https://youtu.be/TlB_eWDSMt4)
- [NodeJs - balta.io](https://youtube.com/playlist?list=PLHlHvK2lnJndvvycjBqQAbgEDqXxKLoqn)
- [Express JS Crash Course - Traversy Media](https://youtu.be/L72fhGm1tfE)
- Node Studio Treinamentos
  | **[HTML5](https://youtube.com/playlist?list=PLwXQLZ3FdTVGKl3iPEyEWpFoYkMUxWW5O)**
  | **[CSS3](https://youtube.com/playlist?list=PLwXQLZ3FdTVGf7GUtiOFLc_9AXO25iIzG)**
  | **[Javascript](https://youtube.com/playlist?list=PLwXQLZ3FdTVF9Y0RbsuN54XYP7D0dZIlR)**
  | **[Design Responsivo](https://youtube.com/playlist?list=PLwXQLZ3FdTVFi6oHo_K4IYDcwCU5-f1x5)**
- [JavaScript - Curso em Vídeo](https://youtube.com/playlist?list=PLntvgXM11X6pi7mW0O4ZmfUI1xDSIbmTm)
- [JavaScript Crash Course For Beginners - Traversy Media](https://youtu.be/hdI2bqOjy3c)
- [JavaScript Fundamentos - Marcelo Espíndola](https://youtube.com/playlist?list=PLkiMYncb6g-2ypEzGZ8Zo-_46-IUJC3tu)

### Vídeos/Textos por assuntos presentes na atividade

#### Node

Instalação

- [Como baixar e instalar o Node.js no Win 10 - Bóson Treinamentos](https://youtu.be/Wras1X6rBrc)

#### JSON

- [O que é JSON - JavaScript Object Notation - Bóson Treinamentos](https://youtu.be/K1f7G0JMkLU)

#### Nodemon

- [Nodemon - como configurar e utilizar - Programando Soluções](https://youtu.be/LscE7X8RcVs)
- [Documentação](https://www.npmjs.com/package/nodemon)

#### Express

- [Introdução ao Express - Victor Lima](https://youtu.be/pohvlFd0byI)

Instalação

- [Como instalar o Express no Node.js e criar rotas no Node.js - Celke](https://youtu.be/Wb4W0XvZ3h4)
- [Documentação](https://expressjs.com/pt-br/starter/installing.html)

Rotas

- [Roteamento no Express - Expressjs (texto)](https://expressjs.com/pt-br/guide/routing.html)
- [Criando Rotas com Express.js - treinaweb (texto)](https://www.treinaweb.com.br/blog/criando-rotas-com-express-js)
- [Como utilizar rotas no Express - Node.js - Programando Soluções](https://youtu.be/jM9SoTtmISc)
- [Rotas - Victor Lima](https://youtu.be/UMI7kFwmAHo)

Requisição e Resposta

- [Requisição e Resposta - api-automacaoiot (texto)](https://api-automacaoiot.readthedocs.io/pt_BR/latest/reference/request-response.html)
- [O que são o req e res do Express - Programando Soluções](https://youtu.be/ver4YbPYOqg)

Status

- [Como tratar erro 404 de rota ou página não existente no Express - Programando Soluções](https://youtu.be/icNqDrk9Ojo)

#### Cross-fetch

- [Documentação](https://www.npmjs.com/package/cross-fetch)

#### HTML

Estrutura Básica

- [HTML Basic - w3schools (Texto)](https://www.w3schools.com/html/html_basic.asp)
- [Estrutura básica de um Documento HTML - Bóson Treinamentos](https://youtu.be/hMAvQtQ97eE)

HTML Semântico

- [HTML Semantic Elements - w3schools (Texto)](https://www.w3schools.com/html/html5_semantic_elements.asp)
- [Estrutura Semântica do HTML em 25 minutos - Ferreira Studios](https://youtu.be/jEJUopJv12I)
- [Semântica - Dica do Nerd](https://youtu.be/NdAjp7X2CUI)
- [Estruturação da página utilizando tags Semânticas do HTML5 - Tiago Segato](https://youtu.be/6V3msF_YBQk)

#### CSS

Flexbox

- [A Complete Guide to Flexbox - CSS Tricks (Texto)](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Curso de CSS Flexbox - Node Studio Treinamentos](https://youtube.com/playlist?list=PLwXQLZ3FdTVGjLmjwfRc0Q9TA5U-PCWp4)

Formatação geral

- [Usando Google Fonts - Curso em Vídeo](https://youtu.be/FLuQonci9wU)
- [Unidades Relativas Part.1 - Ferreira Studios](https://youtu.be/etM0JBeFbf8)
- [Unidades Relativas Part.2 - Ferreira Studios](https://youtu.be/g__c-7M9Xzk)
- [Espaçamentos e a mágica do CSS Box Model - Rocketseat](https://youtu.be/nhW70H9H4gU)
- [Representando Cores com CSS3 - Curso em Vídeo](https://youtu.be/uKjKnztS3cY)
- [min(), max(), and clamp() - Kevin Powell](https://youtu.be/U9VF-4euyRo)
- [CSS Position - Tiger Codes](https://youtu.be/zPlt84S1L0U)

Media Queries

- [Responsividade para sites - Curso em Vídeo](https://youtu.be/WcGPSeuJDJ0)
- [Como utilizar Media Queries para sites Responsivos - Origamid](https://youtu.be/AltqAPZzAqo)

#### Javascript

Variáveis

- [Variáveis (var, let, const e escopo) - Node Studio Treinamentos](https://youtu.be/GmG5FkF2Hlc)

Funções

- [Funções - Curso em Vídeo](https://youtu.be/mc3TKp2XzhI)
- [funções - Matheus Battisti](https://youtu.be/ItzRdMj1lzw)

DOM

- [Introdução ao DOM - Curso em vídeo](https://youtu.be/WWZX8RWLxIk)
- [Eventos DOM - Curso em vídeo](https://youtu.be/wWnBB-mZIvY)
- [innerHTML property - nexTRIE](https://youtu.be/DSScGM_OtME)
- [appendChild - Marcelo Espíndola](https://youtu.be/wqyVBiEPd7E)
- [Events - Basic onclick Event - Intro to Web Apps](https://youtu.be/xj0DQI7N4Go)
- [Event Handlers in Javascript - Programming With Avelx](https://youtu.be/7UstS0hsHgI)

Array

- [Arrays - w3schools (texto)](https://www.w3schools.com/js/js_arrays.asp)
- [map() - dpw](https://youtu.be/o8fdyYZDKA0)
- [Percorrendo arrays com forEach em JavaScript - Matheus Castiglioni](https://youtu.be/1YI4_JuDoTU)

Fetch

- [Como usar Fetch api no Javascript - Codando Básico](https://youtu.be/CXLsvT9mSo8)
- [Asynchronous JavaScript Tutorial #9 - The Fetch API - The Net Ninja](https://youtu.be/drK6mdA9d_M)

Async & Await

- [Asynchronous JavaScript Tutorial #10 - Async & Await - The Net Ninja ](https://youtu.be/CWjNefiE47Y)
- [JS Assíncrono: Entenda de vez Callbacks, Promises e Async/Await - DevPleno](https://youtu.be/7Bs4-rqbCQc)


Obs .: Todos os materiais anteriores também são recomendados;

## Instruções para envio

1. Clone este repositório no seu computador
2. Crie a partir da `main` uma nova branch com seu número de turma e nome. Por exemplo: `1-jose` caso pertença a turma 1.
3. Construa a sua atividade apenas nessa branch, e não hesite em pedir por ajuda caso tenha dificuldades
4. Suba constantemente a sua branch para este repositório para possibilitar o acompanhamento por parte dos orientadores
5. Para saber se finalizou a atividade, verifique cuidadosamente se todos os requisitos foram cumpridos
6. Após finalizar a atividade, faça um merge request com o padrão de título: `[número da atividade]` - `[nome da atividade]` (por exemplo: 2 - Coffee Shop)
7. Esteja pronto para apresentar o que você fez na próxima RN (Reunião de Núcleo)
