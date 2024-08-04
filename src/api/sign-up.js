import axios from "axios";

const URL = "http://localhost:8080/user/sign-up";

export const SignUpAPI = async () => {
  try {
    const res = await axios.post(`${URL}`, {
      email: "admin@naver.com",
      password: "1234",
      name: "test",
    });

    console.log(res);
  } catch (e) {
    console.log(e);
  }
};
