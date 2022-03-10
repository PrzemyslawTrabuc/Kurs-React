import React, {useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';


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
    },
]

const showComponent=(route, component)=>{
    return window.location.pathname === route ? component : null;
}

const showAccordion = ()=>{
    if(window.location.pathname === "/"){
        return(
                <Accordion items={items}/>
        )
    }
}
////////////////// noob routing
/*const showList = ()=>{
    if(window.location.pathname === '/list') {
        return <Search/>
    }
}

const showDropdown=()=>{
    if(window.location.pathname === '/dropdown'){
        return(<Dropdown Options={options}/>)
    }
}

const showTranslate = () =>{
    if(window.location.pathname === '/translate'){
        return(<Translate />)
    }
}
*/

export default () =>{
    const [selected,setSelected] = useState(options[0]);
    const [showDropdown,setShowDropdown] = useState(true);
    return(
        <div style={{padding:'20px 10% 0 10%'}}>
            <Header/>
            <Route path="/">
                <Accordion items={items} />
            </Route>
            <Route path="/list">
                <Search/>
            </Route>
            <Route path="/dropdown">
                <Dropdown
                    label="Select a color"
                    Options ={options}
                    selected={selected}
                    onSelectedChange={setSelected}
                />
            </Route>
            <Route path="/translate">
                <Translate/>
            </Route>
        </div>
    )
}
/* export default () =>{
    return(
        <div style={{padding:'20px 10% 0 10%'}}>
            <Accordion items={items}/>
        </div>
    )
}
/*
 */
/* export default () =>{

    const [selected,setSelected] = useState(options[0]);
    const [showDropdown,setShowDropdown] = useState(true);
    return(
        <div style={{padding:'20px 10% 0 10%'}}>
            <button className="ui button" onClick ={() => setShowDropdown(!showDropdown)}> Toggle Dropdown</button>
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
*/
