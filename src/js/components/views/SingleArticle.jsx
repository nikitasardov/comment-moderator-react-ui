import React, {Component} from "react";
import {connect} from 'react-redux';

import CSSPreLoader from "./CSSPreLoader.jsx";
import Breadcrumbs from '../Breadcrumbs.jsx';
import Article from '../articles/Article.jsx';
import CommentsOfArticle from '../comments/CommentsOfArticle.jsx';

import {getArticle} from '../../actions/dataActions';
import {changeView} from '../../actions/navigationActions';
import {VIEW_SINGLE_ARTICLE} from '../../constants.js';

@connect((store) => {
    return {
        articles: store.data.articles,
        dataFetched: store.data.dataFetched,
        view: store.navigation.view
    };
})
export default class SingleArticle extends Component {

    componentWillMount() {
        this.props.dispatch(getArticle(this.props.view.data.articleID));
    }

    componentWillUpdate(nextProps, nextState) {
        if (nextProps.view.data.forceFetch) {
            this.props.dispatch(getArticle(this.props.view.data.articleID));
        }
    }

    render() {
        if (this.props.view.data.forceFetch) {
            this.props.dispatch(changeView(VIEW_SINGLE_ARTICLE, {
                articleID: this.props.view.data.articleID,
                forceFetch: false
            }))
        }

        const {articles, view, dataFetched} = this.props;
        const article = articles[view.data.articleID];

        if (dataFetched) {
            return (
                <div className="ui container">
                    <h3 className="header" style={{'paddingTop': '15px'}}>
                        <i className="doctor icon"/>Comment moderator
                    </h3>
                    <Breadcrumbs viewTitle={'Single article with comments'}/>

                    <div className="ui cards" style={{'clear':'both'}}>
                        <div className='ui fluid card' style={{'background': '#909090'}}>
                            <Article
                                articleID={article.id}
                                authorID={article.author}
                                title={article.title}
                                articleText={article.text}
                                commentsArr={article.comments}
                            />

                            <CommentsOfArticle commentsArr={article.comments}/>

                        </div>
                    </div>
                </div>
            );
        } else {
            return (<CSSPreLoader />);
        }
    }
}
