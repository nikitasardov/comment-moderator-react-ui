import React, {Component} from "react";
import {connect} from 'react-redux';

import ArticlesList from './views/ArticlesList.jsx';
import SingleArticle from './views/SingleArticle.jsx';
import NoDataError from './views/NoDataError.jsx';

import {
    VIEW_ERROR,
    VIEW_LIST_OF_ARTICLES,
    VIEW_LIST_OF_COMMENTS,
    VIEW_USER_S_COMMENTS,
    VIEW_SINGLE_ARTICLE
} from '../constants.js';

@connect((store) => {
    return {
        view: store.navigation.view
    };
})
export default class Layout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {view} = this.props;

        /**
         * view.viewID = 0 - error fetching
         * view.viewID = 1 - list of articles
         * view.viewID = 2 - list of comments
         * view.viewID = 3 - user`s comments
         * view.viewID = 4 - single article with comments
         */
        switch (view.viewID) {
            case VIEW_LIST_OF_ARTICLES:
                return (<ArticlesList />);
            case VIEW_LIST_OF_COMMENTS:

            case VIEW_USER_S_COMMENTS:

            case VIEW_SINGLE_ARTICLE:
                return (<SingleArticle />);
            case VIEW_ERROR:
                return (<NoDataError />);
            default:
                return (<NoDataError />);
        }
    }
}
