import React, { useState } from 'react';
import { LoginForm } from '@/features/auth/LoginForm';
import { Toast } from '@/shared/ui/Toast';

export const LoginPage: React.FC = () => {
  const [showToast, setShowToast] = useState(true);

  const handleCloseToast = () => {
    setShowToast(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">
          Sign in to your account
        </h2>
        <LoginForm />
      </div>

      <Toast
        message="Use email `user@gmail.com` and password `qwerty123`"
        show={showToast}
        onClose={handleCloseToast}
      />
    </div>
  );
};
