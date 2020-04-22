import React, {Component} from 'react';
import ArticleList from '../components/ArticleList';

class ArticleContainer extends Component{
    constructor(props) {
        super(props);
        this.state = {
            articles: []
        }
        this.getArticles = this.getArticles.bind(this);
    }

    getArticles(){
        const topStoriesUrl = 'https://hacker-news.firebaseio.com/v0/topstories.json';
        
        fetch(topStoriesUrl)
            .then(res => res.json())
            .then(storyIds => {
                const top10 = storyIds.slice(0, 10);
                const articleUrls = top10.map((storyId) => {
                    return fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`)
                    .then(res => res.json())
                })
                Promise.all(articleUrls)
                    .then(article => this.setState({
                    articles: article
                }))
            })
        }
    
    componentDidMount(){
        this.getArticles();

    };
    
    render() {
        return(
            <div className="article-container">
                <h1>Hacker News</h1>
                <ArticleList articles={this.state.articles}></ArticleList>
            </div>
        )
     }
}
export default ArticleContainer;