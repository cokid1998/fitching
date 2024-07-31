import YouTube from "react-youtube";
import { useLocation } from "react-router-dom";

function VideoDetail() {
  const location = useLocation();
  const youtubeId = location.pathname.slice(14);
  console.log(youtubeId);
  const opts = {
    width: "340px",
    height: "190px",
    playerVars: {
      autoplay: 0,
    },
  };
  const onReady = (event) => {
    event.target.pauseVideo();
  };

  return (
    <div>
      <YouTube videoId={youtubeId} opts={opts} onReady={onReady} />
    </div>
  );
}

export default VideoDetail;
