import express from 'express'
import controllers from './UserController/controllers'
import cors from 'cors'

const app = express();
const PORT = process.env.PORT || 3002;
app.use(cors());


app.use(express.json());
app.post('/', controllers.signup);
app.post('/login', controllers.login);
app.get('/users', controllers.getAllUsers); 
app.get('/users/:userId/favorites', controllers.getFavorites);
app.post('/users/:userId/favorites', controllers.addFavorite);
app.delete('/users/:userId/favorites/:id', controllers.removeFavorite);



// Iniciar o servidor
app.listen(PORT, async () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);})

