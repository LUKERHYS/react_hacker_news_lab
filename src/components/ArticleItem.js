import React from 'react';

const ArticleItem = (props) => {
    return (
                <div className="article-item">
                <a href={props.url} target="_blank"><b>{props.title}</b></a>
                <br />
                {props.author}, {props.type}
                </div> 
    )
}


export default ArticleItem;