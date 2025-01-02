import './AuthButton.css';

const AuthButton = ({ label, onClick }: { label: string; onClick: () => void }) => {
  return (
    <button className="auth-button" onClick={onClick}>
      {label}
    </button>
  );
};

export default AuthButton;