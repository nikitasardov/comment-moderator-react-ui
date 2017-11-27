import React, { Component } from "react";

import { putComment } from '../../actions/dataActions';

export default class EditCommentButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameEditMode: false,
            name: this.props.comment.commenter.name,
            commentEditMode: false,
            comment: this.props.text
        };
    }

    saveCommentText = () => {
        console.log('putCommentF(): commentID', this.props.id,
                    'this.state.comment',this.state.comment);
        this.props.putCommentF(this.props.id, this.state.comment)
            .then(result => {
                if (result) {
                    this.setState({
                        commentEditMode: false
                    })
                }
            });
    }

    renderEditCommentButton = () => {
        let editButton = <button
            className="ui violet mini button"
            onClick={() => this.setState(
                {
                    commentEditMode: true,
                    nameEditMode: false
                }
            )}
        >
            <i className="comment icon"/>Edit comment
        </button>;

        let cancelButton = <button
            className="ui red mini button"
            onClick={() => this.setState(
                {
                    commentEditMode: false,
                    comment: this.props.text
                }
            )}
        >
            <i className="comment icon"/>Cancel editing comment
        </button>;

        return (this.state.commentEditMode ? cancelButton : editButton);
    }

    render() {
        return (
            <div>
                {this.renderEditCommentButton()}
            </div>
        );
    }
}