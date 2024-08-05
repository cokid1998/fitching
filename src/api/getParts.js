import axios from "axios";

export const getParts = async (userId, token) => {
  const URL = import.meta.env.VITE_API_URL + `/stretching/parts/${userId}`;

  try {
    const res = await axios.get(URL, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return res;
  } catch (e) {
    alert(e);
  }
};
