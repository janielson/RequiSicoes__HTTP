_______________________ TIPOS DE ROTAS __________________

- GET =>    LISTAR OU CONSULTAR
- POST =>   PARA CRIAR 
- PUT  =>   PARA EDITAR VARIAS INFORMAÇÔES
- PATCH =>  EDITAR APENAS UMA INFORMAÇÃO
- DELETE => DELETA INFORMAÇOES 


 __________________ METODOS DE TRANSIÇÃO DE DADOS _____________________
 
 
 QUERY PARAMS (GET)
 ROUTE PARAMS (GET, PUT, DELETE)
 BODY PARAMS  (POST OU PUT)

 QUERY PARAMS => USADOS MAIS PARA CONSULTAS.
 ROUTE PARAMS => USAMOS PARA BUCAR,DELATAR OU EDITAR ALGO ESPECÍFICO.
 BODY PARAMS => USAMOS QUANDO TEMOS MUITAS INFORMAÇÕES OU QUEREMOS QUE ESSAS INFORMAÇOES SEJAM ESCODIDAS.




 adminjcsilva
 KgEMFF8fdteKBlDV


 ------ COMANDO PARA INSTALAR O PRISMA -----
 1 passo - npm install prisma --save-dev
 2 passo - npx prisma init

 3 passo - copiar o esquema que vamos usar (mongodb)
 4 passo - copiar a url no banco de dados para fazer a conecxão usando o nome de usuario e a senha salva.

 5 passo - copiar um esquema de tabelas que iremos usar 
 6 passo - instalar o prisma client que irá nos permitir ver as tabelas no navegador
 7 passo - npm install @prisma/client
 8 passo - depois de instalado temos que falar para o prisma client o tipo de tabela que iremos usar 
 9 passo - npx prisma db push 
 10 passo - para ver a tabela ( npx prima studio )



 -------- CONTROLE DE ROTAS COM MIDDLEWARES ---------
 
 Para controle de rotas usamos os ( Middlewares ) ele tem o poder de parar as nossas rotas.
 ele serve para que possamos economizar código podendo fazer ferificaçoes nas nossas rotas.
 ele e uma função onde recebe como parametros o ( resqueste,response, next ). 

 o next() ele tem que ser chamado sempre dentro da nossas funções, sem ele a nossas rotas para de execultar.
 o nome das nossas funçôes de Middlewares chamamos elas nas nossas rotas, podendo fazer as verificações necéssarias economizando códigos.  

 EXEMPLO;

 const verificacaoDeRota (req,res,next) => {
    "lógica para a verificação das rotas"

    next()
 }  


 app.get("/usuario", verificacaoDeRota, (req,res) => {

 })