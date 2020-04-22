import React from 'react';

const ArticleItem = (props) => {
    return (
        <div className="articleItem">
            <li>{props.name}</li>
        </div>
    )
}


export default ArticleItem;