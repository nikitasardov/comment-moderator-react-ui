import React, { Component } from "react";

import EditNameButton from './EditNameButton.jsx';
import EditCommentButton from './EditCommentButton.jsx';
import CommenterName from './CommenterName.jsx';
import CommentContent from './CommentContent.jsx';

export default class CommentItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameEditMode: false,
            name: this.props.commenter.name,
            commentEditMode: false,
            comment: this.props.text
        };
    }

    render() {
        return (
            <div className="comment">
                <div className="ui inverted blue segment">
                    <div className="content">
                        <div className="ui right floated ">
                            <EditNameButton
                                commenter={this.props.commenter} />
{/*                            <EditCommentButton />*/}
                        </div>
                        <CommenterName
                            commenter={this.props.commenter} />
{/*                        <CommentContent />*/}
                    </div>
                </div>
            </div>
        );
    }
}