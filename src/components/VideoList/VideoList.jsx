function VideoList({ selectSmallCategory }) {
  return (
    <div className="pt-[30px] px-[30px]">
      <div>{selectSmallCategory}</div>
      <iframe
        className="w-full h-[300px]"
        src="https://www.youtube.com/embed/7B-13RrLZA8"
        title="Leave (Prod. PATEKO) (떠나 (Prod. PATEKO (파테코)))"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default VideoList;
