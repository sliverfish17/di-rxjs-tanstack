import React, { createContext, ReactNode, useContext } from 'react';
import { authService } from './authService';

const AuthContext = createContext(authService);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <AuthContext.Provider value={authService}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
