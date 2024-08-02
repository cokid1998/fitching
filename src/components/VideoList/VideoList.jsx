import { useState, useEffect } from "react";
import axios from "axios";
import VideoItem from "@/components/VideoItem/VideoItem";
import spinner from "@/assets/spinner.svg";

const YOUTUBE_SEARCH_API_URL = "https://www.googleapis.com/youtube/v3/search";

function VideoList({ selectSmallCategory }) {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(200);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(YOUTUBE_SEARCH_API_URL, {
          params: {
            part: "snippet",
            q: `${selectSmallCategory} 스트레칭`,
            type: "video",
            key: import.meta.env.VITE_YOUTUBE_API_KEY,
            maxResults: 5,
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

  if (isError === 403) {
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
    <div className="pt-[30px] px-[30px] flex flex-col gap-[30px] overflow-scroll scrollbar-hide h-100svh-minus-300">
      {videos.map((item) => {
        return <VideoItem key={item.etag} videoData={item} />;
      })}
    </div>
  );
}

export default VideoList;
