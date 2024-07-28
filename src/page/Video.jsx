import { useState } from "react";
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

const largeCategory = ["머리", "상체", "하체"];
const smallCategory = {
  머리: ["정수리", "머리"],
  상체: ["어깨", "팔꿈치", "팔목", "손가락", "손바닥"],
  하체: ["발바닥", "발목", "무릎", "허리"],
};

function Video() {
  const [curLargeCategory, setCurLargeCategory] = useState("");
  const [selectSmallCategory, setSelectSmallCategory] = useState("");

  const handleLargeCategory = (value) => {
    setCurLargeCategory(value);
  };
  const handleSelectSmallCategory = (value) => {
    setSelectSmallCategory(value);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="bg-black rounded-b-3xl pt-[50px] px-[25px]">
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
              <SelectValue placeholder="대분류" />
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
              <SelectValue placeholder="소분류" />
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

      <VideoList selectSmallCategory={selectSmallCategory} />
    </div>
  );
}

export default Video;
