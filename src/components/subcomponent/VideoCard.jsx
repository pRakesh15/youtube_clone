import React from "react";
import { Link } from "react-router-dom";
import {
  demoThumbnailUrl,
  demoChannelUrl,
  demoVideoUrl,
  demoChannelTitle,
  demoVideoTitle,
  demoProfilePicture,
} from "../../utils/constants";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { CheckCircle, Circle } from "@mui/icons-material";
const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  // console.log(snippet)

  return (
    <Card sx={{width:{md:'390px',xs:'100%'}}}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          sx={{ width: 398, height: 222 }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "#000000", height: "115px" }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1" color="#FFF">
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link
          to={
            snippet?.channelId
              ? `/channel/${snippet?.channelId}`
              : demoChannelUrl
          }
        >
          <Typography variant="subtitle2" color="gray">
            {snippet?.channelTitle|| demoChannelTitle}
            <CheckCircle sx={{fontSize:14,color:'gray',ml:'5px'}}/>
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
