import React from 'react';

function Userinfo (props){
    return(
        <div>
            <img src={props.url}/>
            <p>{props.name}</p>

        </div>
    )
}

export default Userinfo;
