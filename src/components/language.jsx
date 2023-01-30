import React, {useContext} from 'react';
import {LanguageContext} from "../contexts/context.jsx";

function Language(props) {
    const {language} = useContext(LanguageContext)
    return (
        <div>{language}</div>
    );
}

export default Language;