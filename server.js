import express from "express";
import cors from "cors"
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()




const app = express();
app.use(express.json());
app.use(cors());


const port = 3000;



app.listen(port, () => {
   console.log("servidor em execução na porta 3000");
});




//buscado todos os usuários criados
app.get("/usuario", async (req, res) => {
const users = await prisma.user.findMany()
res.status(200).json(users);


});



//criamos um usuário
app.post("/usuario", async (req, res) => {    
   const user = await prisma.User.create({
      data: {
         email: req.body.email,
         name: req.body.name,
         age: req.body.age
      }


   })

   res.status(201).json(user)

});




// atualizamos um usuário
app.put("/usuario/:id", async (req, res) => {

   await prisma.user.update({
      where: {
         id: req.params.id
      },
      data: {
         email: req.body.email,
         name: req.body.name,
         age: req.body.age
      }


   })
   res.status(200).json({ menssage: "usuário atualizado com sucesso" });
});



//deletamos um usuário
app.delete("/usuario/:id", async (req, res) => {

   await prisma.user.delete({
      where: {
         id: req.params.id
      },


   })
   res.status(200).json({ menssage: "usuário deletado com sucesso" });
});

/*
CRUD COMPLETO 

CRIAR - OK 
LER - OK 
EDITAR - OK
DELETAR - OK
     

   ___CRUD __
CREATE
READ
UPDATE
DELETE



*/









