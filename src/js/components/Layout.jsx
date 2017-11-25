import React, { Component } from "react";
import { connect } from 'react-redux';

import Board from './views/Board.jsx';
import ArticlesList from './views/ArticlesList.jsx';
import SingleArticle from './views/SingleArticle.jsx';
import NoDataError from './views/NoDataError.jsx';

import { getAllArticles } from '../actions/articlesActions';

@connect((store) => {
    return {
        articles: store.articles.articles,
        haveData: store.articles.haveData,
        viewID: store.articles.viewID,
        singleArticleData: store.articles.singleArticleData
    };
})
export default class Layout extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        if (!this.props.haveData) {
            this.props.dispatch(getAllArticles());
        }
    }

    componentDidMount() {
        if (!this.props.haveData) {
            this.props.dispatch(getAllArticles());
        }
    }

    render() {
        const { articles, haveData, viewID, singleArticleData } = this.props;

        /**
         * viewID = 0 - error fetching
         * viewID = 1 - list of articles
         * viewID = 2 - list of comments
         * viewID = 3 - user`s comments
         * viewID = 4 - single article with comments
         */
        console.log('viewID', viewID);
        switch (viewID) {
            case 1:
                if (haveData && articles.length) {
                    return (<ArticlesList data={articles}/>)
                } else {
                    return (<NoDataError />);
                }
            case 2:

            case 3:

            case 4:
                if (haveData && singleArticleData) {
                    return (<SingleArticle article={singleArticleData}/>)
                } else {
                    return (<NoDataError />);
                }
            case 0:
                return (<NoDataError />);
            default:
                return (<NoDataError />);
        }
    }
}
