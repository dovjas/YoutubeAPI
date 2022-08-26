import React,{Component} from 'react'
import VideoItem from './VideoItem'


const VideoMenu = ({videos}) =>{
    const renderedMenu = videos.map((video)=>{
        return <VideoItem video={video} />;
    });

    return(
        <div className="ui celled list">
                {renderedMenu}
        </div>
    )
}

export default VideoMenu