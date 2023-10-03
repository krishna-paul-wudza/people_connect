import axios from "axios";
import { ENDPOINTS, baseConfig } from "./constants";

/**
 * @typedef {Object} UserResponse
 * @property {string} _id
 * @property {string} name
 * @property {string} email
 * @property {string} username
 * 
 * @param {string} username 
 * @param {string} password 
 * @returns {Promise<null | UserResponse>} 
 */
export const login = async (username, password) => {
    const data = {
        username, password
    }
    const result = await axios.post(ENDPOINTS.user.login, data, baseConfig);
    if (result?.status === 200 && !!result?.data) {
        return result.data
    } else return null;
}
