import axios from "axios";

export const checkVideo = async (data, token) => {
  const URL = import.meta.env.VITE_API_URL + "/stretching/check";
  console.log(URL);

  try {
    const res = await axios.post(URL, data, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return res;
  } catch (e) {
    alert(e);
  }
};
