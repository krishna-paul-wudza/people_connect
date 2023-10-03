import axios from "axios";
import { ENDPOINTS, baseConfig } from "./constants";

/**
 * 
 * @param {string} userId 
 * @returns {boolean}
 */
export const followUser = async (userId) => {
    const data = {};
    const result = await axios.post(ENDPOINTS.user.follow(userId), data, baseConfig);
    if (result?.status === 200) {
      return true;
    } else return false;
}
