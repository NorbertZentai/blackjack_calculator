import React from 'react';
import './HomePage.scss';
import InterpolatedText from '@InterpolatedText';

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <h1><InterpolatedText template="{{ APP.TITLE }}" /></h1>
      <p><InterpolatedText template="{{ APP.DESCRIPTION }}" /></p>
    </div>
  );
};

export default HomePage;