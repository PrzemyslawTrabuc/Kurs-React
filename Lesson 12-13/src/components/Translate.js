import React,{useState,UseEffect,UseRef} from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const options =[
    {
        label: 'Afrikaans',
        value:'af'
    },
    {
        label: 'Arabic',
        value:'ar'
    },
    {
        label: 'Hindi',
        value:'hi'
    },
    {
        label: 'Polski',
        value: 'pl'
    }
]

const Translate = () =>{
    const [language,setLanguage] = useState(options[1]);
    const [text,setText] = useState('');
return(
    <div>
        <div className="ui form">
            <div className="field">
                <label>Enter Text</label>
                <input value={text} onChange={(e) => setText(e.target.value)} />
            </div>
        </div>
        <Dropdown
            Options={options}
            selected={language}
            onSelectedChange={setLanguage}
            label="Select a Language"
        />
        <hr/>
        <h3 className="ui header">Output</h3>
        <Convert
            text={text}
            language={language}
        />
    </div>
)
};

export default Translate;