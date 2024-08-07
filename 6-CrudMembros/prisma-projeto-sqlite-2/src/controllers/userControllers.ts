import { Request, Response } from 'express';
import { prisma } from "../database";
import { hashSync, compareSync } from 'bcrypt';
import { request } from 'https';
import * as jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../secrets';

export default {
    async createUser(request: Request, response: Response) {
        try {
            const { name, email, idade, cidade, estado, password } = request.body;
            const userExist = await prisma.user.findUnique({
                where: {
                    email: email,
                }
            });

            if (userExist) {
                return response.json({
                    error: true,
                    message: 'Erro: Usuário já existe.'
                });
            }

            const user = await prisma.user.create({
                data: { name, email, idade, cidade, estado, password}
            });

            return response.json({
                error: false,
                message: 'Sucesso. Usuário cadastrado.',
                user
            });

        } catch (error) {
            return response.json({ message: error.message });
        }
    },

    async getUserById(request: Request, response: Response) {
        try {
            const { id } = request.params;
            const user = await prisma.user.findUnique({
                where: {
                    id:  Number(id)
                }
            });

            if (!user) {
                return response.json({
                    error: true,
                    message: 'Erro: Usuário não encontrado.'
                });
            }

            return response.json({
                error: false,
                message: 'Sucesso. Usuário encontrado.',
                user
            });

        } catch (error) {
            return response.json({ message: error.message });
        }
    },

    async getUserByEmail(request: Request, response: Response) {
        try {
            const { email } = request.params;
            const user = await prisma.user.findUnique({
                where: {
                    email: String(email),
                }
            });

            if (!user) {
                return response.json({
                    error: true,
                    message: 'Erro: Usuário não encontrado.'
                });
            }

            return response.json({
                error: false,
                message: 'Sucesso. Usuário encontrado.',
                user
            });

        } catch (error) {
            return response.json({ message: error.message });
        }
    },

    async getUserByName(request: Request, response: Response) {
        try {
            const  { name }  = request.params;
            const user = await prisma.user.findMany({
                where: {
                    name: String(name),
                }
            });

            if (user.length === 0) {
                return response.json({
                    error: true,
                    message: 'Erro: Usuário não encontrado.'
                });
            }

            return response.json({
                error: false,
                message: 'Sucesso. Usuário encontrado.',
                user
            });

        } catch (error) {
            return response.json({ message: error.message });
        }
    },
    async deleteUserById(request: Request, response: Response) {
        try {
            const { id } = request.params;
            const user = await prisma.user.findUnique({
                where: { id: Number(id) }
            });

            if (!user) {
                return response.status(404).json({
                    error: true,
                    message: 'Erro: Usuário não encontrado.'
                });
            }

            await prisma.user.delete({
                where: { id: Number(id) }
            });

            return response.json({
                error: false,
                message: 'Sucesso. Usuário deletado.',
                user
            });

        } catch (error) {
            return response.json({ message: error.message });
        }
    },
    async updateUserById(request: Request, response: Response) {
        try {
            const { id } = request.params;
            const { name, email, idade, cidade, estado} = request.body;

            const user = await prisma.user.findUnique({
                where: { id: Number(id) }
            });

            if (!user) {
                return response.json({
                    error: true,
                    message: 'Erro: Usuário não encontrado.'
                });
            }

            const emailExist = await prisma.user.findUnique({
                where: { email: email }
            });

            if (emailExist && emailExist.id !== Number(id)) {
                return response.status(400).json({
                    error: true,
                    message: 'Erro: Email já está em uso por outro usuário.'
                });
            }

            const updatedUser = await prisma.user.update({
                where: { id: Number(id) },
                data: { name, email, idade, cidade, estado }
            });

            return response.json({
                error: false,
                message: 'Sucesso. Usuário atualizado.',
                user: updatedUser
            });

        } catch (error) {
            return response.json({ message: error.message });
        }
    },
    
    async signUp(request:Request, response:Response){
        const {email, name, password, idade, cidade, estado} = request.body;
        const userExist = await prisma.user.findUnique({
            where :{ email: email}
        })

        if (userExist) {
            return response.json({
                error: true,
                message: 'Erro: Usuário já existe.'
            });}
    const user = await prisma.user.create({

            data:{ 
            name,
            email,
            password:hashSync(password,10),
            idade,
            cidade,
            estado
        }

            
        })
    
    response.json(user);
},





    async login(request: Request, response: Response)  {
        const {email, password} = request.body;

        const userExist = await prisma.user.findUnique({
            where :{ email: email}
        })

        if (!userExist) {
            return response.json({
                error: true,
                message: 'Erro: Usuário não encontrado.'
            });
        }
        if(!compareSync(password, userExist.password)){
            return response.json({
                error:true,
                message:'Erro: Senha incorreta'
            })

        }
        
        const token = jwt.sign({
            userId: userExist.id
        }, JWT_SECRET)
        response.json({userExist, token});
        
        
    },
    async getAllUsers(request, response) {
        try {
            const users = await prisma.user.findMany();
            
            if (users.length === 0) {
                return response.json({
                    error: true,
                    message: 'Erro: Não há usuários.'
                });
            }
    
            return response.json({
                error: false,
                message: 'Sucesso. Usuários encontrados.',
                users
            });
        } catch (error) {
            return response.json({
                error: true,
                message: error.message
            });
        }}}
