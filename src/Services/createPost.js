import axios from "axios";
import { ENDPOINTS, baseConfig } from "./constants";

export const createPost = async (text, img) => {
    const data = new FormData();
    data.append('text', text);
    data.append('img', img);
    const result = await axios.post(ENDPOINTS.posts.createPost, data, {
      ...baseConfig,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  if (result?.status === 200 && !!result?.data) {
    return result.data;
  } else return null;
};
