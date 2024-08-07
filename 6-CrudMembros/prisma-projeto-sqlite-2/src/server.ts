
import Express from 'express';
import userControllers from './controllers/userControllers';
const app = Express();
app.use(Express.json());
const PORT = 3001;

app.get('/', (request,response) => {
    return response.send({message: "Roi"});
});

app.post('/createUser', userControllers.createUser);
app.get('/getUserById/:id', userControllers.getUserById);
app.get('/getUserByEmail/:email', userControllers.getUserByEmail);
app.get('/getUserByName/:name', userControllers.getUserByName);
app.delete('/deleteUserById/:id', userControllers.deleteUserById);
app.put('/updateUserById/:id', userControllers.updateUserById);
app.get('/login', userControllers.login);
app.post('/signUp', userControllers.signUp);
app.get('/getAllUsers', userControllers.getAllUsers);


app.listen(PORT, ()=> console.log('Rodando'));


