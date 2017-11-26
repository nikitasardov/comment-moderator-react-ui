import React, {Component} from "react";
import {connect} from 'react-redux';

import {changeView} from '../../actions/navigationActions';

import ArticleAuthor from './ArticleAuthor.jsx';
import CommentsInfo from '../comments/CommentsInfo.jsx';

import {VIEW_SINGLE_ARTICLE} from '../../constants.js';

@connect((store) => {
    return {
        articles: store.articles.articles,
        haveData: store.articles.haveData,
        view: store.navigation.view
    };
})
export default class Article extends Component {
    constructor(props) {
        super(props);
    }

    excerpt = (text) => {
        return ((this.props.excerpt) ? (text.substring(0, 200) + '...') : (text));
    }

    render() {
        let headerStyle = {};
        if (this.props.view.viewID !== VIEW_SINGLE_ARTICLE) {
            headerStyle = {'cursor': 'pointer'};
        }
        return (
            <div className="content" style={{'maxHeight': '50vh'}}>
                <h4
                    className="header"
                    style={headerStyle}
                    onClick={() => {
                        if (this.props.view.viewID !== VIEW_SINGLE_ARTICLE) {
                            this.props.dispatch(changeView(VIEW_SINGLE_ARTICLE, {articleID: this.props.id}))
                        }
                    }}
                >
                    <i className="file text outline icon"/>{this.props.title} (id{this.props.id})
                </h4>

                <ArticleAuthor author={this.props.author}/>

                <div style={{'maxHeight': '40vh', /* 'overflowY': 'scroll',*/ 'clear': 'both'}}>
                    <div className="ui raised inverted grey segment">
                        {this.excerpt(this.props.text)}
                    </div>
                </div>

                <CommentsInfo
                    comments={this.props.comments}
                    articleID={this.props.id}
                />

            </div>
        );
    }
}

