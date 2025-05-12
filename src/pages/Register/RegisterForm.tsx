import React, { useState } from 'react';

const RegisterForm: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert('A jelszavak nem egyeznek!');
      return;
    }

    console.log('Regisztrációs adatok:', formData);
    // TODO: Küldés backendnek
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="Felhasználónév"
        value={formData.username}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Jelszó"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="confirmPassword"
        placeholder="Jelszó újra"
        value={formData.confirmPassword}
        onChange={handleChange}
        required
      />
      <button type="submit">Regisztráció</button>
    </form>
  );
};

export default RegisterForm;