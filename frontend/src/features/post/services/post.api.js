import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000",
    withCredentials: true,
});

export const getFeed = async () => {
    const res = await api.get("/api/post/feed");
    return res.data;
};

export const createPost = async (file, caption) => {
    const formdata = new FormData();
    formdata.append("image", file);
    formdata.append("caption", caption);

    const res = await api.post("/api/post", formdata);
    return res.data;
};

export const likePost = async (postId) => {
    const res = await api.post(`/api/post/like/${postId}`);
    return res.data;
};

export const unLikePost = async (postId) => {
    const res = await api.post(`/api/post/unlike/${postId}`);
    return res.data;
};