import React from "react";
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
const ChannelCard = ({ channelDetail }) => {
  console.log(channelDetail);
  return (
    <Box
      sx={{
        boxShadow: "none",
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        width: {xs:'356px',md:'1320px',},
        borderBottom: '1px solid #e0e0e0',
        mb:'10px'
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
          <div className="ml-6 flex  flex-col">
            <Typography variant="h3">
              {channelDetail?.snippet?.title}
              <CheckCircle sx={{ fontSize: 24, color: "gray" }} />
            </Typography>
            <Typography variant="h6" sx={{ color: "gray" }}>
              {channelDetail?.snippet?.description.slice(0, 40)}
            </Typography>
            <Button
              sx={{
                backgroundColor: "white",
                width: "100px",
                borderRadius: "20px",
                mt: "10px",
              }}
            >
              Subscribe
            </Button>
          </div>
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
