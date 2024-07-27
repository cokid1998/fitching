import { Home, User } from "lucide-react";
import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Tier from "@/components/Tier/Tier";
import caracter from "@/assets/caracter.png";

function TabBar() {
  return (
    <>
      <Sheet>
        <SheetContent className="w-[300px] sm:w-[540px] flex flex-col items-center justify-center">
          <Tier />
          <img src={caracter} className="w-[258px] h-[444px]" />
        </SheetContent>
        <div className="max-w-[430px] absolute bottom-[30px] flex w-full justify-around">
          <Link to={"/"}>
            <div className="bg-black w-[120px] h-[50px] rounded-full pl-[10px] flex gap-[10px] items-center">
              <div className="bg-white w-[34px] h-[34px] rounded-full flex justify-center items-center">
                <Home />
              </div>
              <div className="text-white">Home</div>
            </div>
          </Link>

          <SheetTrigger className="bg-black w-[120px] h-[50px] pl-[10px] gap-[5px] rounded-full flex items-center">
            <div className="bg-white w-[34px] h-[34px] rounded-full flex justify-center items-center">
              <User />
            </div>
            <div className="text-white">My Page</div>
          </SheetTrigger>
        </div>
      </Sheet>
    </>
  );
}

export default TabBar;
