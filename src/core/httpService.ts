export const fetchMock = async (url: string) => {
  if (url === '/login') {
    return { token: 'mock' };
  }
  throw new Error('Not Found');
};
