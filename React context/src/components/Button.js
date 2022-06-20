import React, {useContext} from 'react';
import LanguageContext from "../context/LanguageContext";
import ColorContext from "../context/ColorContext";

const Button = () =>{
    const contextType = useContext(LanguageContext);
    console.log(contextType);
    const text = contextType === 'english' ? 'Submit' : 'Voorleggen';
    return(
        <ColorContext.Consumer>
            {(color)=>
                <button
                    className={`ui button ${color}`}>{text}
                    <LanguageContext.Consumer>
                        {(value) => value === 'english' ? 'Submit' : 'Voorleggen'}
                    </LanguageContext.Consumer>
                </button>
            }
        </ColorContext.Consumer>
    );
};

//Button.contextType = LanguageContext;

export default Button;