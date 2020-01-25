import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";

export default ({ video, onVideoSelect }) => {
  return (
    <Grid item xs={12} style={{ padding: "10px", "box-sizing": "border-box" }}>
      <Paper style={{ padding: "10px", "box-sizing": "border-box", cursor: "pointer" }} onClick={() => onVideoSelect(video.id.videoId)} >
        <img style={{ marginRight: "20px", "display": "inline-block", width: "50%", "vertical-align": "middle" }} alt="thumbnail" src={video.snippet.thumbnails.medium.url} />
        <Typography variant="subtitle1" style={{ "display": "inline-block", width: "calc(50% - 20px)", "vertical-align": "middle" }} >
          <b>{video.snippet.title}</b>
        </Typography>
      </Paper>
    </Grid>
  );
}
