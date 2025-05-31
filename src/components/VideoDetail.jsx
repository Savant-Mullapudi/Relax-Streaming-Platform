import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer  from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import  CheckCircleIcon  from "@mui/icons-material/CheckCircle";

import { Videos, Loader } from "./";
import { fetchfromAPI } from "../utilities/fetchfromAPI";

import VisibilityIcon from '@mui/icons-material/Visibility';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';


const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchfromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]))

    fetchfromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setVideos(data.items))
    
  }, [id]);

  if(!videoDetail?.snippet) return <Loader />;

  const { snippet: { title, channelId, channelTitle, publishedAt }, statistics: { viewCount, likeCount } } = videoDetail;

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>

            <Box sx={{ position: 'relative'}}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />
            </Box>

            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {title}
            </Typography>

            <Stack direction="row" justifyContent="space-between" sx={{ color: "#fff" }} py={1} px={2} >
              <Link to={`/channel/${channelId}`} style={{textDecoration : 'none'}}>
                <Typography variant={{ sm: "subtitle1", md: 'h6' }}  color="#fff" >
                  {channelTitle}
                  <CheckCircleIcon sx={{ fontSize: "12px", color: "#1890F1", ml: "5px" }} />
                </Typography>
              </Link>

            <Typography variant="body2" color="gray" sx={{ mt: 1 }}>
                Uploaded on {new Date(publishedAt).toLocaleDateString(undefined, {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                })}
            </Typography>

              <Stack direction="row" gap="20px" alignItems="center">
                <Stack direction="row" alignItems="center" gap={0.5}>
                    <Typography variant="body1" sx={{ opacity: 0.7 }}>
                    {parseInt(viewCount).toLocaleString()}
                    </Typography>
                    <VisibilityIcon sx={{ fontSize: 20, opacity: 0.7 }} />
                </Stack>

                <Stack direction="row" alignItems="center" gap={0.5}>
                    <Typography variant="body1" sx={{ opacity: 0.7 }}>
                    {parseInt(likeCount).toLocaleString()}
                    </Typography>
                    <ThumbUpIcon sx={{ fontSize: 20, opacity: 0.7 }} />
                </Stack>

                </Stack>
            </Stack>
          </Box>
        </Box>
        
        <Box px={2} py={{ md: 1, xs: 5 }} justifyContent="center" alignItems="center" >
          <Videos videos={videos} direction="row"/>
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
