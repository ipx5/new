import React from 'react';

function Comment (props){
    return(
        <div>
            <img src={props.url}/>
            <p>{props.name}</p>

        </div>
    )
}

export default Comment;