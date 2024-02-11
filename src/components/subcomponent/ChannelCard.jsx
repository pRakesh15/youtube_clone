import React, { useEffect, useState } from "react";
import {
  demoThumbnailUrl,
  demoChannelUrl,
  demoVideoUrl,
  demoChannelTitle,
  demoVideoTitle,
  demoProfilePicture,
} from "../../utils/constants";
import { Box, Button, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { CheckCircle } from "@mui/icons-material";
const ChannelCard = ({ channelDetail, md }) => {
  const[subscribe,setSubscribe]=useState(false);
  let Subscriber=((channelDetail?.statistics?.subscriberCount)/1000);
  let videocnt=channelDetail?.statistics?.videoCount;
  // console.log(channelDetail.statistics.subscriberCount);
  // console.log(channelDetail.statistics.videoCount);
  const handelSubscribe=()=>
{
  subscribe==true?setSubscribe(false):setSubscribe(true)
}
  return (
    <Box
      sx={{
        boxShadow: "none",
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        width: { xs: "356px", md: md },
        borderBottom: "1px solid #e0e0e0",
        mb: "10px",
      }}
    >
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <CardMedia
            image={
              channelDetail?.snippet?.thumbnails?.high?.url ||
              demoProfilePicture
            }
            alt={channelDetail?.snippet?.title}
            sx={{
              borderRadius: "50%",
              height: "180px",
              width: "180px",
              mb: 2,
              border: "1px solid #e3e3e3",
            }}
          />
          <div className="ml-6 flex  flex-col items-start">
            <Typography variant="h3">
              {channelDetail?.snippet?.title}
              <CheckCircle sx={{ fontSize: 24, color: "gray" }} />
            </Typography>
            <Typography variant="h6" sx={{ color: "gray" }}>
              {channelDetail?.snippet?.description.slice(0, 40)}
            </Typography>
            <Typography variant="h9" sx={{ color: "gray" }}>
            .{Subscriber}K subscribers . {videocnt} videos
          </Typography>
            <Button
              sx={{
                backgroundColor: "white",
                width: "100px",
                borderRadius: "20px",
                mt: "10px",
              }}
              onClick={handelSubscribe}
            >
              {subscribe?'Subscribed':'Subscrib'}
            </Button>
          </div>
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
