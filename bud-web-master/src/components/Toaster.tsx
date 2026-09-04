import React, { useEffect, useState } from 'react';

interface ToasterProps {
  success: boolean;
  toastMessage: string;
  show: boolean;
  onClose: () => void;
}

const Toaster: React.FC<ToasterProps> = ({ success, toastMessage, show, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (show) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
        setTimeout(onClose, 300); // Wait for fade-out animation before calling onClose
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  return (
    <div className={`fixed bottom-4 right-4 z-50 transition-all duration-300 transform ${
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
    }`}>
      <div className={`flex items-center p-4 rounded-md shadow-lg ${
        success ? 'bg-green-600' : 'bg-red-600'
      } text-white max-w-xs`}>
        <div className="mr-3">
          {success ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          )}
        </div>
        <p className="text-sm font-medium">{toastMessage}</p>
        <button
          onClick={() => {
            setIsVisible(false);
            setTimeout(onClose, 300);
          }}
          className="ml-auto"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Toaster;