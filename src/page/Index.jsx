import Logo from "@/assets/Logo.png";
import Tier from "@/components/Tier/Tier";
import Head from "@/assets/head.png";
import right from "@/assets/right.png";
import left from "@/assets/left.png";
import body from "@/assets/body.png";
import leg from "@/assets/leg.png";
import { Link } from "react-router-dom";

function Index() {
  return (
    <div className="h-full flex flex-col items-center tablet:pt-[30px] mobile:pt-[20px]">
      <img
        src={Logo}
        className="w-[83px] h-[26px] tablet:mb-[34px] mobile:mb-[10px]"
      />
      <Tier />
      <p className="w-[230px] flex flex-col justify-center items-center text-xl font-medium tablet:mb-[30px] mobile:mb-[10px]">
        <div>스트레칭 할 부위를</div>
        <div>선택해주세요</div>
      </p>
      <div className="relative w-full h-full flex justify-center">
        <Link to="/video/head">
          <img
            src={Head}
            className="w-[110px] h-[110px] absolute top-[-9px] left-1/2 -translate-x-1/2 z-10"
          />
        </Link>
        <Link to="/video/body">
          <img
            src={body}
            className="w-[80px] h-[90px] absolute top-[95px] left-1/2 -translate-x-1/2"
          />
        </Link>
        <Link to="/video/left">
          <img
            src={left}
            className="absolute w-[120px] h-[150px] top-[112.5px] left-1/2 -translate-x-left-leg-position"
          />
        </Link>
        <Link to="/video/right">
          <img
            src={right}
            className="absolute w-[90px] h-[135px] top-[119px] left-1/2 -translate-x-right-leg-position"
          />
        </Link>
        <Link to="/video/leg">
          <img
            src={leg}
            className="w-[80px] h-[230px] absolute top-[185px] left-1/2 -translate-x-1/2"
          />
        </Link>
      </div>
    </div>
  );
}

export default Index;
