import { Home, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Tier from "@/components/Tier/Tier";
import { motion } from "framer-motion";
import Character from "@/components/character/Character";
import { LogIn } from "lucide-react";
import { AuthContext } from "@/context/AuthContext";
import { useContext } from "react";

function TabBar() {
  const { isLogged } = useContext(AuthContext);
  const location = useLocation();
  const path = location.pathname;

  return (
    <>
      <Sheet>
        <SheetContent className="w-[300px] sm:w-[540px] flex flex-col items-center justify-center">
          <Tier />
          <div className="relative w-full h-full">
            <Character isLink={false} />
          </div>
        </SheetContent>
        <div className="max-w-[430px] absolute bottom-[30px] flex w-full justify-around">
          <Link to={"/"}>
            <div className="bg-black w-[120px] h-[50px] rounded-full pl-[10px] flex gap-[10px] items-center">
              <motion.div
                initial={{
                  backgroundColor: "#ffffff",
                }}
                animate={{
                  backgroundColor: path === "/" ? "#ff8000" : "#ffffff",
                }}
                className="w-[34px] h-[34px] rounded-full flex justify-center items-center"
              >
                <Home />
              </motion.div>
              <div className="text-white">Home</div>
            </div>
          </Link>
          {isLogged ? (
            <SheetTrigger className="bg-black w-[120px] h-[50px] pl-[10px] gap-[5px] rounded-full flex items-center">
              <div className="bg-white w-[34px] h-[34px] rounded-full flex justify-center items-center">
                <User />
              </div>
              <div className="text-white">My Page</div>
            </SheetTrigger>
          ) : (
            <Link
              to="/login"
              className="bg-black w-[120px] h-[50px] pl-[10px] gap-[10px] rounded-full flex items-center"
            >
              <motion.div
                initial={{
                  backgroundColor: "#ffffff",
                }}
                animate={{
                  backgroundColor: path === "/login" ? "#ff8000" : "#ffffff",
                }}
                className="bg-white w-[34px] h-[34px] rounded-full flex justify-center items-center"
              >
                <LogIn />
              </motion.div>
              <div className="text-white">Login</div>
            </Link>
          )}
        </div>
      </Sheet>
    </>
  );
}

export default TabBar;
