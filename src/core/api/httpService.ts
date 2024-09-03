import { API_METHODS } from "@/types/apiTypes";

const MOCKED_EMAIL = 'user@gmail.com'
const MOCKED_PASSWORD = 'qwerty123'

export const fetchMock = async (url: string, options?: { method: API_METHODS; body: { email: string; password: string } }) => {
  if (url === '/login' && options?.method === API_METHODS.POST) {
    if (options.body.email === MOCKED_EMAIL && options.body.password === MOCKED_PASSWORD) {
      return { token: 'mock-token' };
    } else {
      throw new Error('Invalid credentials');
    }
  }
  throw new Error('Not Found');
};
