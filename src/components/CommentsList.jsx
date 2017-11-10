import React from "react";

import CommentItem from "./CommentItem";
import CommentsListHeader from "./CommentsListHeader";

export default class CommentsList extends React.Component {
/*    constructor(props) {
        super(props);
    }*/

    render() {
        let comments = this.props.comments.map(function(comment) {
            return <CommentItem
                key={comment.id.toString()}
                id={comment.id}
                commenter={comment.commenter}
                text={comment.text}
            />
        });

        return (
            <div className="content">
                <CommentsListHeader />
                <div className="ui comments" style={{'maxHeight': '60vh', 'overflowY': 'scroll'}}>
                    {comments}
                </div>
            </div>
        );
    }
}