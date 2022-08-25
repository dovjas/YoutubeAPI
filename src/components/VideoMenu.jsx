import React,{Component} from 'react'
import VideoItem from './VideoItem'


const VideoMenu = ({videos}) =>{
    const renderedMenu = videos.map((video)=>{
        return <VideoItem video={video} />;
    });

    return(
        <div>
           {renderedMenu}
        </div>
    )
}

export default VideoMenu