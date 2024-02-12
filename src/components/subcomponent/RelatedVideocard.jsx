import React from 'react'

const RelatedVideocard = ({
    video: {
      id: { videoId },
      snippet,
    },
  }) => {
  return (
    <Card
    direction={{ base: 'column', sm: 'row' }}
    overflow='hidden'
    variant='outline'
  >
    <Image
      objectFit='cover'
      maxW={{ base: '100%', sm: '200px' }}
      src={snippet?.thumbnails?.high?.url}
      alt='YiconiC'
    />
    <Stack>
      <CardBody>
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
      </CardBody>
    </Stack>
  </Card>
  )
}

export default RelatedVideocard
