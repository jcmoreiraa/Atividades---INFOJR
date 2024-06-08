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

export const listUsers = async (): Promise<Array<Pick<User, "id" | "nome" | "email">>> => {
    return db.user.findMany({
        select: {
            id: true,
            nome: true,
            email: true,
        },
    });
};

export const getUser = async (id: number): Promise<Pick<User, "id" | "nome" | "email"> | null> => {
    return db.user.findUnique({
        where: {
            id,
        },
        select: {
            id: true,
            nome: true,
            email: true,
        },
    }) as Promise<Pick<User, "id" | "nome" | "email"> | null>;
};

export const createUser = async (user: Omit<User, "id">): Promise<Pick<User, "id" | "nome" | "email">> => {
    const { nome, email, senha, idade, estado, cidade } = user;
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
    }) as Promise<Pick<User, "id" | "nome" | "email">>;
};

export const updateUser = async(user: Omit<User, "id">, id: number): Promise<Pick<User, "id" | "nome" | "email">> => {
    const { nome, email } = user;
    return db.user.update({
        where: {
            id,
        },
        data: {
            nome,
            email,
        },
        select: {
            id: true,
            nome: true,
            email: true,
        },
    }) as Promise<Pick<User, "id" | "nome" | "email">>;
};

export const deleteUser = async (id: number): Promise<void> => {
    await db.user.delete({
        where: {
            id,
        },
    });
};

