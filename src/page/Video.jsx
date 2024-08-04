import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import WhiteLogo from "@/assets/whiteLogo.png";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import VideoList from "@/components/VideoList/VideoList";
import { useLocation } from "react-router-dom";
import useGetScrollYRef from "@/hook/useGetScrollYRef";

const largeCategory = ["머리", "상체", "하체"];
const smallCategory = {
  머리: ["정수리", "머리"],
  상체: ["어깨", "팔꿈치", "팔목", "손가락", "손바닥"],
  하체: ["발바닥", "발목", "무릎", "허리"],
};

const switchCategoryToKr = (position) => {
  switch (position) {
    case "head":
      return "머리";
    case "right":
    case "left":
    case "body":
      return "상체";
    case "leg":
      return "하체";
    default:
      return "머리";
  }
};

const positionTop = (scrollY) => {
  if (scrollY > 200) {
    return 200;
  }

  return scrollY;
};

function Video() {
  const location = useLocation();
  const path = switchCategoryToKr(location.pathname.slice(7));
  const [curLargeCategory, setCurLargeCategory] = useState(path);
  const [selectSmallCategory, setSelectSmallCategory] = useState(
    smallCategory[curLargeCategory][0]
  );
  const handleLargeCategory = (value) => {
    setCurLargeCategory(value);
    setSelectSmallCategory(smallCategory[curLargeCategory][0]);
  };
  const handleSelectSmallCategory = (value) => {
    setSelectSmallCategory(value);
  };

  const [scrollY, scrollRef] = useGetScrollYRef();

  return (
    <div className="flex flex-col max-h-svh">
      <div
        className={`bg-black rounded-b-3xl pt-[50px] px-[25px] mb-[30px]`}
        style={
          scrollY
            ? { position: "relative", top: `${-positionTop(scrollY)}px` }
            : {}
        }
      >
        <Link to="/">
          <img
            src={WhiteLogo}
            className="w-[130px] m-auto h-[40px] mb-[20px]"
          />
        </Link>
        <p className="text-white mb-[46px]">
          <span className="text-[20px]">이태관님을 위한</span>
          <br />
          <span className="text-[30px] font-semibold">추천 스트레칭</span>
        </p>
        <div className="flex justify-between pb-[34px]">
          <Select onValueChange={handleLargeCategory}>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder={curLargeCategory} />
            </SelectTrigger>
            <SelectContent>
              {largeCategory.map((item) => (
                <SelectItem key={item} value={item}>
                  {item}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select onValueChange={handleSelectSmallCategory}>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder={smallCategory[curLargeCategory][0]}>
                {smallCategory[curLargeCategory][0]}
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              {smallCategory[curLargeCategory]?.map((item) => (
                <SelectItem key={item} value={item}>
                  {item}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div
        ref={scrollRef}
        className={`px-[30px] flex flex-col gap-[30px] overflow-scroll border border-cyan-500 scrollbar-hide
          ${scrollY === 0 ? "h-100svh-minus-300" : ""}
          `}
        style={
          scrollY !== 0
            ? {
                position: "relative",
                top: `${-positionTop(scrollY)}px`,
                maxHeight: `calc(100svh - (335px - ${scrollY}px))`,
              }
            : {}
        }
      >
        <VideoList
          scrollRef={scrollRef}
          selectSmallCategory={selectSmallCategory}
        />
      </div>
    </div>
  );
}

export default Video;
