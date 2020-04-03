import React from 'react';
import i18next from 'assets/lang/i18n';
import styled from 'styled-components';
import 'assets/lang/i18n';
import { useTranslation } from 'react-i18next';

const onLanguage = (lng: string) => {
    i18next.changeLanguage(lng);
    localStorage.setItem('lang', lng);
};

const App: React.FC = () => {
    const currentLang = localStorage.getItem('lang');

    const { t } = useTranslation();
    return (
        <Container>
            <h1>React i18next w/ LocalStorage</h1>
            <LanguageContainer>
                <LanguageBox
                    className={currentLang === 'ko' ? 'selected' : ''}
                    onClick={() => onLanguage('ko')}>
                    한국어
                </LanguageBox>
                <LanguageBox
                    className={currentLang === 'en' ? 'selected' : ''}
                    onClick={() => onLanguage('en')}>
                    English
                </LanguageBox>
            </LanguageContainer>
            <TextBox>{t('hello')}</TextBox>
            <LocalStatus>{`LocalStorage value : ${currentLang}`}</LocalStatus>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    align-items: center;
`;

const LanguageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin-top: 2rem;
`;

const LanguageBox = styled.div`
    cursor: pointer;
    color: rgba(0, 0, 0, 0.7);
    font-size: 1rem;
    border-bottom: 2px solid white;
    & ~ div {
        margin-left: 1rem;
    }
    &.selected {
        color: rgba(0, 0, 0, 1);
        border-bottom: 2px solid black;
        font-weight: bold;
    }
    margin-bottom: 1rem;
`;

const TextBox = styled.div`
    padding: 1rem;
    background: lightgray;
    border-radius: 4px;
`;

const LocalStatus = styled.p``;

export default App;
