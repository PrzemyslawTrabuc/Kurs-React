import React, {useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/search';
import Dropdown from './components/Dropdown';


const items =[
    {
        title: 'What is React?',
        content: 'React is a front end JS framework'
    },
    {
        title: 'Why use React?',
        content: 'It is fun'
    },
    {
        title: 'Do you like it',
        content: 'Of course'
    }

];

const options =[
    {
        label: 'The Color Red',
        value:'red'
    },
    {
        label: 'The Color Green',
        value:'green'
    },
    {
        label: 'The Color Blue',
        value:'blue'
    }
]


export default () =>{

    const [selected,setSelected] = useState(options[0]);
    const [showDropdown,setShowDropdown] = useState(true);
    return(
        <div>
            <button onClick ={() => setShowDropdown(!showDropdown)}> Toggle Dropdown</button>
            { showDropdown ?
                <Dropdown
                    selected={selected}
                    onSelectedChange={setSelected}
                    Options={options}
                /> : null
            }
        </div>
    )
}