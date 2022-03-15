import {combineReducers} from 'redux';

const songsReducer = ()=>{
 return[
     {title:'White 2115 - California', duration: '4:07'},
     {title:'White 2115 - Booker', duration: '2:15'},
     {title:'White 2115 - abv', duration: '4:17'},
     {title:'White 2115 - vba', duration: '3:34'}
 ];
};

const selectedSongReducer = (selectedSong = null, action) =>{
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }
    return selectedSong;
}

export default combineReducers({
    songs:songsReducer,
    selectedSong: selectedSongReducer
});

