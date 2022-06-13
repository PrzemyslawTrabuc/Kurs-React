import React, {useEffect, useRef, createRef} from 'react';
import {connect} from 'react-redux';
import {fetchStream} from '../../Actions';
import {useParams} from "react-router-dom";
import flv from 'flv.js';

const StreamShow = ({fetchStream, stream}) => {
    const {id} = useParams();
    const videoRef = useRef();
    const player = createRef(null);

    useEffect(() => {
        fetchStream(id);
    }, [])

    useEffect(() => {
        buildPlayer();

        return () => {
            if(player.current){
                player.current.destroy();
                console.log("destroyed player")
            }
        }
    })

    const buildPlayer = () => {
        if (player.current || !stream) {
            return;
        }
        player.current = flv.createPlayer({
            type: 'flv',
            url: `http://localhost:8000/live/${id}.flv`
        });
        player.current.attachMediaElement(videoRef.current)
        player.current.load();
        console.log("build")
    }

    const renderStream = (stream) => {
        if (stream) {
            const {title, description} = stream;
            return (
                <>
                    <video ref={videoRef} style={{width: '100%'}} controls></video>
                    <h1>{title}</h1>
                    <h5>{description}</h5>
                </>
            );
        } else {
            return 'Loading...'
        }
    }

    return (
        <div>
            {renderStream(stream)}
        </div>
    )
};

const mapStateToProps = (state) => ({
    stream: state.streams[window.location.pathname.split("/")[window.location.pathname.split('/').length - 1]]
});

export default connect(mapStateToProps, {fetchStream})(StreamShow);