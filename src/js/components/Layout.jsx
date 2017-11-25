import React, {Component} from "react";
import {connect} from 'react-redux';

import ArticlesList from './views/ArticlesList.jsx';
import SingleArticle from './views/SingleArticle.jsx';
import NoDataError from './views/NoDataError.jsx';

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
            case 1:
                return (<ArticlesList />);
            case 2:

            case 3:

            case 4:
                return (<SingleArticle />);
            case 0:
                return (<NoDataError />);
            default:
                return (<NoDataError />);
        }
    }
}
