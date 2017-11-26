import React, {Component} from "react";
import {connect} from 'react-redux';

import CSSPreLoader from "./CSSPreLoader.jsx";
import Breadcrumbs from '../Breadcrumbs.jsx';
import Article from '../articles/Article.jsx';
import CommentsOfArticle from '../comments/CommentsOfArticle.jsx';

import {getArticle} from '../../actions/articlesActions';

@connect((store) => {
    return {
        article: store.articles.singleArticleData,
        articles: store.articles.articles,
        haveData: store.articles.haveData,
        view: store.navigation.view
    };
})
export default class SingleArticle extends Component {

    componentDidMount() {
        if (!this.props.article) {
            this.props.dispatch(getArticle(this.props.view.data.articleID));
        }
    }

    render() {
        if (this.props.article) {
            const {article} = this.props;

            return (
                <div className="ui container">
                    <h3 className="header" style={{'paddingTop': '15px'}}>
                        <i className="doctor icon"/>Comment moderator
                    </h3>
                    {/*<Breadcrumbs viewTitle={'Single article "' + article.title + '"'}/>*/}
                    <Breadcrumbs viewTitle={'Single article with comments'}/>

                    <div className="ui cards">
                        <div
                            className='ui fluid card'
                            style={{'background': '#909090'}}
                        >
                            <Article
                                id={article.id}
                                author={article.author}
                                title={article.title}
                                text={article.text}
                                comments={article.comments}
                            />

                            <CommentsOfArticle
                                comments={article.comments}
                            />

                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                /*<div>
                    SingleArticle. Fetching data...
                </div>*/
                <CSSPreLoader />
            );
        }
    }
}
