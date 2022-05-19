import React, {useRef, useEffect} from "react"
import '../App.css';
import Video from '../Assets/jedacai.mp4';

function VideoBackground() {

  const videoRef = useRef(undefined);
  useEffect(() => {
      videoRef.current.defaultMuted = true;
  })

  return (
    <div className='videoContainer'>
      <video
        loop
        autoPlay
        muted
        controls
        ref={videoRef}
        preLoad="auto"
        className='jedVideo'>
        <source
          src={Video}
          type="video/mp4"
        />
      </video>
    </div>
  );
}

export default VideoBackground;