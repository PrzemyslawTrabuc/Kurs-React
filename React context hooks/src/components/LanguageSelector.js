import React, { useContext } from "react";

import LanaugeContext from '../contexts/LanguageContext';

const LanguageSelector = () => {
    const { onLanguageChange } = useContext(LanaugeContext);

    return (
        <div>
            Select a language:
            <i
                onClick={() => onLanguageChange('english')}
                className="flag us"
            ></i>
            <i
                onClick={() => onLanguageChange('dutch')}
                className="flag nl"
            ></i>
        </div>
    );
};

export default LanguageSelector;