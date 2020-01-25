import React, { Component } from 'react';
import { Grid } from "@material-ui/core";

import { SearchBar, VideoList, VideoDetail } from "./components";

import youtube from "./api/youtube";


class App extends Component {
  state = {
    videos: null,
    selectedVideo: null
  };

  onVideoSelect = (video) => {
    this.setState({
      selectedVideo: video
    });
  }

  
  render() {
      console.log(process.env, 'process.env');
      return (
        <Grid style={{ justifyContent: "center" }} container spacing={10}>
          <Grid item xs={11}>
            <Grid container spacing={10}>
              <Grid item xs={12}>
                <SearchBar onSubmit={handleSubmit.bind(this)} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={11}>
            {this.state.videos ? <Grid container spacing={10}>
              <Grid item xs={8}>
                <VideoDetail video={this.state.selectedVideo} />
              </Grid>
              <Grid item xs={4}>
                <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
              </Grid>
            </Grid> : null }
          </Grid>
      </Grid>
    );
  }
}

export default App;

async function handleSubmit(searchTerm) {
  const { data: { items: videos } } = await youtube.get("search", {
    params: {
      part: "snippet",
      maxResults: 5,
      key: process.env.REACT_APP_API_KEY,
      q: searchTerm,
    }
  });

  this.setState({
    videos: videos,
    selectedVideo: videos[0]
  });
}
