import React, { Component } from "react";

import CommentItem from "./CommentItem.jsx";
import CommentsListHeader from "./CommentsListHeader.jsx";

export default class CommentsList extends Component {

    render() {

        let comments = this.props.comments.map(function(comment) {
            return (
                <CommentItem
                    key={comment.id.toString()}
                    id={comment.id}
                    commenter={comment.commenter}
                    text={comment.text}
                    comment={comment}
                />
            );
        });

        return (
            <div className="content" style={{'maxHeight': '60vh'}}>
                <CommentsListHeader comments={comments}/>
                <div className="ui comments"
                     style={{'maxHeight': '45vh', 'overflowY': 'scroll'}}>
                    {comments}
                </div>
            </div>
        );
    }
}