import '../App.css';
import Video from '../Assets/jedacai.mp4';

function VideoBackground() {
  return (
    <div className='videoContainer'>
    <video loop autoPlay muted className='jedVideo'>
      <source
        src={Video}
        type="video/mp4"
      />
    </video>
  </div>
  );
}

export default VideoBackground;