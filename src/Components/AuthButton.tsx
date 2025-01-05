import React from 'react';
import './AuthButton.css';

interface AuthButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

const AuthButton: React.FC<AuthButtonProps> = ({
  label,
  onClick,
  disabled = false,
}) => {
  return (
    <button
      className={`auth-button ${disabled ? 'disabled' : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default AuthButton;
