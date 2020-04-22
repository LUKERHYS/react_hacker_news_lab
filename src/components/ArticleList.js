import React from 'react';
import ArticleItem from './ArticleItem';

const ArticleList = (props) => {

    const articleNodes = props.articles.map(article => {
        return <ArticleItem title={article.title}  author={article.by} url={article.url} type={article.type} key={article.id}></ArticleItem>
    })


        return(
            <div className="article-list">
                 { articleNodes }
            </div>
        )
        

    
}

export default ArticleList;