import React from 'react';
import {connect} from 'react-redux';

const songDetail = (props) =>{
    if(props.selected_song){
        return(
            <div>{props.selected_song.title}
            <div>{props.selected_song.duration}</div>
            </div>
        )
    }
    return <div>Select some song!</div>
}

const mapStateToProps = (state)=>{
    return {selected_song: state.selectedSong}
}

export default connect(mapStateToProps) (songDetail);