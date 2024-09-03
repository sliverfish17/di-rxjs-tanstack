import { container } from 'tsyringe';
import { AuthService } from '@/core/auth/authService';

export const useAuth = (): AuthService => {
  return container.resolve(AuthService);
};
