import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default{

    async contabilizarPessoas(req: Request, res: Response){
        
  try {
    const totalPessoas = await prisma.fila.count();
    res.status(200).json({ totalPessoas });
  } catch (error) {
    console.error("Erro ao contabilizar pessoas:", error);
    res.status(500).json({ error: "Erro ao contabilizar pessoas" });
  }
}

}
