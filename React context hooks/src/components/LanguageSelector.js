import React, { useContext } from "react";

import LanaugeContext from '../contexts/LanguageContext';

const LanguageSelector = () => {
    const { onLanguageChange } = useContext(LanaugeContext);

    return (
        <div>
            Select a language:
            <i
                onClick={() => {
                    onLanguageChange('english', 'primary')
                }}
                className="flag us"
            ></i>
            <i
                onClick={() => {
                    onLanguageChange('dutch', 'red')
                }
            }
                className="flag nl"
            ></i>
        </div>
    );
};

export default LanguageSelector;