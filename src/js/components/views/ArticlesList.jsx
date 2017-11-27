import React, {Component} from "react";
import {connect} from 'react-redux';

import CSSPreLoader from "./CSSPreLoader.jsx";
import Breadcrumbs from '../Breadcrumbs.jsx';
import Article from '../articles/Article.jsx';

import {getAllArticles} from '../../actions/dataActions';
import {mapObject} from '../../libs/functions';

@connect((store) => {
    return {
        articles: store.data.articles,
        haveData: store.data.haveData
    };
})
export default class ArticlesList extends Component {

    componentDidMount() {
        if (!this.props.haveData) {
            this.props.dispatch(getAllArticles());
        }
    }

    render() {
        const {articles} = this.props;
        if (this.props.haveData) {
            let articleCards =  mapObject(articles, articleID => {
                const article = articles[articleID];
                return (
                    <div
                        key={article.id.toString()}
                        className='ui fluid card'
                        style={{'background': '#909090'}}
                    >
                        <Article
                            articleID={article.id}
                            excerpt={true}
                            authorID={article.author}
                            title={article.title}
                            articleText={article.text}
                            commentsArr={article.comments}
                        />
                    </div>
                )
            });
            /*            let articleCards = Object.keys(articles).map(articleID => {
                            const article = articles[articleID];
                            return (
                                <div
                                    key={article.id.toString()}
                                    className='ui fluid card'
                                    style={{'background': '#909090'}}
                                >
                                    <Article
                                        articleID={article.id}
                                        excerpt={true}
                                        authorID={article.author}
                                        title={article.title}
                                        articleText={article.text}
                                        commentsArr={article.comments}
                                    />
                                </div>
                            )
                        });*/

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
            return (<CSSPreLoader />);
        }
    }
}
