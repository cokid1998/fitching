import axios from "axios";

const URL = "http://localhost:8080";

export const loginAPI = async (data) => {
  try {
    const res = await axios.post(`${URL}/login`, data);

    alert(res);
  } catch (e) {
    console.log(e);
    alert(e);
  }
};
