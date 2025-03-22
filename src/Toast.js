// Toast.js
import React, { useEffect } from 'react';

const Toast = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000); // Auto-close the toast after 3 seconds

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed bottom-4 right-4 bg-black text-white px-4 py-3 rounded-lg shadow-lg z-50">
      {message}
    </div>
  );
};

export default Toast;
