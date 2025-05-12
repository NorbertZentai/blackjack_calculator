import React from 'react';
import { useTranslation } from 'react-i18next';

type InterpolatedTextProps = {
  template: string;
};

/**
 * Lecseréli a {{ kulcs }} formátumú helyeket a fordított szövegre.
 */
const InterpolatedText: React.FC<InterpolatedTextProps> = ({ template }) => {
  const { t } = useTranslation();

  const replacedText = template.replace(/\{\{\s*(.*?)\s*\}\}/g, (_, key) => {
  const trimmedKey = key.trim();
  const translated = t(trimmedKey);
  if (translated === trimmedKey) {
    console.warn(`Missing translation key: '${trimmedKey}'`);
  }
    return translated;
  });


  return <>{replacedText}</>;
};

export default InterpolatedText;