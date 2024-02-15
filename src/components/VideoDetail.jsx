import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import { fetchFromapi } from "../utils/fetchFROMapi";
import RelatedVideocard from "./subcomponent/RelatedVideocard";
const VideoDetail = () => {
  const { id } = useParams();
  const [videoDetails, setVideoDetails] = useState(null);
  const [videos, setVideos] = useState(null);
  useEffect(() => {
    fetchFromapi(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetails(data.items[0])
    );
    fetchFromapi(`search?part=snippet&relatedToVideoid=${id}&type=video`).then((data) =>
      setVideos(data.items)
    );
  }, [id]);
  // console.log(videoDetails);
  // console.log(videos)
  if (!videoDetails?.snippet) return "Loading...";
  if (!videos?.length) return "Loading...";
  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetails;

  // console.log(id);
  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }} marginX="70px" marginY="30px">
        <Box flex={1}>
            <div className="rounded-lg w-[900px] h-[500px] sticky top-24 bg-red-500">
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${id}`}
                controls={true}
                className="rounded-lg"
                width="100%"
                height="100%"
              />
            
            <Typography color="#fff" variant="h5" fontWeight="bold">
              {title.slice(0, 80)}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: "#fff" }}
              py={1}
              px={2}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography
                  variant={{ sm: "subtitle1", md: "h6" }}
                  color="#fff"
                >
                  {channelTitle}
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.6 }}>
                  {" "}
                  {parseInt(viewCount).toLocaleString()} views{" "}
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.6 }}>
                  {" "}
                  {parseInt(likeCount).toLocaleString()} likes{" "}
                </Typography>
              </Stack>
            </Stack>
            </div>
        </Box>
        <div className="bg-black w-[450px]">
        <Stack direction="column" flexWrap="wrap" justifyContent="start" gap={2}>
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <RelatedVideocard video={item} />}
         
        </Box>
      ))}
    </Stack>
        </div>
       
      </Stack>
    </Box>
  );
};

export default VideoDetail;
