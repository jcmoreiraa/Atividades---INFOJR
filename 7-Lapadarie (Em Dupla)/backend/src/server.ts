import express from 'express';
import { userRouter } from './routes/routes';

const port = Number(process.env.EXPRESS_PORT) || 3004;

const app = express();
app.use(express.json());

app.use(userRouter)

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
