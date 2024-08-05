import axios from "axios";

export const getUserInfo = async (userId, token) => {
  const URL = import.meta.env.VITE_API_URL + `/user/${userId}`;
  try {
    const res = await axios.get(URL, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return res;
  } catch (e) {
    alert(e);
  }
};
