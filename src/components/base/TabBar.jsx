import { Home, User } from "lucide-react";
import { Link } from "react-router-dom";

function TabBar() {
  return (
    <div className="max-w-[430px] absolute bottom-[30px] flex w-full justify-around">
      <Link to={"/"}>
        <div className="bg-black w-[120px] h-[50px] rounded-full pl-[10px] flex gap-[10px] items-center">
          <div className="bg-white w-[34px] h-[34px] rounded-full flex justify-center items-center">
            <Home />
          </div>
          <div className="text-white">Home</div>
        </div>
      </Link>

      <div className="bg-black w-[120px] h-[50px] pl-[10px] gap-[5px] rounded-full flex items-center">
        <div className="bg-white w-[34px] h-[34px] rounded-full flex justify-center items-center">
          <User />
        </div>
        <div className="text-white">My Page</div>
      </div>
    </div>
  );
}

export default TabBar;
