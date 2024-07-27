import Logo from "@/assets/Logo.png";
import Tier from "@/components/Tier/Tier";
import caracter from "@/assets/caracter.png";

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
      <div className="relative">
        <img src={caracter} className="w-[258px] h-[444px]" />
      </div>
    </div>
  );
}

export default Index;
