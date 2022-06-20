import React, {useContext} from 'react';
import LanguageContext from "../context/LanguageContext";

const Field = () =>{
    const contextType = useContext(LanguageContext)
    const text = contextType === 'english' ? 'Name' : 'Naam';
    return(
        <div className='ui field'>
            <label>{text}</label>
            <input/>
        </div>
    );
};

export default Field;