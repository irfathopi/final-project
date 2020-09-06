import React, { useEffect, useState } from 'react';
import FiveComment from '../FiveComment/FiveComment';


const Comment = () => {
    

    const  [comment, setComment] = useState([]);
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments/`
        fetch(url)
            .then(res => res.json())
            .then(data => setComment(data))
    },[])
    
    const commentFive = comment.slice(1, 6);
    
    return (
        <div>
            {
                commentFive.map(commentmap => <FiveComment commentmap = {commentmap}></FiveComment>)
            }
        </div>
    );
};

export default Comment;