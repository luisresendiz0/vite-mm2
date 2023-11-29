import axios from "axios"

export const createStore = async () => {
  try {
    const baseURL = import.meta.env.BASE_URL;
    const url = `${baseURL}/stores`;
    const response = await axios.post(url);
    return response.data;
  } catch (error) {
    console.log("error", error);
  }
}