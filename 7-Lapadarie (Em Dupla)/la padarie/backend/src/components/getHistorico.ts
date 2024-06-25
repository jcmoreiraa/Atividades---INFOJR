import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

export default {
    async getHistorico(req: Request, res: Response) {
        try {
            const historico = await prisma.historico.findMany({
                orderBy: {
                    createdAt: 'desc', 
                },
            });

            res.json(historico);
        } catch (error) {
            console.error('Erro ao buscar histórico:', error);
            res.status(500).json({ error: 'Erro ao buscar histórico' });
        }
    }
}
