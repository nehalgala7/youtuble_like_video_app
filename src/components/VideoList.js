import React from "react";

import VideoItem from "./VideoItem";

function VideoList(props) {
  let videos = props.videos;
  const listOfVideos = videos.map((video, index) => (
    <VideoItem
      onVideoSelect={props.onVideoSelect}
      key={video.id.videoId || ("video" + index)}
      video={video}
    />
  ));

  return (
    <div spacing={10}>
      {listOfVideos}
    </div>
  );
}

export default VideoList;