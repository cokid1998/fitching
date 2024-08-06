import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import Logo from "@/assets/BigLogo.png";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import GoogleLogin from "@/assets/GoogleLogin.svg";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginAPI } from "@/api/login";

function Login() {
  const [email, setEmail] = useState("admin@naver.com");
  const [password, setPassword] = useState("1234");
  const { login } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const submitLogin = async (data) => {
    const res = await loginAPI(data);
    const { status, data: userData } = res;

    if (status === 200) {
      login(res.headers["authorization"].replace("Bearer ", ""), userData);
      navigate("/");
    } else {
      alert("Error");
    }
  };

  return (
    <div className="flex justify-center flex-col items-center h-full px-[30px]">
      <Link to="/">
        <img src={Logo} className="w-[260px] h-[82px] mb-[35px]" />
      </Link>
      <div className="text-3xl font-bold mb-[50px]">로그인</div>

      <div className="w-full flex flex-col gap-[10px] mb-[50px]">
        <div className="flex flex-col gap-[5px]">
          <label>이메일</label>
          <Input
            onChange={handleEmail}
            type="email"
            placeholder="이메일을 입력해주세요"
            defaultValue={email}
          />
        </div>
        <div className="flex flex-col gap-[5px]">
          <label>비밀번호</label>
          <Input
            onChange={handlePassword}
            type="password"
            placeholder="비밀번호를 입력해주세요"
            defaultValue={password}
          />
        </div>
      </div>

      <div className="flex flex-col gap-[10px] w-full mb-[50px]">
        <Button onClick={() => submitLogin({ email, password })}>로그인</Button>
        <Link to="/signup">
          <Button variant="outline" className="w-full">
            회원가입
          </Button>
        </Link>
      </div>

      {/* <div className="flex flex-col items-center">
        <div className="mb-[25px]">Google 계정으로 간편 가입하기</div>
        <button>
          <img src={GoogleLogin} />
        </button>
      </div> */}
    </div>
  );
}

export default Login;
