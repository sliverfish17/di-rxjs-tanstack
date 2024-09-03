import { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { AuthService } from '@/core/auth/authService';
import { fetchMock } from '@/core/api/httpService';
import { API_METHODS } from '@/types/apiTypes';
import { container } from '@/core/di/container';

export const useLogin = () => {
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const authService = container.resolve(AuthService); 

  const login = async (email: string, password: string) => {
    try {
      const response = await fetchMock('/login', {
        method: API_METHODS.POST,
        body: { email, password },
      });
      authService.login(response.token, email);
      setError(null);
      alert('Login successful!'); 
      navigate({ to: '/' }); 
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  return { login, error };
};
