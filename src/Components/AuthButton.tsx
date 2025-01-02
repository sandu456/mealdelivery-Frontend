import React from 'react';
import './AuthButton.css';

interface AuthButtonProps {
  label: string; // The text to display on the button
  onClick: () => void; // The function to execute when the button is clicked
  disabled?: boolean; // Optional: If true, disables the button
}

const AuthButton: React.FC<AuthButtonProps> = ({ label, onClick, disabled = false }) => {
  return (
    <button className={'auth-button ${disabled ? 'disabled' : ''}'} onClick={onClick} disabled={disabled}>
        {label}
        </button>
  );
};

export default AuthButton;