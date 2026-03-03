import React, { useEffect } from "react";
import "../style/feed.scss";
import Post from "../components/post";
import { usePost } from "../hooks/usePost";
import Nav from "../../shared/components/Nav";

const Feed = () => {
    const { handleGetFeed, loading, feed } = usePost();
    useEffect(() => {
        handleGetFeed();
    }, []);

    if (loading || !feed) {
        return (
            <main>
                <h1>Feed Loading</h1>
            </main>
        );
    }

    // console.log(feed)

    return (
        <main className="feedPage">
            <Nav />
            <div className="feed">
                <div className="posts">
                    {feed.map((elem, idx) => {
                        return (
                            <div key={idx}>
                                <Post post={elem} user={elem.user} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </main>
    );
};

export default Feed;
