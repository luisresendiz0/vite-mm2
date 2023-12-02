import axios from "axios";

export const updateStore = async (data: any) => {
  try {
    const baseURL = import.meta.env.VITE_BASE_URL;
    const url = `${baseURL}/Store/${data.storeId}`;
    const response = await axios.put(url, data);
    return response.data;
  } catch (error) {
    console.log("error", error);
  }
};
