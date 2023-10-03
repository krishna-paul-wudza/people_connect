import { login } from "./login";
import { register } from "./register";
import { logout } from "./logout";
import { getUserProfile } from './getUserProfile'
import { getMyProfile } from "./getMyProfile";
import { followUser } from "./followUser";
import { getMyPosts } from "./getMyPosts";
import { getFeedPosts } from "./getFeedPosts";
import { createPost } from "./createPost";

export default {
    login,
    register,
    logout,
    getMyProfile,
    getUserProfile,
    followUser,
    getMyPosts,
    getFeedPosts,
    createPost
}
