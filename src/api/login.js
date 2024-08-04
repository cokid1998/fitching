import axios from "axios";

const URL = "http://localhost:8080/login";

export const loginAPI = async (data) => {
  try {
    const res = await axios.post(`${URL}`, data);

    return res;
  } catch (e) {
    alert(e);
  }
};
