import React, {useState} from 'react';
import UserCreate from "./UserCreate";
import LanguageContext from "../context/LanguageContext";
import ColorContext from "../context/ColorContext";

const App = () =>{
    const [language, setLanguage] = useState('english');
    const [color, setColor] = useState('primary')

    const onLanguageChange = (language) =>{
        setLanguage(language);
    }

    const onColorChange = (color) =>{
        setColor(color);
    }


    return(
        <div className="ui container">
            <div>
                Select a language:
                <i className="flag us" onClick={()=> {
                    onLanguageChange('english');
                    onColorChange('primary')
                }} >

                </i>
                <i className="flag nl" onClick={()=> {
                    onLanguageChange('dutch');
                    onColorChange('red')}}
                    >
                </i>
            </div>
            <ColorContext.Provider value={color}>
            <LanguageContext.Provider value={language}>
                <UserCreate />
            </LanguageContext.Provider>
            </ColorContext.Provider>
        </div>
    )
}

export default App