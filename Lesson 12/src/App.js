import React from 'react';
import Accordion from './components/Accordion'
import Search from './components/search';


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


export default () =>{
    return(
        <div>
            <br/>
            <Search/>
        </div>
    )
}