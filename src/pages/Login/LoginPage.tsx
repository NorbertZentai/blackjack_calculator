// src/pages/LoginPage.tsx
import React from 'react';
import LoginForm from './LoginForm';
import './LoginPage.scss';

const LoginPage: React.FC = () => {
  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Bejelentkezés</h2>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
