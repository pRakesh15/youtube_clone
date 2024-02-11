import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromapi } from "../utils/fetchFROMapi";
import { Box } from "@mui/material";
import ChannelCard from "./subcomponent/ChannelCard";
import Videos from "./subcomponent/Videos";
const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [video, setVideo] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchFromapi(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );
    fetchFromapi(`search?channelId=${id}&part=snippet&order=date`).then((data) =>
      setVideo(data?.items)
    );
  }, [id]);
// console.log(channelDetail)
// console.log(video)
  return (
    <Box minHeight="95vh">
   
    <ChannelCard channelDetail={channelDetail} md='1520px'/>
    <Box display="flex" p="2">
    <Box sx={{mr:{sm:'100px'},}}/>
    <Videos videos={video}/>
   
    </Box>
    </Box>

    );
};

export default ChannelDetail;
