'use server'
import { z } from 'zod';
import UserCreateInputSchema from '../types/users/UserCreateInputSchema'

const API_URL = 'http://localhost:3001/';

export const getUsers = async () => {
  try {
    const response = await fetch(API_URL);
    const users = await response.json();
    return (users);
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const deleteUser = async (id: number) => {
  try {
    await fetch(API_URL, {
      method: 'DELETE',
      body: JSON.stringify({ id }),
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const createUser = async (values: z.infer<typeof UserCreateInputSchema>) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      body: JSON.stringify(values),
      headers: { 'Content-Type': 'application/json' }
    });
    const createdUser = await response.json();
    return createdUser;
  } catch (error: any) {
    throw new Error(error.message);
  }
}
