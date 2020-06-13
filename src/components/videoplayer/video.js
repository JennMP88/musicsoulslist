import React from 'react';


const VideoDisplay = ({id}) => {
  
  
  const link = `https://www.youtube.com/embed/${id}?autoplay=1&fs=1&origin=http://localhost:3002`;
  console.log('myid',id)

  // this is a small change to test my new updates 
  return (
    <div style={{minHeight:"95vh"}}>
  
  <iframe title='yt-video' type="text/html" width="500" height="360"  
  
     src={link} frameBorder="0"></iframe>
  </div>

  );
}

export default VideoDisplay;