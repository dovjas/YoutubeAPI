import React, {Component} from "react";
import "./App.css";
import SearchField from "./components/SearchField";
import youtube from "./apis/youtube"
import VideoMenu from "./components/VideoMenu";


class App extends React.Component{
  state = {videos: [] };
    
  onKeywordSubmit = async keyword =>{

    const response = await youtube.get('/search',{
      params: {
        q: keyword
      }
    });

    this.setState({videos: response.data.items})
  };

  render(){
    return (
      <div className="ui container">
        <SearchField onFormSubmit={this.onKeywordSubmit}/>
        Videos found: {this.state.videos.length}
        <VideoMenu videos={this.state.videos} />
      </div>
    );
  }
}
export default App;
