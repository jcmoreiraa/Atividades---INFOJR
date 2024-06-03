# Atividade de Núcleo

- **Orientadores:** Turma  [Fábio Santos Matos de Oliveira](https://gitlab.com/Fabio-Matos1303) | Turma  [Djair Maykon](https://gitlab.com/djairmaykon) | Turma  [Márcio R. Júnior](https://gitlab.com/marciojunior2109) 
- **Coorientadores gerais:** [Raissa Luna](https://gitlab.com/raissalunana) | [Lucas Júlio](https://gitlab.com/LucasJulio)


## Descrição da atividade

Nessa semana a atividade tem como objetivo a construção de uma API no modelo REST utilizando Typescript, ExpressJS, PrismaORM e um banco relacional.


### Tarefa

Desenvolver uma API REST com um CRUD para controle de uma tabela de usuarios (Criada conforme modelo abaixo), com as rotas que constam nos requisitos obrigatorios.

### Requisitos Obrigatórios:

- Implementar uma rota de criar usuario (Não permitir criar usuario caso já haja outro com o email)
- Implementar uma rota pra retornar usuario por Ids
- Implementar uma rota pra retornar usuario por email 
- Implementar uma rota pra retornar um ou mais usuarios por nome
- Implementar uma rota pra deletar usuario por Id
- Implementar uma rota pra atualizar o usuario por Id (Não permitir atualizar usuario caso já haja outro com o email)
- Usar Express
- Usar o ORM Prisma
- Usar um banco relacional (Indicamos o sqlite)
- Utilizar Typescript

## Campos obrigatorios pra User:
 
    
    Id (Único)
    
---
    
    Nome
    
--- 
    
    Email (Único)
    
--- 
    
    Senha
    
--- 
    
    Idade
    
--- 
    
    Estado
    
--- 
    
    Cidade

### Requisitos Opcionais:

- Usar Docker
- Retornar mensagem personalizadas de erro com status code em casos como, usuario nao encontrado (todas as rotas por Id e Email), email já existente (rota de criar e update)
- Criar rota de login e logout com jwt retornando o token de acesso e validar as outras rotas para retornar apenas caso receba um token valido

## LINKS UTEIS

### Express

- https://expressjs.com/pt-br/starter/hello-world.html
- https://www.youtube.com/watch?v=35J5bO4Hjt8&ab_channel=NiltonR.CSantos
- https://www.youtube.com/watch?v=E-LAh_2QRSU&ab_channel=RondyCouto

### Prisma

- https://www.prisma.io/docs/getting-started/quickstart
- https://medium.com/@polianams/construindo-opera%C3%A7%C3%B5es-crud-com-typescript-node-js-prisma-e-express-9eff1cffe61a
- https://medium.com/@estevamsouzalaureth/construindo-uma-simples-api-rest-com-nodejs-e-express-usando-typescript-2531be5d0e2b