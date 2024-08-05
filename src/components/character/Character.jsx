import Head from "@/assets/head.png";
import right from "@/assets/right.png";
import left from "@/assets/left.png";
import body from "@/assets/body.png";
import leg from "@/assets/leg.png";
import { Link } from "react-router-dom";
import { getParts } from "@/api/getParts";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/context/AuthContext";
import { useCookies } from "react-cookie";

const setOpacity = (part, partState) => {
  if (getPartNameCount(part, partState) < 1) {
    return 0.3;
  }
  if (getPartNameCount(part, partState) < 3) {
    return 0.5;
  }
  if (getPartNameCount(part, partState) < 5) {
    return 0.7;
  }
  if (getPartNameCount(part, partState) < 7) {
    return 0.9;
  }
  if (getPartNameCount(part, partState) > 10) {
    return 1;
  }
};

const getPartNameCount = (part, partState) => {
  if (partState.length === 0) return 0;

  for (let i = 0; i < 4; i++) {
    if (partState[i] === undefined) return;
    if (part === partState[i].partName) return partState[i].count;
    else return 0;
  }
  return 0;
};

function Character({ isLink = true }) {
  const [cookie] = useCookies(["accessToken"]);
  const { isLogged, user } = useContext(AuthContext);
  const [partState, setPartState] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const ImageWrapper = ({ part, children }) =>
    isLink ? (
      <Link state={part} to={"/video"}>
        {children}
      </Link>
    ) : (
      <>{children}</>
    );

  useEffect(() => {
    if (!user) return;
    try {
      const getPartsData = async () => {
        const res = await getParts(user.userId, cookie.accessToken);
        setPartState(res.data.parts);
        setIsLoading(true);
      };
      getPartsData();
    } catch (e) {
      alert(e);
    } finally {
      setIsLoading(false);
    }
  }, [user]);

  // console.log(partState);
  // console.log(getPartNameCount("head", partState));

  if (isLogged && !isLoading) return null;
  return (
    <>
      <ImageWrapper to={"/video"} part={"head"}>
        <img
          src={Head}
          className={`w-[110px] h-[110px] absolute top-[-9px] left-1/2 -translate-x-1/2 z-10`}
          style={{ opacity: `${isLogged ? setOpacity("head", partState) : 1}` }}
        />
      </ImageWrapper>
      <ImageWrapper part={"body"}>
        <img
          src={body}
          className={`w-[80px] h-[90px] absolute top-[95px] left-1/2 -translate-x-1/2`}
          style={{ opacity: `${isLogged ? setOpacity("body", partState) : 1}` }}
        />
      </ImageWrapper>
      <ImageWrapper part={"arm"}>
        <img
          src={left}
          className={`absolute w-[120px] h-[150px] top-[112.5px] left-1/2 -translate-x-left-leg-position`}
          style={{ opacity: `${isLogged ? setOpacity("arm", partState) : 1}` }}
        />
      </ImageWrapper>
      <ImageWrapper part={"arm"}>
        <img
          src={right}
          className={`absolute w-[90px] h-[135px] top-[119px] left-1/2 -translate-x-right-leg-position`}
          style={{ opacity: `${isLogged ? setOpacity("arm", partState) : 1}` }}
        />
      </ImageWrapper>
      <ImageWrapper part={"leg"}>
        <img
          src={leg}
          className={`w-[80px] h-[230px] absolute top-[185px] left-1/2 -translate-x-1/2`}
          style={{ opacity: `${isLogged ? setOpacity("leg", partState) : 1}` }}
        />
      </ImageWrapper>
    </>
  );
}

export default Character;
