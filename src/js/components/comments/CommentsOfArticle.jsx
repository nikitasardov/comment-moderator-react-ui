import React, { Component } from "react";
import {connect} from 'react-redux';

import CommentItem from "./CommentItem.jsx";
import CommentsListHeader from "./CommentsListHeader.jsx";

import {mapObject} from '../../libs/functions';

@connect((store) => {
    return {
        comments: store.data.comments
    };
})
export default class CommentsOfArticle extends Component {

    render() {
        //console.log('Comments of articles', this.props);
        const {comments, commentsArr} = this.props;

        let commentsOfArticle = commentsArr.map(commentID => {
            const comment = comments[commentID];
            console.log('currenc comment item', comment);
            return (
                <CommentItem
                    key={comment.id.toString()}
                    commentID={comment.id}
                    commenterID={comment.commenter}
                />
            );
        });

        return (
            <div className="content" /*style={{'maxHeight': '60vh'}}*/>
                <CommentsListHeader commentsArr={commentsArr}/>
                <div
                    className="ui comments"
                    /*style={{'maxHeight': '45vh', 'overflowY': 'scroll'}}*/
                >
                    {commentsOfArticle}
                </div>
            </div>
        );
    }
}