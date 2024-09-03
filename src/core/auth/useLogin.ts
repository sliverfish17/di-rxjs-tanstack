import { useState } from 'react';
import { fetchMock } from '@/core/api/httpService';
import { authService } from '@/core/auth/authService';

export const useLogin = () => {
  const [error, setError] = useState<string | null>(null);

  const login = async (email: string, password: string) => {
    try {
      const response = await fetchMock('/login', {
        method: 'POST',
        body: { email, password },
      });
      authService.login(response.token);
      setError(null);
    } catch (err) {
      setError('Login failed');
    }
  };

  return { login, error };
};
