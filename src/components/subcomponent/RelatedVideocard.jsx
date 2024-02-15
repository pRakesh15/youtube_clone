import { CheckCircle } from '@mui/icons-material'
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const RelatedVideocard = ({
    video: {
      id: { videoId },
      snippet,
    },
  }) => {
    // console.log(snippet?.thumbnails?.high?.url)
    
  return (
    <Card sx={{ display: 'flex' }}>
    <CardMedia
    
      component="img"
      sx={{ width: 151,borderRadius:'1' }}
      image={snippet?.thumbnails?.high?.url}
      alt="YiconiC"
    />
    <Box sx={{ display: 'flex', flexDirection: 'column',background:'black' }}>
      <CardContent sx={{ flex: '1 0 auto' }}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
      <Typography variant="subtitle1" color="#fff">
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
    </Box>
    
  </Card>
  )
}

export default RelatedVideocard
