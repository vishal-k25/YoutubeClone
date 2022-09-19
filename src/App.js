import React from 'react'
import Feed from './components/Feed'
import Navbar from './components/Navbar'
import { Box  } from '@mui/system';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import ChannelDetail from './components/ChannelDetail';
import VideoDetail from './components/VideoDetail';
import SearchFeed from './components/SearchFeed';

export default function App(){
    return (
        <BrowserRouter>
            <Box sx={{ backgroundColor: '#000' }}>
                <Navbar />
                <Routes>

                    <Route path='/' element={<Feed />} />
                    <Route path='/video/:id' element={<VideoDetail />} />
                    <Route path='/channel/:id' element={<ChannelDetail />} />
                    <Route path='/search/:searchTerm' element={<SearchFeed />} />


                </Routes>
            </Box>
        </BrowserRouter>
    )
}

