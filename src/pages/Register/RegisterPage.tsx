import React from 'react';
import RegisterForm from './RegisterForm';

const RegisterPage: React.FC = () => {
  return (
    <div className="auth-page">
      <h1>Regisztráció</h1>
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;