import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default {
  async getAllUsers(req: Request, res: Response) {
    try {
      const users = await prisma.user.findMany();
      return res.status(200).json(users);
    } catch (error) {
      return res.status(500).json({ message: (error as any).message });
    }
  },

  async signup(req: Request, res: Response) {
    const { name, email, password } = req.body;

    try {
      const existingUser = await prisma.user.findUnique({
        where: { email },
      });

      if (existingUser) {
        return res.status(400).json({
          error: true,
          message: 'Erro: Usuário já existe.',
        });
      }

      const newUser = await prisma.user.create({
        data: { name, email, password },
      });

      return res.status(201).json({
        error: false,
        message: 'Sucesso. Usuário cadastrado.',
        user: newUser,
      });
    } catch (error) {
      return res.status(500).json({ message: (error as any).message });
    }
  },

  async login(req: Request, res: Response) {
    const { email, password } = req.body;

    try {
      const user = await prisma.user.findUnique({
        where: { email },
      });

      if (!user) {
        return res.status(404).json({
          error: true,
          message: 'Usuário não encontrado.',
        });
      }

      if (user.password !== password) {
        return res.status(401).json({
          error: true,
          message: 'Credenciais inválidas.',
        });
      }

      return res.status(200).json({
        error: false,
        message: 'Login bem-sucedido.',
        user,
      });
    } catch (error) {
      return res.status(500).json({ message: (error as any).message });
    }
  },

  async getFavorites(req: Request, res: Response) {
    const { userId } = req.params;

    try {
      const user = await prisma.user.findUnique({
        where: { id: Number(userId) },
      });

      if (!user) {
        return res.status(404).json({
          error: true,
          message: 'Usuário não encontrado.',
        });
      }

      const favorites = await prisma.favorite.findMany({
        where: { userId: Number(userId) },
      });

      return res.status(200).json(favorites);
    } catch (error) {
      return res.status(500).json({ message: (error as any).message });
    }
  },

  async addFavorite(req: Request, res: Response) {
    const { userId } = req.params;
    const { title } = req.body;

    try {
      const user = await prisma.user.findUnique({
        where: { id: Number(userId) },
      });

      if (!user) {
        return res.status(404).json({
          error: true,
          message: 'Usuário não encontrado.',
        });
      }

      const newFavorite = await prisma.favorite.create({
        data: {
          title,
          userId: Number(userId),
        },
      });

      return res.status(201).json({
        error: false,
        message: 'Favorito adicionado com sucesso.',
        favorite: newFavorite,
      });
    } catch (error) {
      return res.status(500).json({ message: (error as any).message });
    }
  },
  async removeFavorite(req: Request, res: Response) {
    const { userId } = req.params;
    const { title } = req.body;
  
    try {
      const favorite = await prisma.favorite.findFirst({
        where: {
          title,
          userId: Number(userId),
        },
      });
  
      if (!favorite) {
        return res.status(404).json({
          error: true,
          message: 'Favorito não encontrado ou não pertence ao usuário.',
        });
      }
  
      await prisma.favorite.delete({
        where: { id: favorite.id },
      });
  
      return res.status(200).json({
        error: false,
        message: 'Favorito removido com sucesso.',
      });
    } catch (error) {
      return res.status(500).json({ message: (error as any).message });
    }
  }}