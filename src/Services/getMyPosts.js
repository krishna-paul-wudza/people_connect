import axios from "axios";
import { ENDPOINTS, baseConfig } from "./constants";

export const getMyPosts = async () => {
    const result = await axios.get(ENDPOINTS.posts.getMyPosts, baseConfig);
    if (result?.status === 200 && !!result?.data?.feedPosts) {
      return result.data.feedPosts;
    } else return null;
}
