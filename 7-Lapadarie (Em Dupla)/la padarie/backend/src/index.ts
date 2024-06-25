import express, { Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { configDotenv } from "dotenv"
import addPessoa from './components/addPessoa';
import countPaes from './components/countPaes';
import countPessoa from './components/countPessoa';
import countEntrada from './components/countEntrada';
import deletePessoa from './components/deletePessoa';
import getHistorico from './components/getHistorico';
import getFila from './components/getFila';
import incrementPaes from './components/incrementPaes';

configDotenv()

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const port = 3001
const router = express.Router();

app.use(cors());


/* CRIAR PESSOA */
app.post('/create', addPessoa.pessoa);


/* RETORNAR QUANT: PESSOAS, PAES, ENTRADA */
app.get('/totalpaes' , countPaes.somarQuantidadePaes);

app.get('/totalpessoas' , countPessoa.contabilizarPessoas);

app.get('/totalentrada' , countEntrada.entrada);


/* DELETAR PESSOA DA FILA E COLOCÁ-LA NO HISTORICO*/
app.delete('/delete/:id', deletePessoa.deleteUser);


/* ADICIONAR PAES*/
app.post('/addpao/:id', incrementPaes.incrementarPaes);


/* RETORNAR HISTÓRICO E FILA*/
router.get('/historico', getHistorico.getHistorico);
router.get('/fila', getFila.getFila);
app.use('/', router);


app.listen(port, () => {
    console.log(`Server is running ${port}`)
  })
  