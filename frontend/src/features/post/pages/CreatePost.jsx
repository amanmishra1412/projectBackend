import React, { useRef, useState } from "react";
import "../style/createpost.scss";
import { useNavigate } from "react-router-dom";
import { usePost } from "../hooks/usePost";

const CreatePost = () => {
    const [caption, setCaption] = useState("");
    const postImg = useRef(null);
    const { loading, handlePostCreate } = usePost();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const file = postImg.current.files[0]

        await handlePostCreate(file, caption);
        navigate('/')
    };

    if (loading) {
        return (
            <main>
                <h3>Loading...</h3>
            </main>
        );
    }

    return (
        <main className="createPostPage">
            <div className="form-container">
                <h3>Create</h3>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <label className="postImgLabel" htmlFor="postImg">
                        Select
                    </label>
                    <input
                        ref={postImg}
                        type="file"
                        hidden
                        name="postImg"
                        id="postImg"
                    />
                    <input
                        type="text"
                        value={caption}
                        onChange={(e) => setCaption(e.target.value)}
                        placeholder="Enter Caption"
                        name="caption"
                        id="caption"
                    />
                    <button className="btn btn-primary">Create</button>
                </form>
            </div>
        </main>
    );
};

export default CreatePost;
