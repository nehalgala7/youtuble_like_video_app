import React, {Component} from "react";
import VideoList from "./../components/VideoList";
import VideoDetail from "./../components/VideoDetail";
import youtube from "./../api/youtube";
import "./DetailView.css"

class DetailView extends Component {
    // constructor(props) {
    //     super(props);
    // }
    state = {
        videos: [],
        selectVideo: null
    };

    componentDidMount() {
        let videoID = this.getVideoID();
        this.search(videoID);
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.location.search !== this.props.location.search) {
            let videoID = this.getVideoID();
            this.search(videoID);
        }
    }

    getVideoID = () => {
        let query =  (new URL(document.location)).searchParams;
        let searchQuery = query.get("v");
        return searchQuery
    }
     
    search = (videoID) => {
        console.log(videoID, "test");
        handleSelectVideo.call(this, videoID);
    }

    render() {
        return(                           	
            this.state.videos && this.state.videos.length ? 
            <div>
                <div className="video-detail-view">
                    <VideoDetail video={this.state.selectedVideo} />
                </div>
                <div className="related-video-view">
                    <VideoList videos={this.state.videos}/>
                </div>
            </div> : null     
        )
    }
}

export default DetailView;

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