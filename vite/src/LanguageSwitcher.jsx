// LanguageSwitcher.js
import React from 'react';
import { useLanguage } from './LanguageContext';

function LanguageSwitcher() {
  const { language, changeLanguage } = useLanguage();

  return (
    <div>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('es')}>Español</button>
      {/* Add more language buttons as needed */}
    </div>
  );
}

export default LanguageSwitcher;
