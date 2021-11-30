import react from 'react';
import VideoItem from './VideoItem';

function VideoList({videos}){
const renderedList = videos.map((video, id)=>{
    return <VideoItem video={video} key={id} />
})
    return <div>{renderedList}</div>
}

export default VideoList;