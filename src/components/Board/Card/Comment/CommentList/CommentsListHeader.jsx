import React, { Component } from "react";

export default class CommentsList extends Component {
    render = () => {
        return (
            <div className="content">
                <span className="ui header"><i className="comments outline icon"/>Comments ({this.props.comments.length})</span>
                <span className="meta right floated"><i className="wizard icon"/>Comments can be modified</span>
            </div>
        );
    }
}