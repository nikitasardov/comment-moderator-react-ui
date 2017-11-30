import React, {Component} from "react";
import {connect} from 'react-redux';

import {changeView} from '../../actions/navigationActions';

import ArticleAuthor from './ArticleAuthor.jsx';
import CommentsInfo from '../comments/CommentsInfo.jsx';
import RefreshArticleButton from '../buttons/RefreshArticleButton.jsx';

import {VIEW_SINGLE_ARTICLE} from '../../constants.js';

@connect((store) => {
    return {
        articles: store.data.articles,
        users: store.data.users,
        view: store.navigation.view
    };
})
export default class Article extends Component {
    constructor(props) {
        super(props);
    }

    mayBeExcerpt(text) {
        return ((this.props.excerpt) ? (text.substring(0, 200) + '...') : (text));
    }

    articleTitle() {
        if (this.props.view.viewID !== VIEW_SINGLE_ARTICLE) {
            return (
                <a className="header" style={{'marginBottom': '14px'}} onClick={() => {this.props.dispatch(changeView(VIEW_SINGLE_ARTICLE, {articleID: this.props.articleID}))}}>
                    <i className="file text outline icon"/>{this.props.title} (id{this.props.articleID})
                </a>
            );
        } else {
            return (
                <h4 className="header">
                    <i className="file text outline icon"/>{this.props.title} (id{this.props.articleID})
                    <RefreshArticleButton articleID={this.props.articleID}/>
                </h4>
            );
        }
    }

    render() {
        const {articleID, authorID, commentsArr, articleText} = this.props;

        return (
            <div className="content" style={{'maxHeight': '50vh'}}>

                {this.articleTitle()}

                <ArticleAuthor authorID={authorID}/>

                <div style={{'maxHeight': '40vh', /* 'overflowY': 'scroll',*/ 'clear': 'both'}}>
                    <div className="ui raised inverted grey segment">
                        {this.mayBeExcerpt(articleText)}
                    </div>
                </div>

                <CommentsInfo
                    comments={commentsArr}
                    articleID={articleID}
                />

            </div>
        );
    }
}

