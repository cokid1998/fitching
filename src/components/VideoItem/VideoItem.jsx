import { Link } from "react-router-dom";

const YouTubeThumbnail = ({ thumbnailData }) => {
  const { url } = thumbnailData;
  const thumbnailUrl = url;

  return (
    <img
      className="rounded-2xl w-full"
      src={thumbnailUrl}
      alt="YouTube Thumbnail"
    />
  );
};

function VideoItem({ videoData, curLargeCategory }) {
  const {
    id: { videoId },
    snippet: {
      title,
      thumbnails: { high },
    },
  } = videoData;

  return (
    <Link
      to={`/video/detail/${videoId}`}
      state={{ part: curLargeCategory }}
      className="w-full flex flex-col gap-[14px]"
    >
      <YouTubeThumbnail thumbnailData={high} />
      <div className="truncate">제목: {title}</div>
    </Link>
  );
}

export default VideoItem;
