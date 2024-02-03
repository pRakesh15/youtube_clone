import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import Feed from './components/Feed';
import VideoDetail from './components/VideoDetail';
import ChannelDetail from './components/ChannelDetail';
import SerachFeed from './components/SerachFeed';

const App = () => (
  <Box sx={{backgroundColor:'#000'}}>
 <Navbar/>
  <Routes>
  <Route path='/' exact element={<Feed/>}/>
  <Route path='/video/:id' element={<VideoDetail/>}/>
  <Route path='/channel/:id' element={<ChannelDetail/>}/>
  <Route path='/search/:searchTerm' element={<SerachFeed/>}/>
  </Routes>
  
  </Box>
)

export default App
