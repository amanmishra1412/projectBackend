import React, { useEffect } from "react";
import "../style/feed.scss";
import Post from "../components/post";
import { usePost } from "../hooks/usePost";

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
            <div className="feed">
                <div className="posts">
                    {feed.map((elem,idx)=>{
                        console.log(elem)
                       return <div key={idx}>
                            <Post post={elem} user={elem.user} />
                        </div>
                    })}
                </div>
            </div>
        </main>
    );
};

export default Feed;
