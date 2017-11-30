import React, {Component} from "react";
import {connect} from 'react-redux';

import ArticlesList from './views/ArticlesList.jsx';
import AllCommentsList from './views/AllCommentsList.jsx';
import UsersCommentsList from './views/UsersCommentsList.jsx';
import SingleArticle from './views/SingleArticle.jsx';
import NoDataError from './views/NoDataError.jsx';

import {
    VIEW_LIST_OF_ARTICLES,
    VIEW_LIST_OF_COMMENTS,
    VIEW_USER_S_COMMENTS,
    VIEW_SINGLE_ARTICLE,
    VIEW_ERROR
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

        switch (view.viewID) {
            case VIEW_LIST_OF_ARTICLES:
                return (<ArticlesList />);
            case VIEW_LIST_OF_COMMENTS:
                return (<AllCommentsList />);
            case VIEW_USER_S_COMMENTS:
                return (<UsersCommentsList />);
            case VIEW_SINGLE_ARTICLE:
                return (<SingleArticle />);
            case VIEW_ERROR:
                return (<NoDataError />);
            default:
                return (<NoDataError />);
        }
    }
}
