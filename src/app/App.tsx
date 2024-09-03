import React from 'react';
import { createRouter, RouterProvider } from '@tanstack/react-router';
import { AuthProvider } from '@/core/auth/AuthContext';
import { routeTree } from '@/routeTree.gen';
const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export const App: React.FC = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
};
