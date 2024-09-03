import React from 'react';
import { useAuth } from '@/core/auth/AuthContext';

export const HomePage: React.FC = () => {
  const auth = useAuth();
  const email = auth.getEmail() || 'Unknown';

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Hello world!</h1>
        <p className="text-xl mt-4">
          You are logged in as <strong>{email}</strong>
        </p>
      </div>
    </div>
  );
};
