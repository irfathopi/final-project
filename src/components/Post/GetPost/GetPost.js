import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const GetPost = (props) => {


    const postStyle = {
        border: '1px solid gray',
        margin : '20px',
        padding : '20px',
        borderRadius : '20px',

    }
     
    

    const {title , id} = props.post;
    return (
        <div style = {postStyle}>
            <h2>Title : {title}</h2>
            <Button variant="contained"><Link to = {`/about/${id}`}>Show Details {id}</Link></Button>
        </div>
    );
};

export default GetPost;


