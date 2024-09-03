import React, { createContext, ReactNode, useContext } from 'react';
import { useAuth } from '@/core/auth/useAuth';
import { AuthService } from '@/core/auth/authService';

const AuthContext = createContext<AuthService | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const authService = useAuth();

  return (
    <AuthContext.Provider value={authService}>{children}</AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }
  return context;
};
