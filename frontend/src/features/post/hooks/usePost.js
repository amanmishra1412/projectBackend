import { useContext } from "react";
import { getFeed } from "../services/post.api";
import { PostContext } from "../post.context";

export const usePost = () => {
    const context = useContext(PostContext);
    const { loading, setLoading, post, feed, setFeed } = context;

    const handleGetFeed = async () => {
        setLoading(true);
        const res = await getFeed();
        setFeed(res.posts);
        setLoading(false);
    };

    return { loading, feed, post, handleGetFeed };
};
