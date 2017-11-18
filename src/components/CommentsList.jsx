import React, { Component } from "react";

import CommentItem from "./CommentItem";
import CommentsListHeader from "./CommentsListHeader";

export default class CommentsList extends Component {

    render = () => {
        let putUserF = this.props.putUserF;

        let comments = this.props.comments.map(function(comment) {
            return <CommentItem
                key={comment.id.toString()}
                id={comment.id}
                commenter={comment.commenter}
                text={comment.text}
                putUserF={putUserF}
            />
        });

        return (
            <div className="content" style={{'maxHeight': '60vh'}}>
                <CommentsListHeader />
                <div className="ui comments" style={{'maxHeight': '45vh', 'overflowY': 'scroll'}}>
                    {comments}
                </div>
            </div>
        );
    }
}