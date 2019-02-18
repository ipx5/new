import React from 'react ';
import Article from './Article'


export default function ArticleList(props){
    return(
        <ul>
            <li><Article article={props.items}/></li>
        </ul>
    )

}