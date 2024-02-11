import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Videos from "./subcomponent/Videos";

import { fetchFromapi } from "../utils/fetchFROMapi";
import { useParams } from "react-router-dom";


const SerachFeed = () => {
  const [videos,setVideos]=useState([]);
  const {searchTerm}=useParams();
  useEffect(() => {
    fetchFromapi(`search?part=snippet&q=${searchTerm}`)
    .then((data)=>setVideos(data.items));    
  
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflow: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
        Search result for:
          <span className="text-[#BA0101]">{searchTerm}</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
  )
}

export default SerachFeed
