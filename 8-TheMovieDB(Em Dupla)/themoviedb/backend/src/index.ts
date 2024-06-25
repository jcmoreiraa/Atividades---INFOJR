import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import axios from 'axios';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { authMiddleware } from './middleware/auth';
import cors from 'cors';

dotenv.config();

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 3000;
const TMDB_API_KEY = process.env.TMDB_API_KEY;
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key';

app.use(express.json());
app.use(cors());

// Registro de usuário
app.post('/register', async (req: Request, res: Response) => {
  const { username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const user = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });
    res.status(201).json({ message: 'Usuário criado com sucesso', user });
  } catch (error) {
    res.status(500).json({ error: 'Falha ao registrar usuário' });
  }
});

// Login de usuário
app.post('/login', async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: 'E-mail ou senha inválido' });
    }

    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Falha ao logar usuário' });
  }
});

// Adicionar um filme à lista de favoritos do usuário
app.post('/favorites', authMiddleware, async (req: Request, res: Response) => {
  const { tmdbId } = req.body;
  const userId = req.user!.userId;

  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${tmdbId}?api_key=${TMDB_API_KEY}&language=pt-BR`);
    const movieDetails = response.data;
    const genre = movieDetails.genres && movieDetails.genres.length > 0 ? movieDetails.genres[0].name : 'unknown';

    const favorite = await prisma.favorite.create({
      data: {
        userId,
        tmdbId,
        genre, 
      },
    });
    res.status(201).json({ message: 'Filme adicionado aos favoritos', favorite });
  } catch (error) {
    res.status(500).json({ error: 'Falha ao adicionar filme aos favoritos' });
  }
});


// Ver filmes favoritos do usuário
app.get('/favorites', authMiddleware, async (req: Request, res: Response) => {
  const userId = req.user!.userId;

  try {
    const favorites = await prisma.favorite.findMany({
      where: { userId },
    });

    const favoriteMovies = await Promise.all(
      favorites.map(async (favorite) => {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${favorite.tmdbId}?api_key=${TMDB_API_KEY}&language=pt-BR`);
        return response.data;
      })
    );

    res.json(favoriteMovies);
  } catch (error) {
    res.status(500).json({ error: 'Falha ao buscar filmes favoritos' });
  }
});

// Remover um filme da lista de favoritos do usuário
app.delete('/favorites/:tmdbId', authMiddleware, async (req: Request, res: Response) => {
  const userId = req.user!.userId;
  const tmdbId = parseInt(req.params.tmdbId, 10);

  try {
    await prisma.favorite.deleteMany({
      where: {
        userId,
        tmdbId,
      },
    });
    res.json({ message: 'Filme removido dos favoritos' });
  } catch (error) {
    res.status(500).json({ error: 'Falha ao remover filme dos favoritos' });
  }
});

// Ver nome de usuário
app.get('/user', authMiddleware, async (req: Request, res: Response) => {
  const userId = req.user!.userId;

  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {username: true},
    });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Falha ao buscar usuário"});
  }
});

app.listen(PORT, () => {
  console.log(`Servidor funcionando na porta ${PORT}`);
});

