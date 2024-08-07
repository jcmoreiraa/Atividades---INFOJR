import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

const findUser = async (id: number) => {
  const user = await prisma.user.findUnique({
    where: { id }
  });
  if (!user) {
    throw new Error('User not found');
  }
  return user;
}

export const listUsers = async (_: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany();
    return res.json(users);
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
}

export const createUser = async (req: Request, res: Response) => {
  const { name, breads } = req.body;

  try {
    const users = await prisma.user.create({
      data: {
        name,
        breads
      }
    });
    return res.json(users);
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
}

export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.body;
  if (!id) return res.status(400).json({ error: 'ID is required' });

  try {
    const user = await findUser(id);
    await prisma.user.delete({
      where: { id }
    });
    return res.json({ message: `User ${user.name} deleted` });
  } catch (error: any) {
    return res.status(404).json({ error: error.message });
  }
}


export const deleteAllUsers = async (_: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany();

    if (users.length === 0) {
      return res.status(404).json({
        error: true,
        message: 'Error: There are no users',
      });
    }

    await prisma.user.deleteMany();

    return res.status(200).json({
      error: false,
      message: 'Success: All users have been deleted',
    });
  } catch (error) {
    console.error('Error deleting users:', error);
    return res.status(500).json({
      error: true,
      message: 'Internal Server Error',
    });
  }
};