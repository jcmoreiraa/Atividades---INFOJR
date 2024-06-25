import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export default {
  async somarQuantidadePaes(req: Request, res: Response) {
    try {
      
      const somaPaesFila = await prisma.fila.aggregate({
        _sum: {
          paes: true,
        },
      });

      const somaPaesHistorico = await prisma.historico.aggregate({
        _sum: {
          paes: true,
        },
      });

      
      const somaTotalPaes = (somaPaesFila?._sum?.paes || 0) + (somaPaesHistorico?._sum?.paes || 0);

      res.status(200).json({ somaQuantidadePaes: somaTotalPaes });
    } catch (error) {
      console.error("Erro ao somar quantidade de pães:", error);
      res.status(500).json({ error: "Erro ao somar quantidade de pães" });
    }
  }
};

