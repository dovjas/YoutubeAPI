import React,{Component} from 'react'
import VideoItem from './VideoItem'


const VideoMenu = ({videos, onVideoSelect}) =>{
    const renderedMenu = videos.map((video)=>{
        return (
        <VideoItem 
          onVideoSelect={onVideoSelect} 
          video={video}
          key={video.id.videoId}
        />
        )
    });

    return(
        <div className="ui celled list">
                {renderedMenu}
        </div>
    )
}

export default VideoMenu