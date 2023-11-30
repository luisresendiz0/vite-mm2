import axios from "axios"

export const getStoreById = async (id: number) => {
  try {
    const baseURL = import.meta.env.VITE_BASE_URL;
    const url = `${baseURL}/Store`;
    const response = await axios.get(url + '/' + id);
    return response.data;
  } catch (error) {
    console.log("error", error);
  }
}