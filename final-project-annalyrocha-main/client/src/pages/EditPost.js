import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './EditPost.css';
import { supabase } from '../client';

const EditPost = () => {
    const { id } = useParams();
    const [post, setPost] = useState({ id: null, title: "", author: "", description: "" });

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const { data, error } = await supabase
                    .from('Posts')
                    .select('*')
                    .eq('id', id)
                    .single();

                if (error) {
                    throw error;
                }

                setPost(data);
            } catch (error) {
                console.error("Error fetching post:", error.message);
            }
        };

        fetchPost();
    }, [id]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setPost(prevPost => ({
            ...prevPost,
            [name]: value,
        }));
    };

    const updatePost = async (event) => {
        event.preventDefault();
        try {
            const { error } = await supabase
                .from('Posts')
                .update(post)
                .eq('id', id);

            if (error) {
                throw error;
            }

            console.log("Post updated successfully!");
            window.location = "/";
        } catch (error) {
            console.error("Error updating post:", error.message);
        }
    };

    const deletePost = async (event) => {
        event.preventDefault();
        try {
            const { error } = await supabase
                .from('Posts')
                .delete()
                .eq('id', id);

            if (error) {
                throw error;
            }

            console.log("Post deleted successfully!");
            window.location = "/";
        } catch (error) {
            console.error("Error deleting post:", error.message);
        }
    };

    return (
        <div>
            <form onSubmit={updatePost}>
                <label htmlFor="title">Title</label> <br />
                <input type="text" id="title" name="title" value={post.title} onChange={handleChange} /><br />
                <br />

                <label htmlFor="author">Author</label><br />
                <input type="text" id="author" name="author" value={post.author} onChange={handleChange} /><br />
                <br />

                <label htmlFor="description">Description</label><br />
                <textarea rows="5" cols="50" id="description" name="description" value={post.description} onChange={handleChange}></textarea>
                <br />
                <input type="submit" value="Submit" />
                <button className="deleteButton" onClick={deletePost}>Delete</button>
            </form>
        </div>
    )
}

export default EditPost;