import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {connect} from "react-redux";
import {useSelector} from "react-redux";
import {fetchStream} from '../../Actions'
import streams from "../../apis/streams";
import {useDispatch} from "react-redux";

const StreamEdit = ({fetchStream, stream}) => {
    const {id} = useParams();
    console.log(id);

    useEffect(() => {
        fetchStream(id);
    }, [])


    //const stream = useSelector((state) => state.streams[id]);
    console.log(stream)

    if (stream[id]) {
        return (<div>StreamEdit {id} {stream[id].title}</div>)
    } else {
        return (<div>Loading...</div>)
    }

};

const mapStateToProps = state => ({
    stream: state.streams
});

const mapDispatchToProps = { fetchStream };

export default connect(mapStateToProps, mapDispatchToProps)(StreamEdit);