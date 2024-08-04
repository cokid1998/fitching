import { Progress } from "@/components/ui/progress";
import { LockKeyhole } from "lucide-react";
import TierImage from "@/assets/platinum.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";

function Tier() {
  const { isLogged } = useContext(AuthContext);
  return (
    <div className="w-full flex flex-col items-center mb-[32px]">
      <Progress value={33} className="w-[60%] mb-[30px]" />
      {isLogged ? (
        <div className="w-[200px] h-[60px] border-black border-2 flex justify-around items-center rounded-2xl">
          <img src={TierImage} className="w-[50px] h-[40px]" />
          <span className="text-xl font-bold">점수</span>
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
