import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();



export default {
  async pessoa(req: Request, res: Response) {
    try {
      
      const { nome, paes } = req.body;

      
      if (!nome || !paes ) {
        return res.status(400).json({ error: "Nome e paes são obrigatórios" });
      }

      const valor = paes * 0.5;

      const pessoa = await prisma.fila.create({
        data:{
            nome,
            paes,
            valor,
        }
      });

      res.status(201).json(pessoa);
    } catch (error) {
      console.error("Erro ao criar pessoa:", error);
      res.status(500).json({ error: "Erro ao criar pessoa" });
    }
  }
};
