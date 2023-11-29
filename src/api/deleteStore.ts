import axios from "axios"

export const deleteStore = async () => {
  try {
    const baseURL = import.meta.env.BASE_URL;
    const url = `${baseURL}/stores`;
    const response = await axios.delete(url);
    return response.data;
  } catch (error) {
    console.log("error", error);
  }
}