import { Progress } from "@/components/ui/progress";
import { LockKeyhole } from "lucide-react";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/context/AuthContext";
import { getUserInfo } from "@/api/getUserInfo";
import { useCookies } from "react-cookie";
import BronzeImage from "@/assets/tier/bronze.webp";
import SilverImage from "@/assets/tier/silver.webp";
import GoldImage from "@/assets/tier/gold.webp";
import PlatinumImage from "@/assets/tier/platinum.webp";
import DiamondImage from "@/assets/tier/diamond.webp";
import GrandmasterImage from "@/assets/tier/grandmaster.webp";
import ChallengerImage from "@/assets/tier/challenger.webp";

const imageURL = (tier) => {
  switch (tier) {
    case "Bronze" || null:
      return BronzeImage;
    case null:
      return BronzeImage;
    case "Sliver":
      return SilverImage;
    case "Gold":
      return GoldImage;
    case "Platinum":
      return PlatinumImage;
    case "Diamond":
      return DiamondImage;
    case "Grand Master":
      return GrandmasterImage;
    case "Challenger":
      return ChallengerImage;
    default:
      break;
  }
};

const progressValue = (level, point) => {
  const viewedCount = point / 10;
  console.log(viewedCount);

  if (level === 0) {
    // 포인트가 5개가 되면 레벨업
    return viewedCount * 10;
  } else if (level === 1) {
    // 포인트가 8개가 되면 레벨업
    return viewedCount * 10;
  } else if (level === 2) {
    // 포인트가 10개가 되면 레벨업
    return viewedCount * 10;
  } else if (level === 3) {
    // 포인트가 15개가 되면 레벨업
    return viewedCount * 10;
  } else if (level === 4) {
    // 포인트가 25가 되면 레벨업
    return viewedCount * 10;
  } else if (level === 5) {
    //포인트가 50가 되면 레벨업
    return viewedCount * 10;
  }
};

function Tier() {
  const { isLogged, user } = useContext(AuthContext);
  const [cookie] = useCookies(["accessToken"]);
  const [point, setPoint] = useState(0);
  const [tier, setTier] = useState("");
  const [level, setLevel] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!user) return;

    const fetch = async () => {
      try {
        const res = await getUserInfo(user.userId, cookie.accessToken);

        setPoint(res.data.currentPoints);
        setTier(res.data.tiar);
        setLevel(res.data.level);
        setIsLoading(true);
        console.log(res.data);
      } catch (e) {
        alert(e);
      } finally {
        setIsLoading(false);
      }
    };
    fetch();
  }, [user]);

  if (isLoading) null;

  return (
    <div className="w-full flex flex-col items-center mb-[32px]">
      <Progress
        value={progressValue(level, point)}
        className="w-[60%] mb-[30px]"
      />
      {isLogged ? (
        <div className="w-[200px] h-[60px] border-black border-2 flex justify-around items-center rounded-2xl">
          <img src={imageURL(tier)} className="w-[50px] h-[40px]" />
          <span className="text-xl font-bold">
            {isLogged ? `${point}점` : "점수"}
          </span>
        </div>
      ) : (
        <Link
          to="/login"
          className="w-[200px] h-[60px] border-[#B8B8B8] border-2 flex justify-around items-center rounded-2xl"
        >
          <div className="text-[#B8B8B8]">로그인 후 점수 잠금 해제</div>
          <LockKeyhole color="#B8B8B8" />
        </Link>
      )}
    </div>
  );
}

export default Tier;
