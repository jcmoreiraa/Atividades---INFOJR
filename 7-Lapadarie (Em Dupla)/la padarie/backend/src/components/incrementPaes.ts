import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export default {
  async incrementarPaes(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id, 10);
      const { quant } = req.body;

      console.log(`Recebido id: ${id}, quant: ${quant}`);

      // Validar a entrada 'quant'
      if (!quant || typeof quant !== "number" || quant <= 0) {
        console.error("Quantidade inválida");
        return res
          .status(400)
          .json({ error: "A quantidade deve ser um número positivo" });
      }

      console.log(
        `Tentando atualizar a pessoa com ID: ${id} com quant: ${quant}`
      );

      // Obter a pessoa antes de atualizar para calcular o novo valor corretamente
      const pessoaAntes = await prisma.fila.findUnique({
        where: { id: id },
      });

      if (!pessoaAntes) {
        return res.status(404).json({ error: "Pessoa não encontrada" });
      }

      // Calcular o novo valor com base na quantidade de pães
      const precoPorPao = 0.5; // Defina o preço por pão conforme necessário
      const valorAtualizado =
        pessoaAntes.valor + quant * precoPorPao;

      // Atualizar no banco de dados usando Prisma
      const pessoa = await prisma.fila.update({
        where: { id: id },
        data: {
          paes: {
            increment: quant,
          },
          valor: parseFloat(valorAtualizado.toFixed(2)), // Arredonda para 2 casas decimais
        },
      });

      console.log("Atualização bem-sucedida:", pessoa);
      res.status(200).json(pessoa);
    } catch (error) {
      console.error("Erro ao incrementar quantidade de pães:", error);
      res
        .status(500)
        .json({ error: "Erro ao incrementar quantidade de pães" });
    } finally {
      await prisma.$disconnect(); // Desconectar o cliente Prisma
    }
  },
};
