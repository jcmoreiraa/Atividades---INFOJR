import { db } from "../src/utils/db.server";

type User = {
    nome: string;
    email: string;
    senha: string;
    idade: number;
    estado: string;
    cidade: string;
};

async function seed() {
    await Promise.all(
      getUsers().map((user) => {
        return db.user.create({
          data: {
            nome: user.nome,
            email: user.email,
            senha: user.senha,
            idade: user.idade,
            estado: user.estado,
            cidade: user.cidade,
          },
        });
      })
    );
    const user = await db.user.findFirst({
        where: {
          nome: "alessandro",
        },
      });

      console.log(user)
}

seed();

function getUsers(): Array<User> {
    return [
        {
            nome: "alessandro",
            email: "sandrinho@email.com",
            senha: "miaumiau",
            idade: 22,
            estado: "bahia",
            cidade: "salvador"
        },
    ]
};