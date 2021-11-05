// Import the React and ReactDOM libs
import React from 'react';
import ReactDOM from 'react-dom';
import Faker from 'faker';

// Create a react component
const App = () =>{

    return(
     <div>
         <p>Hello world</p>
     </div>
    );
};

//Take the react component and show it on the screen
ReactDOM.render(
<App />,
document.querySelector('#root')
);