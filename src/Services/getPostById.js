import axios from "axios";
import { ENDPOINTS, baseConfig } from "./constants";

export const getPostById = async (postId) => {
    const endpoint_url = ENDPOINTS.posts.getPostById(postId)
    console.log("endpoint_url", endpoint_url)
  const result = await axios.get(endpoint_url, baseConfig);
  if (result?.status === 200 && !!result?.data?.post) {
    return result.data.post;
  } else return null;
};
