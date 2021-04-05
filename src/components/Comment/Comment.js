import React from 'react'; 
import './Comment.css';

const Comment = (props) => {
    console.log(props);
    const {name, body} = props.comment;

    return (
        <div className="comment">
            <div>
            <h3 className="userName">Name:{name}</h3>
            <p className="userComment">comment:{body}</p>
            </div>
        </div>
    );
};

export default Comment;