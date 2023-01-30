import React, {useContext} from 'react';
import {LanguageContext} from "../contexts/context.jsx";

const LanguageComponent = () => {
    const {EnglishBtn, FrenchBtn} = useContext(LanguageContext)
    return (
        <div>
            <button onClick={EnglishBtn} style={{marginRight: 30}}>English</button>
            <button onClick={FrenchBtn}>French</button>
        </div>
    );
};

export default LanguageComponent;