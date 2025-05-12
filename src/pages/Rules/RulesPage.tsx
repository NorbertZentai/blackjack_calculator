import React from 'react';
import InterpolatedText from '@/InterpolatedText';
import './RulesPage.scss';

const RulesPage: React.FC = () => {
  return (
    <div className="rules-page">
      <h1><InterpolatedText template="{{ RULES.TITLE }}" /></h1>
      <p><InterpolatedText template="{{ RULES.DESCRIPTION }}" /></p>
      <ul>
        <li><InterpolatedText template="{{ RULES.RULE_1 }}" /></li>
        <li><InterpolatedText template="{{ RULES.RULE_2 }}" /></li>
        <li><InterpolatedText template="{{ RULES.RULE_3 }}" /></li>
      </ul>
    </div>
  );
};

export default RulesPage;