import React from 'react';


const FiveComment = (props) => {
    
    const divStyle = {
        border : '1px solid blue',
        marginTop : '20px',
        borderRadius : '20px',
    }


    const {email,name,body} = props.commentmap;
    return (
        <div style = {divStyle}>
            <h4>Name : {name} </h4>
            <h5>Email : {email}</h5>
            <h3>Body : {body}</h3>
        </div>
    );
};

export default FiveComment;