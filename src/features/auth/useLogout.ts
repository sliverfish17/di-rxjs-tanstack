import { useAuth } from '@/core/auth/useAuth';
import { useNavigate } from '@tanstack/react-router';

export const useLogout = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const logout = () => {
    auth.logout();
    alert('You have been logged out.');
    navigate({ to: '/login' });
  };

  return logout;
};
