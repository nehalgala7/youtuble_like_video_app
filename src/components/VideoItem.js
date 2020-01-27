import React from "react";
import { Paper, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

function VideoItem (props) {
  return (
    <div item xs={12} style={{ padding: "10px", "box-sizing": "border-box" }}>
      <Link to={"/watch?v=" + props.video.id.videoId}><Paper style={{ padding: "10px", "box-sizing": "border-box", cursor: "pointer" }}>
        <img style={{ marginRight: "20px", "display": "inline-block", width: "50%", "vertical-align": "middle" }} alt="thumbnail" src={props.video.snippet.thumbnails.medium.url} />
        <Typography variant="subtitle1" style={{ "display": "inline-block", width: "calc(50% - 20px)", "vertical-align": "middle" }} >
          <b>{props.video.snippet.title}</b>
        </Typography>
      </Paper>
      </Link>
    </div>
  );
}

export default VideoItem;