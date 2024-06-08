import { db } from "../utils/db.server";

type User = {
    id: number;
    nome: string;
    email: string;
    senha: string;
    idade: number;
    estado: string;
    cidade: string;
}

export const listUsers = async (nome: string): Promise<Array<Pick<User, "id" | "nome" | "email">>> => {
    return db.user.findMany({
        where: {
            nome: {
              contains: nome,  
            },
        },
        select: {
            id: true,
            nome: true,
            email: true,
        },
    });
};

export const getUserByID = async (id: number): Promise<Pick<User, "id" | "nome" | "email"> | null> => {
    return db.user.findUnique({
        where: {
            id: id,
        },
        select: {
            id: true,
            nome: true,
            email: true,
        },
    });
};

export const getUserByEmail = async (email: string): Promise<Pick<User, "id" | "nome" | "email"> | null> => {
    return db.user.findUnique({
        where: {
            email: email,
        },
        select: {
            id: true,
            nome: true,
            email: true,
        },
    });
};

type CreateUserResult = Pick<User, "id" | "nome"> | { error: string };

export const createUser = async (user: Omit<User, "id">): Promise<CreateUserResult> => {
    const { nome, email, senha, idade, estado, cidade } = user;

    const existingUserByEmail = await db.user.findFirst({ where: { email } });

    if (existingUserByEmail) {
        return { error: 'Já existe um usuário com este email.' };
    };

    return db.user.create({
        data: {
            nome,
            email,
            senha,
            idade,
            estado,
            cidade,
        },
        select: {
            id: true,
            nome: true,
            email: true,
        },
    });
};

type UpdateUserResult = Pick<User, "id" | "nome"> | { error: string };


export const updateUser = async(user: Omit<User, "id">, id: number): Promise<UpdateUserResult> => {
    const { nome, email } = user;

    const existingUserByName = await db.user.findFirst({ where: { nome } });
    const existingUserByEmail = await db.user.findFirst({ where: { email } });


    if ((existingUserByName && existingUserByName.id !== id) && (existingUserByEmail && existingUserByEmail.email !== email)) {
        return { error: 'Já existe um usuário com este nome.' };
    };

    return db.user.update({
        where: {
            id,
        },
        data: {
            nome,
        },
        select: {
            id: true,
            nome: true,
            email: true,
        },
    });
};

export const deleteUser = async (id: number): Promise<void> => {
    await db.user.delete({
        where: {
            id,
        },
    });
};

