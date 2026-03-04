import { useContext, useEffect } from "react";
import {
    createPost,
    getFeed,
    likePost,
    unLikePost,
} from "../services/post.api";
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

    const handlePostCreate = async (file, caption) => {
        setLoading(true);
        const res = await createPost(file, caption);
        setFeed(res.data);
        setLoading(false);
    };

    const handleLike = async (post) => {
        await likePost(post);
        await handleGetFeed();
    };

    const handleUnLike = async (post) => {
        await unLikePost(post);
        await handleGetFeed();
    };

    useEffect(() => {
        handleGetFeed();
    }, []);

    return {
        loading,
        feed,
        post,
        handleGetFeed,
        handlePostCreate,
        handleLike,
        handleUnLike,
    };
};