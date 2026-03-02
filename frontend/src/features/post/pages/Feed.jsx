import React from "react";
import "../style/feed.scss";
import Post from "../components/post";
import { usePost } from "../hooks/usePost";

const Feed = () => {

    const {handleGetFeed, loading} = usePost()

    

    return (
        <main className="feedPage">
            <div className="feed">
                <div className="posts">
                    <Post />
                </div>
            </div>
        </main>
    );
};

export default Feed;
