import axios from "axios";

const URL = import.meta.env.VITE_API_URL + "/login";

export const loginAPI = async (data) => {
  try {
    const res = await axios.post(`${URL}`, data);
    return res;
  } catch (e) {
    alert(e);
  }
};
