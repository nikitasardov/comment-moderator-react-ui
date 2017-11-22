import React, { Component } from "react";
import { connect } from 'react-redux';

import Board from './Board.jsx';
import NoDataError from './NoDataError.jsx';

import { getAllArticles } from '../actions/articlesActions';

@connect((store) => {
    return {
        articles: store.articles.articles,
        gotData: store.articles.gotData
    };
})
export default class Layout extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        if (!this.props.gotData) {
            this.props.dispatch(getAllArticles());
        }
    }

    render() {
        const { articles, gotData } = this.props;

        if (gotData && articles.length) {
            return (<Board data={this.props.articles}/>)
        } else {
            return (<NoDataError />);
        }
    }
}
