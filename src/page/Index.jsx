import Logo from "@/assets/Logo.png";
import Tier from "@/components/Tier/Tier";
import Character from "@/components/character/Character";

function Index() {
  return (
    <div className="h-full flex flex-col items-center tablet:pt-[30px] mobile:pt-[20px]">
      <img
        src={Logo}
        className="w-[83px] h-[26px] tablet:mb-[34px] mobile:mb-[10px]"
      />
      <Tier />
      <p className="w-[230px] flex flex-col justify-center items-center text-xl font-medium tablet:mb-[30px] mobile:mb-[10px]">
        <span>스트레칭 할 부위를</span>
        <span>선택해주세요</span>
      </p>
      <div className="relative w-full h-full flex justify-center">
        <Character />
      </div>
    </div>
  );
}

export default Index;
