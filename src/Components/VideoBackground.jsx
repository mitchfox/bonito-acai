// import React, {useRef, useEffect} from "react"
// import '../App.css';
import Video from '../Assets/jedacai.mp4';


import React, { useRef, useEffect } from "react"

export default function VideoBackground(props) {
  const videoRef = useRef(undefined);
  useEffect(() => {
    videoRef.current.defaultMuted = true;
  })
  return (
    <div className='videoContainer'>
      <video
        ref={videoRef}
        loop
        autoPlay
        muted
        playsInline
        // Check below doesn't fuck it up
        className='jedVideo'>
        <source src={Video} type="video/mp4" />
      </video>
    </div>
  );
}


// function VideoBackground() {

//   const videoRef = useRef(undefined);
//   useEffect(() => {
//       videoRef.current.defaultMuted = true;
//   })

//   return (
//     <div className='videoContainer'>
//       <video
//         loop
//         autoPlay
//         muted
//         controls={false}
//         ref={videoRef}
//         preLoad="auto"
//         className='jedVideo'>
//         <source
//           src={Video}
//           type="video/mp4"
//         />
//       </video>
//     </div>
//   );
// }

// export default VideoBackground;