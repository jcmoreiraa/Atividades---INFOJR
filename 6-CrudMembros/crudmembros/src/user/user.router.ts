import express from "express";
import type { Request, Response } from "express";
import { body, validationResult } from "express-validator";

import * as UserService from "./user.service";

export const userRouter = express.Router();

// GET: Lista de todos os Users com certo nome
userRouter.get("/nome/:nome", async (request: Request, response: Response) => {
    const nome: string = request.params.nome;
    try {
      const users = await UserService.listUsers(nome);
      return response.status(200).json(users);
    } catch (error: any) {
      return response.status(500).json(error.message);
    }
  });

// GET: Um único User por ID
userRouter.get("/id/:id", async (request: Request, response: Response) => {
    const id: number = parseInt(request.params.id, 10);
    try {
      const user = await UserService.getUserByID(id);
      if (user) {
        return response.status(200).json(user);
      }
      return response.status(404).json("User could not be found");
    } catch (error: any) {
      return response.status(500).json(error.message);
    }
  });

  // GET: Um único User por email
userRouter.get("/email/:email", async (request: Request, response: Response) => {
  const email: string = String(request.params.email);
  try {
    const user = await UserService.getUserByEmail(email);
    if (user) {
      return response.status(200).json(user);
    }
    return response.status(404).json("User could not be found");
  } catch (error: any) {
    return response.status(500).json(error.message);
  }
});

  // POST: Criar User
// Params: nome, email,senha, idade, estado, cidade
userRouter.post(
    "/",
    body("nome").isString(),
    body("email").isString(),
    body("senha").isString(),
    body("idade").isInt(),
    body("estado").isString(),
    body("cidade").isString(),
    async (request: Request, response: Response) => {
      const errors = validationResult(request);
      if (!errors.isEmpty()) {
        return response.status(400).json({ errors: errors.array() });
      }
      try {
        const user = request.body;
        const newUser = await UserService.createUser(user);
        return response.status(201).json(newUser);
      } catch (error: any) {
        return response.status(500).json(error.message);
      }
    }
  );

  // PUT: Atualizando User por ID
// Params: nome
userRouter.put(
    "/:id",
    body("nome").isString(),
    async (request: Request, response: Response) => {
      const errors = validationResult(request);
      if (!errors.isEmpty()) {
        return response.status(400).json({ errors: errors.array() });
      }
      const id: number = parseInt(request.params.id, 10);
      try {
        const user = request.body;
        const updatedUser = await UserService.updateUser(user, id);
        return response.status(200).json(updatedUser);
      } catch (error: any) {
        return response.status(500).json(error.message);
      }
    }
  );
  
  // DELETE: Deletar User por ID
userRouter.delete("/:id", async (request: Request, response: Response) => {
    const id: number = parseInt(request.params.id, 10);
    try {
      await UserService.deleteUser(id);
      return response.status(204).json("User has been successfully deleted");
    } catch (error: any) {
      return response.status(500).json(error.message);
    }
  });