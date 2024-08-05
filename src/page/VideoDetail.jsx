import YouTube from "react-youtube";
import { Link, useLocation } from "react-router-dom";
import Logo from "@/assets/Logo.png";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import { checkVariants, checkTextVariants } from "@/motion/variants";
import { checkVideo } from "@/api/checkVideo";
import { useCookies } from "react-cookie";
import { AuthContext } from "@/context/AuthContext";

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

function VideoDetail() {
  const { user, isLogged } = useContext(AuthContext);
  const [cookie] = useCookies(["accessToken"]);
  const location = useLocation();
  const { part: partName } = location.state;
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
  }, [youtubeId]);

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

  const submitChecked = () => {
    if (isChecked) return;
    setIsChecked(true);
    checkVideo({ userId: user.userId, partName }, cookie.accessToken);
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
    <div className="w-full h-full pt-[30px] pb-[150px] flex flex-col items-center justify-between">
      <div className="flex flex-col items-center">
        <Link to="/" className="mb-[100px]">
          <img src={Logo} className="w-[83px] h-[26px]" />
        </Link>
        <div className="truncate max-w-xs mb-[10px]">제목: {title}</div>
        <YouTube videoId={youtubeId} opts={opts} onReady={onReady} />
      </div>

      {isLogged ? (
        <button
          className="w-fit flex flex-col items-center justify-center gap-[20px]"
          onClick={submitChecked}
        >
          <motion.div
            initial="init"
            animate={isChecked ? "checked" : "init"}
            variants={checkVariants}
            className="w-[85px] h-[52px] rounded-xl flex items-center justify-center border-2 border-[#A8A8A8] "
            whileHover={{ scale: 1.1 }}
          >
            <AnimatedCheckIcon isChecked={isChecked} />
          </motion.div>

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
        </button>
      ) : (
        <button className="w-fit flex flex-col items-center justify-center gap-[20px] cursor-default">
          <motion.div className="w-[85px] h-[52px] rounded-xl flex items-center justify-center border-2 border-[#A8A8A8] ">
            <AnimatedCheckIcon isChecked={isChecked} />
          </motion.div>

          <motion.div
            className="text-center text-[#A8A8A8]"
            initial="init"
            animate={isChecked ? "checked" : "init"}
            variants={checkTextVariants}
          >
            로그인을 해보고
            <br /> 버튼을 클릭해 보세요!
          </motion.div>
        </button>
      )}
    </div>
  );
}

export default VideoDetail;
