import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export default {
  async entrada(req: Request, res: Response) {
    try {
      
      const somaValorFila = await prisma.fila.aggregate({
        _sum: {
          valor: true,
        },
      });

     
      const somaValorHistorico = await prisma.historico.aggregate({
        _sum: {
          valor: true,
        },
      });


      const somaTotalValor = (somaValorFila?._sum?.valor || 0) + (somaValorHistorico?._sum?.valor || 0);
      console.log("Soma total de valor de entrada:", somaTotalValor);

      res.status(200).json({ somaValorEntrada: somaTotalValor });
    } catch (error) {
      console.error("Erro ao somar valor de entrada:", error);
      res.status(500).json({ error: "Erro ao somar valor de entrada" });
    }
  }
};

