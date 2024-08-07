'use server';

const API_URL = 'http://localhost:3002';

export const loginUser = async (email: string, password: string) => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`Failed to login: ${errorMessage}`);
    }

    const logged = await response.json();
    return logged;
  } catch (error: any) {
    throw new Error(`Login failed: ${error.message}`);
  }
};

export const getUsers = async () => {
  try {
    const response = await fetch(API_URL);
    const users = await response.json();
    return users;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const createUser = async (password: string, email: string, name: string) => {
  try {
    const user = { password, email, name };
    const response = await fetch(`${API_URL}/signup`, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: { 'Content-Type': 'application/json' }
    });

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`Failed to create user: ${errorMessage}`);
    }

    const createdUser = await response.json();
    return createdUser;
  } catch (error: any) {
    throw new Error(`Failed to create user: ${error.message}`);
  }
};

// service.ts (ou onde você centraliza seus serviços)
export const getFavorites = async (userId: string) => {
  try {
    const response = await fetch(`${API_URL}/users/${userId}/favorites`);
    if (!response.ok) {
      throw new Error('Failed to fetch favorites');
    }
    const favorites = await response.json();
    return favorites;
  } catch (error: any) {
    throw new Error(`Failed to fetch favorites: ${error.message}`);
  }
};


export const addFavorite = async (userId: string, title: string) => {
  try {
    const response = await fetch(`${API_URL}/users/${userId}/favorites`, {
      method: 'POST',
      body: JSON.stringify({ title }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`Failed to add favorite: ${errorMessage}`);
    }

    const newFavorite = await response.json();
    return newFavorite;
  } catch (error: any) {
    throw new Error(`Failed to add favorite: ${error.message}`);
  }
};
export const removeFavorite = async (userId: string, favoriteId: string) => {
  try {
    const response = await fetch(`${API_URL}/users/${userId}/favorites/${favoriteId}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`Failed to remove favorite: ${errorMessage}`);
    }

    const deletedMessage = await response.json();
    return deletedMessage;
  } catch (error: any) {
    throw new Error(`Failed to remove favorite: ${error.message}`);
  }
};
