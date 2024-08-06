'use client'

import React, { useState, useEffect } from 'react';
import { LoginForm } from '@/components/LoginForm';
import { loginUser } from '@/app/src/services/service';
import Home from '@/app/page'; 

const LoginPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);



  // Verifica o localStorage ao inicializar o componente
  useEffect(() => {
    const userId = localStorage.getItem('userId');
    if (userId) {
      setIsLoggedIn(true);




    }
  }, []);

  const handleLogin = async (email: string, password: string) => {
    try {

      const userData = await loginUser(email, password);
      console.log('Login successful:', userData);
      console.log(userData)
      localStorage.setItem('userId', userData.user.id); // Armazenar o userId no localStorage
      setIsLoggedIn(true);
    } catch (error) {
      console.error('Login failed:', (error as any).message);
    }
  };

  if (isLoggedIn) {
    return <Home />;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <LoginForm onLogin={handleLogin} />
    </div>
  );
};

export default LoginPage;
