import React from "react";

export default class CommentsList extends React.Component {
    render() {
        return (
            <div className="content">
                <h3>Comments</h3>
                <div className="meta">
                    Total number of comments: ...
                </div>
            </div>
        );
    }
}