import { AuthState } from '@/types/authTypes';
import { BehaviorSubject } from 'rxjs';
import { injectable } from 'tsyringe';

@injectable()
export class AuthService {
  private authState = new BehaviorSubject<AuthState>({
    isAuthenticated: false,
    email: null,
  });

  get authStatus() {
    return this.authState.asObservable();
  }

  login(token: string, email: string) {
    localStorage.setItem('auth_token', token);
    this.authState.next({ isAuthenticated: true, email });
  }

  logout() {
    localStorage.removeItem('auth_token');
    this.authState.next({ isAuthenticated: false, email: null });
  }

  getEmail() {
    return this.authState.getValue().email;
  }

  isLoggedIn() {
    return this.authState.getValue().isAuthenticated;
  }
}
