import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SignUpAPI } from "@/api/sign-up";
import { AuthContext } from "@/context/AuthContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const { setLocalStorageLogged } = useContext(AuthContext);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleName = (e) => {
    setName(e.target.value);
  };

  const submitSignUp = async (data) => {
    const res = await SignUpAPI(data);
    const { status } = res;

    if (status === 200) {
      setLocalStorageLogged(
        res.headers["authorization"].replace("Bearer ", "")
      );
      navigate("/");
    } else {
      alert("Error");
    }
  };

  return (
    <div className="flex justify-center flex-col items-center h-full px-[30px]">
      <div className="text-5xl font-bold mb-[50px]">회원가입</div>

      <div className="w-full flex flex-col gap-[20px] mb-[50px]">
        <div className="flex flex-col gap-[5px]">
          <label>이메일</label>
          <Input
            onChange={handleEmail}
            type="email"
            placeholder="이메일을 입력해주세요"
          />
        </div>
        <div className="flex flex-col gap-[5px]">
          <label>비밀번호</label>
          <Input
            onChange={handlePassword}
            type="password"
            placeholder="비밀번호를 입력해주세요"
          />
        </div>
        <div className="flex flex-col gap-[5px]">
          <label>이름</label>
          <Input
            onChange={handleName}
            type="text"
            placeholder="이름을 입력해주세요"
          />
        </div>
      </div>

      <Button
        className="w-full"
        onClick={() => submitSignUp({ email, password, name })}
      >
        시작하기
      </Button>
    </div>
  );
}

export default Signup;
