import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {connect} from "react-redux";
import {useSelector} from "react-redux";
import {fetchStream} from '../../Actions'
import streams from "../../apis/streams";
import {useDispatch} from "react-redux";

const StreamEdit = (props) => {
    const {id} = useParams();
    console.log(id);

    useEffect(() => {
        dispatch(fetchStream(id));
    }, [])


    const stream = useSelector((state) => state.streams[id]);
    const dispatch = useDispatch()
    console.log(stream)

    if (stream) {
        return (<div>StreamEdit {id} {stream.title}</div>)
    } else {
        return (<div>Loading...</div>)
    }

};
export default (StreamEdit);