import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export default {
  async somarQuantidadePaes(req: Request, res: Response) {
    try {
      
      const somaQuantidadePaes = await prisma.fila.aggregate({
        _sum: {
          paes: true,
        },
      });

      res.status(200).json({ somaQuantidadePaes });
    } catch (error) {
      console.error("Erro ao somar quantidade de pães:", error);
      res.status(500).json({ error: "Erro ao somar quantidade de pães" });
    }
  }
};
