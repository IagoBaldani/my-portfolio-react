import React from 'react'
import { useTranslation } from 'react-i18next'
import './styles.css'

import  BrasilFlag  from '../../assets/img/brasil-flag.svg';
import  EuaFlag  from '../../assets/img/eua-flag.svg';

type parametros = {
    img: string;
    isSelected: boolean;
    onClick: any;
}

function Flag( {img, isSelected, onClick}:parametros){
    return(
        <img alt="flag" src={img} className={isSelected ? 'flag selected' : 'flag'} onClick={onClick} />
    )
}

function I18n(){
    const { i18n } = useTranslation()

    function handleChangeLanguage(language: string | undefined) {
        i18n.changeLanguage(language)
    }

    const selectedLanguage = i18n.language
    return (
        <div className="flags-container">
            <Flag
                img={BrasilFlag}
                isSelected={selectedLanguage === 'pt-BR'}
                onClick={() => handleChangeLanguage('pt-BR')}
            />
            <Flag
                img={EuaFlag}
                isSelected={selectedLanguage === 'en-US'}
                onClick={() => handleChangeLanguage('en-US')}
            />
        </div>
    )
}

export default I18n;
