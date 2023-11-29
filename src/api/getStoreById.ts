import axios from "axios"

export const getStoreById = async (id: string) => {
  try {
    const baseURL = import.meta.env.BASE_URL;
    const url = `${baseURL}/stores`;
    const response = await axios.get(url + '/' + id);
    return response.data;
  } catch (error) {
    console.log("error", error);
  }
}