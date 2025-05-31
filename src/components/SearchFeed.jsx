import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import Videos from './Videos';
import { fetchfromAPI } from '../utilities/fetchfromAPI';

const SearchFeed = () => {
    const [videos, setVideos] = useState([]);
    const { searchTerm } = useParams();

    useEffect(() => {
        // Correct template literal for API request
        fetchfromAPI(`search?part=snippet&q=${searchTerm}`)
            .then((data) => setVideos(data.items))
            .catch((error) => console.error('Error fetching data:', error)); // Handle potential errors
    }, [searchTerm]);

    return (
        <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
        <Typography
            variant="h4"
            fontWeight="bold"
            mb={2}
            sx={{ color: 'white' }}
        >
            Results for:  <span style={{ color: '#1890F1' }}>{searchTerm}</span>
        </Typography>
        <Box display="flex" p={2}>
        <Box sx={{mr: {sm: '120px', md: '120px'}}}/>
            <Videos videos={videos} />
        </Box>

    </Box>
    );
};

export default SearchFeed;
