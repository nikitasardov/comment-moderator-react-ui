import React, { Component } from "react";

import CommentItem from "./CommentList/CommentItem";
import CommentsListHeader from "./CommentList/CommentsListHeader";

export default class CommentsList extends Component {

    render = () => {
        let putUserF = this.props.putUserF;
        let putCommentF = this.props.putCommentF;

        let comments = this.props.comments.map(function(comment) {
            return <CommentItem
                key={comment.id.toString()}
                id={comment.id}
                commenter={comment.commenter}
                text={comment.text}
                putUserF={putUserF}
                putCommentF={putCommentF}
            />
        });

        return (
            <div className="content" style={{'maxHeight': '60vh'}}>
                <CommentsListHeader comments={comments}/>
                <div className="ui comments" style={{'maxHeight': '45vh', 'overflowY': 'scroll'}}>
                    {comments}
                </div>
            </div>
        );
    }
}