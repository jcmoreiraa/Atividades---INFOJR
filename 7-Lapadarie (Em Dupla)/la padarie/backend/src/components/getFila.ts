import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

export default {
    async getFila(req: Request, res: Response) {
        try {
            const fila = await prisma.fila.findMany();

            res.json(fila);
        } catch (error) {
            console.error('Erro ao buscar fila:', error);
            res.status(500).json({ error: 'Erro ao buscar fila' });
        }
    }
}
