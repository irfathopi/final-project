import React, { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comment';

const PostDetails = () => {

    const {aboutId} = useParams();
    const [postDetails, setPostDetails] = useState ({})
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/todos/${aboutId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPostDetails(data));
    }, []);


    const divStyle = {
        border: '2px solid yellow',
        textAlign: 'center',
        padding : '20px',
        width : '500px',
        margin: '0 auto',
        borderRadius : '20px',
        background : 'gray',
        marginTop : '50px',

    }

    return (
        <div style = {divStyle}>
            <h1>User Id : {postDetails.userId}</h1>
    <       h2>Id : {postDetails.id}</h2>
            <h2>title : {postDetails.title}</h2>
            <h3>Details : {postDetails.body}</h3>
            <h1>Comments</h1>
            <Comment></Comment>
        </div>
    );
};

export default PostDetails;