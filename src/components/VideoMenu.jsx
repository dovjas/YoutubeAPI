import React,{Component} from 'react'
import VideoItem from './VideoItem'


const VideoMenu = ({videos}) =>{
    const renderedMenu = videos.map((videos)=>{
        return <VideoItem />;
    });

    return(
        <div>
           {renderedMenu}
        </div>
    )
}

export default VideoMenu