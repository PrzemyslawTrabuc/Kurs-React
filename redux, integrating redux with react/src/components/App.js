import React, { useState, useEffect } from 'react';
import actions from '../actions'; // nie trzeba nazwy pliku, ponieważ nazwy index.js są automatycznie ładowane
import SongList from './songList';
import SongDetail from "./songDetail";

const App = () => {
    return(
        <div className="ui container grid">
            <div className="ui row">
                <div className="column eight wide">
                    <SongList />
                </div>
                <div className="column eight wide"><SongDetail/></div>
            </div>
        </div>
    )
};

export default App;
