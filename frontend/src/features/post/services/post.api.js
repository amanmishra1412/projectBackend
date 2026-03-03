import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000",
    withCredentials: true,
});

export const getFeed = async () => {
    const res = await api.get("/api/post/feed");
    return res.data;
};
