// ExampleComponent.js
import React from 'react';
import { useLanguage } from './LanguageContext';

function ExampleComponent() {
    const { language } = useLanguage();
    const translations = require(`./Language_JSON/${language}.json`);
    console.log(translations)

    return (
        <div>
            {translations?.greeting}
        </div>
    );
}

export default ExampleComponent;
