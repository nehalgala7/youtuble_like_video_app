import React, { Component } from 'react';
import { Link, Switch, Route, Redirect} from "react-router-dom";
import SearchResult from "./pages/SearchResult";
import DetailView from "./pages/DetailView";
import youtube from "./api/youtube";
import "./App.css";
class App extends Component {
	state = {
		videos: null,
		selectedVideo: null
	};

	onVideoSelect = (video) => {
		handleSelectVideo.call(this, video);
	}

	handleSearch = (searchQuery) => {
		console.log("handleSearch")
		this.setState({
			redirectPath: "/result?query=" + searchQuery
		});
    }
    
    componentDidUpdate() {
        console.log("componentDidUpdate main");
        if(this.props.redirectPath !== this.state.redirectPath) {
            this.setState({
                redirectPath: this.props.redirectPath
            });
        }
    }
  
  render() {
	  console.log(this.state.redirectPath ,"redirectPath");
      return (
            <div className="app-content">
                {this.state.redirectPath ? <Redirect to={{ pathname: this.state.redirectPath, state: { data: "abc" } }} /> : null}
                {/*	
                this.state.videos ? <div>
                <div className="video-detail-view">
                    <VideoDetail video={this.state.selectedVideo} />
                </div>
                <div className="related-video-view">
                    <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
                </div>
                </div> : null 
                */}
            </div>
    );
  }
}

export default App;



async function handleSelectVideo(relatedToVideoId) {
  const { data: { items: videos } } = await youtube.get("search", {
    params: {
      part: "snippet",
      maxResults: 5,
      key: process.env.REACT_APP_API_KEY,
      relatedToVideoId: relatedToVideoId,
      type:"video"
    }
  });

  this.setState({
    videos: videos,
	selectedVideo: videos[0],
	redirectPath: null
  });
}
