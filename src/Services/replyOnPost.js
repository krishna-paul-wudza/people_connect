import axios from "axios";
import { ENDPOINTS, baseConfig } from "./constants";

/**
 *
 * @param {number} postId
 * @param {string} text
 * @returns {boolean}
 */
export const replyOnPost = async (postId, text) => {
  const data = { text };
  const result = await axios.post(
    ENDPOINTS.posts.replyPost(postId),
    data,
    baseConfig
  );
  if (result?.status === 200) {
    return true;
  } else return false;
};
