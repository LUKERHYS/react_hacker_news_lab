import React, {Component} from 'react';
import ArticleList from '../components/ArticleList';

class ArticleContainer extends Component{
    constructor(props) {
        super(props);
        this.state = {
            articles: []
        }
    }
    
componentDidMount(){
    const url = `https://hacker-news.firebaseio.com/v0/item/22943749.json`

    fetch(url)
        .then(res => res.json())
        .then(article => this.setState({
            articles: [...this.state.articles, article]
        }))
        console.log(this.state.articles)
    }

    render() {
        return(
            <div>
                <h1>Container</h1>
                <ArticleList articles={this.state.articles}></ArticleList>
            </div>
        )
     }
}
export default ArticleContainer;