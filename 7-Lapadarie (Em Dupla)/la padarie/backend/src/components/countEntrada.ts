import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export default {
  async entrada(req: Request, res: Response) {
    try {
      
      const entrada = await prisma.fila.aggregate({
        _sum: {
          valor: true,
        },
      });

      res.status(200).json({ entrada });
    } catch (error) {
      console.error("Erro ao somar valores:", error);
      res.status(500).json({ error: "Erro ao somar valores" });
    }
  }
};