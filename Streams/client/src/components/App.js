import React from 'react';
import {Route, Routes, BrowserRouter, Link} from "react-router-dom";

const PageOne = () =>{
    return( 
    <div>
        PageOne 
        <Link to="/pagetwo">Go to page two</Link>
    </div>
    )
}

const PageTwo = () =>{
    return( 
        <div>
            page TWO 
            <Link to="/">Go to page one</Link>
        </div>
    )
}


const App = () =>{
    return (
        <BrowserRouter> 
            <Routes>
                <Route path='/*' element={PageOne()}></Route>
                <Route path="/pagetwo" element={PageTwo()}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;