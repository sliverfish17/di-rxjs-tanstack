import { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { authService } from '@/core/auth/authService';
import { fetchMock } from '@/core/api/httpService';

export const useLogin = () => {
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const login = async (email: string, password: string) => {
    try {
      const response = await fetchMock('/login', {
        method: 'POST',
        body: { email, password },
      });
      authService.login(response.token, email);
      setError(null);
      alert('Login successful!'); // Show success alert
      navigate({ to: '/' }); // Redirect to home page
    } catch (err) {
      setError('Login failed');
    }
  };

  return { login, error };
};
