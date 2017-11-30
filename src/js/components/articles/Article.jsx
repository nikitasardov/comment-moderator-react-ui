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

    render() {
        const {view, dispatch, articleID, title, authorID, commentsArr, articleText} = this.props;

        let headerStyle = {};
        if (view.viewID !== VIEW_SINGLE_ARTICLE) {
            headerStyle = {'cursor': 'pointer'};
        }

        return (
            <div className="content" style={{'maxHeight': '50vh'}}>
                <h4
                    className="header"
                    style={headerStyle}
                    onClick={() => {
                        if (view.viewID !== VIEW_SINGLE_ARTICLE) {
                            dispatch(changeView(VIEW_SINGLE_ARTICLE, {articleID: articleID}))
                        }
                    }}
                >
                    <i className="file text outline icon"/>{title} (id{articleID})

                    <RefreshArticleButton articleID={this.props.articleID} />
                </h4>

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

