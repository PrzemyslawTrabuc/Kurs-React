// Import the React and ReactDOM libs
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';


// Create a react component
const index = () =>{

    return(
     <div>
         <App></App>
     </div>
    );
};

//Take the react component and show it on the screen
ReactDOM.render(
<App />,
document.querySelector('#root')
);