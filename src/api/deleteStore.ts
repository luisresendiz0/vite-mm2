import axios from "axios"

export const deleteStore = async (id: number) => {
  try {
    const baseURL = import.meta.env.VITE_BASE_URL;
    const url = `${baseURL}/Store/${id}`;
    const response = await axios.delete(url);
    return response.data;
  } catch (error) {
    console.log("error", error);
  }
}