import React, { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import SideBar from './SideBar';
import Videos from './Videos';
import { fetchfromAPI } from '../utilities/fetchfromAPI';

const Feed = () => {
    const [selectedCategory, setselectedCategory] = useState('Space');
    const [videos, setVideos] = useState([]);

    useEffect(() => {

        fetchfromAPI(`search?part=snippet&q=${selectedCategory}`)
            .then((data) => setVideos(data.items))
            .catch((error) => console.error('Error fetching data:', error)); 
    }, [selectedCategory]);

    return (
        <Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }}>
            
            <Box sx={{ height: { sx: 'auto', md: '92vh' }, borderRight: '1px solid #3d3d3d', px: { sx: 0, md: 2 } }}>
                <SideBar selectedCategory={selectedCategory} setselectedCategory={setselectedCategory} />
                <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: '#fff' }}>
                </Typography>
            </Box>
            
            <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
                <Typography
                    variant="h4"
                    fontWeight="bold"
                    mb={2}
                    sx={{ color: '#1890F1' }}
                >
                    {selectedCategory} <span style={{ color: '#1890F1' }}></span>
                </Typography>
                <Videos videos={videos} />
            </Box>
            
        </Stack>
    );
};

export default Feed;
