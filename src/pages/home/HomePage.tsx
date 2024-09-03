import React from 'react';
import { Button } from '@/shared/ui/Button';
import { useLogout } from '@/features/auth/useLogout';
import { useAuth } from '@/core/auth/useAuth';

export const HomePage: React.FC = () => {
  const auth = useAuth();
  const email = auth.getEmail() || null;
  const isLoggedIn = auth.isLoggedIn();
  const logout = useLogout();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Hello world!</h1>
        {isLoggedIn && (
          <>
            <p className="text-xl my-4">
              Welcome <strong>{email}</strong>
            </p>

            <Button onClick={logout}>Logout</Button>
          </>
        )}
      </div>
    </div>
  );
};
