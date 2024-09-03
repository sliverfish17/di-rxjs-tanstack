import { container } from 'tsyringe';
import { AuthService } from '@/core/auth/authService';

container.registerSingleton(AuthService);

export { container };
