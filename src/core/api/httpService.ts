export const fetchMock = async (url: string, options?: any) => {
  if (url === '/login' && options?.method === 'POST') {
    if (
      options.body.email === 'user@gmail.com' &&
      options.body.password === 'qwerty123'
    ) {
      return { token: 'mock-token' };
    } else {
      throw new Error('Invalid credentials');
    }
  }
  throw new Error('Not Found');
};
