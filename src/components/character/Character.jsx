import Head from "@/assets/head.png";
import right from "@/assets/right.png";
import left from "@/assets/left.png";
import body from "@/assets/body.png";
import leg from "@/assets/leg.png";
import { Link } from "react-router-dom";

function Character({ isLink = true }) {
  const ImageWrapper = ({ to, children }) =>
    isLink ? <Link to={to}>{children}</Link> : <>{children}</>;

  return (
    <>
      <ImageWrapper to="/video/head">
        <img
          src={Head}
          className="w-[110px] h-[110px] absolute top-[-9px] left-1/2 -translate-x-1/2 z-10"
        />
      </ImageWrapper>
      <ImageWrapper to="/video/body">
        <img
          src={body}
          className="w-[80px] h-[90px] absolute top-[95px] left-1/2 -translate-x-1/2"
        />
      </ImageWrapper>
      <ImageWrapper to="/video/left">
        <img
          src={left}
          className="absolute w-[120px] h-[150px] top-[112.5px] left-1/2 -translate-x-left-leg-position"
        />
      </ImageWrapper>
      <ImageWrapper to="/video/right">
        <img
          src={right}
          className="absolute w-[90px] h-[135px] top-[119px] left-1/2 -translate-x-right-leg-position"
        />
      </ImageWrapper>
      <ImageWrapper to="/video/leg">
        <img
          src={leg}
          className="w-[80px] h-[230px] absolute top-[185px] left-1/2 -translate-x-1/2"
        />
      </ImageWrapper>
    </>
  );
}

export default Character;
