import { useState, useEffect } from "react";
import YouTube from "react-youtube";
import axios from "axios";
import VideoItem from "@/components/VideoItem/VideoItem";
import spinner from "@/assets/spinner.svg";
const YOUTUBE_SEARCH_API_URL = "https://www.googleapis.com/youtube/v3/search";

function VideoList({ selectSmallCategory }) {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(200);

  const opts = {
    width: "340px",
    height: "190px",
    playerVars: {
      autoplay: 1,
    },
  };
  const onReady = (event) => {
    event.target.pauseVideo();
  };

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(YOUTUBE_SEARCH_API_URL, {
          params: {
            part: "snippet",
            q: `${selectSmallCategory} 스트레칭`,
            type: "video",
            key: import.meta.env.VITE_YOUTUBE_API_KEY,
            maxResults: 3,
          },
        });

        setVideos(response.data.items);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching videos:", error);
        setLoading(false);
        if (error.response.status === 403) {
          setIsError(403);
        }
      }
    };

    fetchVideos();
  }, [selectSmallCategory]);

  if (isError) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        API요청 한도를 초과했습니다.
      </div>
    );
  }

  if (loading) {
    return (
      <div className="w-full h-full flex">
        <img src={spinner} className="w-[50px] m-auto animate-spin" />
      </div>
    );
  }
  return (
    <div className="pt-[30px] px-[30px] flex flex-col gap-[30px]">
      {videos.map((item) => {
        return <VideoItem key={item.etag} videoData={item} />;
      })}
    </div>
  );
}

export default VideoList;
