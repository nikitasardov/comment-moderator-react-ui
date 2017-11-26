import React, {Component} from "react";
import {connect} from 'react-redux';

import CSSPreLoader from "./CSSPreLoader.jsx";
import Breadcrumbs from '../Breadcrumbs.jsx';
import Article from '../articles/Article.jsx';

import {getAllArticles} from '../../actions/articlesActions';

@connect((store) => {
    return {
        articles: store.articles.articles,
        haveData: store.articles.haveData
    };
})
export default class ArticlesList extends Component {

    componentDidMount() {
        if (!this.props.haveData) {
            this.props.dispatch(getAllArticles());
        }
    }

    render() {
        if (this.props.haveData) {
            let articleCards = this.props.articles.map(function (article) {
                return (
                    <div
                        key={article.id.toString()}
                        className='ui fluid card'
                        style={{'background': '#909090'}}
                    >
                        <Article
                            id={article.id}
                            excerpt={true}
                            author={article.author}
                            title={article.title}
                            text={article.text}
                            comments={article.comments}
                        />
                    </div>
                )
            });

            return (
                <div className="ui container">
                    <h3 className="header" style={{'paddingTop': '15px'}}>
                        <i className="doctor icon"/>Comment moderator
                    </h3>
                    <Breadcrumbs />

                    <div className="ui cards">
                        {articleCards}
                    </div>
                </div>
            );
        } else {
            return (
                /*<div>
                    Fetching data...
                </div>*/
                <CSSPreLoader />
            );
        }
    }
}
