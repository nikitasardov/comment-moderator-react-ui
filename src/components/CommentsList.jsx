import React from "react";

import CommentItem from "./CommentItem";
import CommentsListHeader from "./CommentsListHeader";

export default class CommentsList extends React.Component {
    render() {
        return (
            <div className="content">
                <CommentsListHeader />
                <div className="ui comments" style={{'maxHeight': '60vh', 'overflow-y': 'scroll'}}>
                    <CommentItem/>
                    <CommentItem/>
                    <CommentItem/>
                    <CommentItem/>
                    <CommentItem/>
                    <CommentItem/>
                    <CommentItem/>
                </div>
            </div>
        );
    }
}