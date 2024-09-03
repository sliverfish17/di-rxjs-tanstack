import { BehaviorSubject } from 'rxjs';

export class AuthService {
  private authState = new BehaviorSubject<boolean>(false);

  get isAuthenticated() {
    return this.authState.asObservable();
  }

  login(token: string) {
    localStorage.setItem('auth_token', token);
    this.authState.next(true);
  }

  logout() {
    localStorage.removeItem('auth_token');
    this.authState.next(false);
  }
}

export const authService = new AuthService();
