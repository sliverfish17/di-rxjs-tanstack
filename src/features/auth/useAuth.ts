import { authService } from '@/core/auth/authService';
import { useObserve } from '@/shared/hooks/useObserve';

export const useAuthState = () => {
  return useObserve(authService.isAuthenticated);
};
