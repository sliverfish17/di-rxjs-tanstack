import { BehaviorSubject } from 'rxjs';

class AuthService {
  private authState = new BehaviorSubject<boolean>(false);

  get isAuthenticated() {
    return this.authState.asObservable();
  }

  login() {
    this.authState.next(true);
  }

  logout() {
    this.authState.next(false);
  }
}

export const authService = new AuthService();
