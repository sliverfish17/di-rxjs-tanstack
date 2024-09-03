import React, { useState, useEffect } from 'react';

interface ToastProps {
  message: string;
  show: boolean;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, show, onClose }) => {
  const [visible, setVisible] = useState(show);

  useEffect(() => {
    setVisible(show);
  }, [show]);

  if (!visible) return null;

  return (
    <div
      onClick={() => {
        setVisible(false);
        onClose();
      }}
      className="fixed top-4 right-4 bg-blue-500 text-white p-4 rounded shadow-lg transition-all transform duration-300 ease-in-out cursor-pointer"
    >
      {message}
    </div>
  );
};
