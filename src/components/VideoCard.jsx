import React, { useState ,useRef} from 'react';
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import parse from 'html-react-parser';
import ReactPlayer from "react-player";


import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants';




const VideoCard = ({ video: { id: { videoId }, snippet } }) => {

  const [play, setPlay] = useState(false);
  const playerRef = useRef(null);

  const handleMouseLeave = (event) => {
    setPlay(false);
    if (playerRef.current) {
      playerRef.current.stop();
      playerRef.current.seekTo(0);
    }
  };

  const handlePlayable = (event) => {
    
    // video-stream html5-main-video
    console.log(event.target.id);
    setPlay(true);
    console.log(play);
  }

  return (
    <Card sx={{ width: { xs: '350px', sm: '358px', md: '320px' }, boxShadow: 'none', borderRadius: 0 }}>
      <Link to={videoId ? `/video/${videoId}` : '/video/cV2gBU6hKfY'}>
       { play ?  <ReactPlayer id={"x"+videoId} playing={play}  onMouseLeave={handleMouseLeave}  url={`https://www.youtube.com/watch?v=${videoId}`} className="react-player-2"  muted={true}  height='100%'  ref={playerRef}  /> :
       <CardMedia  id={videoId} onMouseEnter={handlePlayable}  
          image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          alt={snippet?.title}
          sx={{ width: { xs: '350px', sm: '358px', md: '320px' }, height: '180px' }}
        />}
      </Link>
      <CardContent sx={{ backgroundColor: '#1E1E1E', height: '106px' }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
            {parse(snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60))}
          </Typography>
        </Link>
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
          <Typography variant="subtitle2" color="grey">
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircleIcon sx={{ fontSize: '12px', color: 'gray', ml: '5px' }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );


};

export default VideoCard;

