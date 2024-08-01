import YouTube from "react-youtube";
import { useLocation } from "react-router-dom";
import Logo from "@/assets/Logo.png";
import { useEffect, useState } from "react";
import axios from "axios";
import spinner from "@/assets/spinner.svg";
import { AnimatePresence, motion } from "framer-motion";
import { checkVariants, checkTextVariants } from "@/motion/variants";

function AnimatedCheckIcon({ initial = true, isChecked }) {
  return (
    <AnimatePresence>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="CheckIcon"
        width="50"
        height="50"
      >
        <motion.path
          initial={{ pathLength: 1, stroke: "gray" }}
          transition={{
            type: "tween",
            duration: 0.3,
            ease: isChecked ? "easeOut" : "easeIn",
          }}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 12.75l6 6 9-13.5"
        />
        <AnimatePresence>
          {isChecked && (
            <>
              <motion.path
                initial={{ pathLength: 0 }}
                animate={
                  isChecked
                    ? { pathLength: 1 }
                    : { pathLength: 0, stroke: "transparent" }
                }
                exit={{ pathLength: 0 }}
                transition={{
                  type: "tween",
                  duration: 0.3,
                  ease: isChecked ? "easeOut" : "easeIn",
                }}
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </>
          )}
        </AnimatePresence>
      </svg>
    </AnimatePresence>
  );
}

const YOUTUBE_SEARCH_API_URL = "https://www.googleapis.com/youtube/v3/search";

function VideoDetail() {
  const location = useLocation();
  const youtubeId = location.pathname.slice(14);
  const [isChecked, setIsChecked] = useState(false);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(200);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await axios.get(
          `https://www.googleapis.com/youtube/v3/videos?id=${youtubeId}&key=${
            import.meta.env.VITE_YOUTUBE_API_KEY
          }&part=snippet`
        );
        setTitle(res.data.items[0].snippet.title);
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
  }, []);

  const opts = {
    width: "360px",
    height: "190px",
    playerVars: {
      autoplay: 0,
    },
  };
  const onReady = (event) => {
    event.target.pauseVideo();
  };

  if (isError === 404) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        API요청 한도를 초과했습니다.
      </div>
    );
  }

  if (loading) {
    return <></>;
  }

  return (
    <div className="w-full h-full pt-[30px] pb-[150px] flex flex-col justify-between">
      <div className="flex flex-col items-center">
        <img src={Logo} className="w-[83px] h-[26px] mb-[100px]" />
        <YouTube
          videoId={youtubeId}
          opts={opts}
          onReady={onReady}
          className="mb-[10px]"
        />

        <div className="truncate max-w-xs">
          제목: 탈모 예방을 위해 『두피의 혈자리』 눌러라! #광고포함 | [내 몸
          사용설명서] 321회| TV CHOSUN 20200925 방송
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-[20px]">
        <motion.button
          initial="init"
          animate={isChecked ? "checked" : "init"}
          variants={checkVariants}
          className="w-[85px] h-[52px] rounded-xl flex items-center justify-center border-2 border-[#A8A8A8] "
          whileHover={{ scale: 1.1 }}
          onClick={() => setIsChecked(!isChecked)}
        >
          <AnimatedCheckIcon isChecked={isChecked} />
        </motion.button>

        <motion.div
          className="text-center text-[#A8A8A8]"
          initial="init"
          animate={isChecked ? "checked" : "init"}
          variants={checkTextVariants}
        >
          영상을 시청후
          <br /> 버튼을 클릭해
          <br />
          경험치를 획득하세요
        </motion.div>
      </div>
    </div>
  );
}

export default VideoDetail;
