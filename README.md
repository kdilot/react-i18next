### React i18next With LocalStorage

#### [Demo](https://kdilot.github.io/react-i18next/)

_React, Typescript, Hooks_

-   packages

        i18next
        react-i18next

-   styles

        styled-components

-   github pages

        gh-pages

**Translate Files**

    // en.json
    {
        "hello": "Hello World!"
    }

    // ko.json
    {
        "hello": "안녕하세요!"
    }

**Route or index**
// You need to import i18n file at the top to translate every text
import 'assets/lang/i18n';

**Translate Button**
import i18next from 'assets/lang/i18n';
...
const onLanguage = (lang: string) => {
i18next.changeLanguage(lang); // lang is (en, ko, ...etc)
localStorage.setItem('lang', lang); // When you used with localstorage
};

**Translate Page**

    import { useTranslation } from  'react-i18next'; // With Hooks

    ...

    const App = () => {
    	const { t } = useTranslation();

    	return (
    		<div>{t('hello')}</div>
    	)
    }

    export default App
