import Head from "@/assets/head.png";
import right from "@/assets/right.png";
import left from "@/assets/left.png";
import body from "@/assets/body.png";
import leg from "@/assets/leg.png";
import { Link } from "react-router-dom";
import { getParts } from "@/api/getParts";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import { useCookies } from "react-cookie";

function Character({ isLink = true }) {
  const [cookie] = useCookies(["accessToken"]);
  const { user } = useContext(AuthContext);

  const ImageWrapper = ({ part, children }) =>
    isLink ? (
      <Link state={part} to={"/video"}>
        {children}
      </Link>
    ) : (
      <>{children}</>
    );

  const getPartsData = async () => {
    const res = await getParts(user.userId, cookie.accessToken);
    console.log(res);

    return res;
  };

  return (
    <>
      <ImageWrapper to={"/video"} part={"head"}>
        <img
          src={Head}
          className="w-[110px] h-[110px] absolute top-[-9px] left-1/2 -translate-x-1/2 z-10"
        />
      </ImageWrapper>
      <ImageWrapper part={"body"}>
        <img
          src={body}
          className="w-[80px] h-[90px] absolute top-[95px] left-1/2 -translate-x-1/2"
        />
      </ImageWrapper>
      <ImageWrapper part={"arm"}>
        <img
          src={left}
          className="absolute w-[120px] h-[150px] top-[112.5px] left-1/2 -translate-x-left-leg-position"
        />
      </ImageWrapper>
      <ImageWrapper part={"arm"}>
        <img
          src={right}
          className="absolute w-[90px] h-[135px] top-[119px] left-1/2 -translate-x-right-leg-position"
        />
      </ImageWrapper>
      <ImageWrapper part={"leg"}>
        <img
          src={leg}
          className="w-[80px] h-[230px] absolute top-[185px] left-1/2 -translate-x-1/2"
        />
      </ImageWrapper>
    </>
  );
}

export default Character;
