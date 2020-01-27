import React, { Component } from 'react';
import { SearchBar, VideoList, VideoDetail } from "./components";

import youtube from "./api/youtube";
import "./App.css";


class App extends Component {
  state = {
    videos: null,
    selectedVideo: null
  };

  onVideoSelect = (video) => {
    console.log(video)
    handleSubmit.call(this, "", video);
  }
  
  render() {
      return (
        <div className="main-container">
			<SearchBar onSubmit={handleSubmit.bind(this)} />
			<div className="app-content">
				{	this.state.videos ? <div>
					<div className="video-detail-view">
						<VideoDetail video={this.state.selectedVideo} />
					</div>
					<div className="related-video-view">
						<VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
					</div>
				</div> : null }
			</div>
        </div>
    );
  }
}

export default App;

async function handleSubmit(searchTerm, relatedToVideoId) {
  console.log(relatedToVideoId, searchTerm, "relatedToVideoId");
  const { data: { items: videos } } = await youtube.get("search", {
    params: {
      part: "snippet",
      maxResults: 5,
      key: process.env.REACT_APP_API_KEY,
      q: searchTerm,
      relatedToVideoId: relatedToVideoId,
      type:"video"
    }
  });

  this.setState({
    videos: videos,
    selectedVideo: videos[0]
  });
}
