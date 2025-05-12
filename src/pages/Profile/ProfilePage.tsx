import React from 'react';
import './ProfilePage.scss';
import InterpolatedText from '@InterpolatedText';

const ProfilePage: React.FC = () => {
  return (
    <div className="profile-page">
      <h1><InterpolatedText template="{{ PROFILE.TITLE }}" /></h1>
      <div className="profile-details">
        <p><InterpolatedText template="{{ PROFILE.USERNAME }}" />: JohnDoe</p>
        <p><InterpolatedText template="{{ PROFILE.EMAIL }}" />: john@example.com</p>
        <p><InterpolatedText template="{{ PROFILE.JOINED }}" />: 2023.04.12</p>
      </div>
    </div>
  );
};

export default ProfilePage;