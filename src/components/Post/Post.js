import React, { useState, useEffect } from 'react';
import GetPost from './GetPost/GetPost';

const Post = () => {
    const  [post, setPost] = useState([]);

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPost(data));
        
    },[]);
    
    

    return (
        <div>
            {
                post.map(post => <GetPost post = {post}></GetPost>)
            }
        </div>
    );
};

export default Post;