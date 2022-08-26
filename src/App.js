import React, {Component} from "react";
import "./App.css";
import SearchField from "./components/SearchField";
import youtube from "./apis/youtube"
import VideoMenu from "./components/VideoMenu";
import VideoDetails from "./components/VideoDetails";

class App extends React.Component{
  state = {videos: [], clickedVideo: null };
    
  onKeywordSubmit = async keyword =>{
    const response = await youtube.get('/search',{
      params: {
        q: keyword
      }
    });

    this.setState({videos: response.data.items})
  };

  onVideoClick = (video) =>{
    this.setState({clickedVideo: video})
  }


  render(){
    return (
      <div className="ui container">
        <SearchField onFormSubmit={this.onKeywordSubmit}/>
        <div className="ui grid">
          <h3>Videos found: {this.state.videos.length} </h3>
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetails video={this.state.clickedVideo} />
            </div>
            <div className="five wide column">
              <VideoMenu 
                onVideoSelect={this.onVideoClick} 
                videos={this.state.videos}  
              />
            </div>  
          </div>
        </div>
      </div>
    );
  }
}
export default App;
