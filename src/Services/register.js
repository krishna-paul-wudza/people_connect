import axios from "axios";
import { ENDPOINTS, baseConfig } from "./constants";

/**
 * @typedef {Object} UserResponse
 * @property {string} _id
 * @property {string} name
 * @property {string} email
 * @property {string} username
 *
 * @param {string} name
 * @param {string} email
 * @param {string} username
 * @param {string} password
 * @returns {Promise<null | UserResponse>}
 */
export const register = async (name, email, username, password) => {
  const data = {
    name,
    email,
    username,
    password,
  };
  const result = await axios.post(ENDPOINTS.user.registration, data, baseConfig);
  if (result?.status === 201 && !!result?.data) {
    return result.data;
  } else return null;
};
