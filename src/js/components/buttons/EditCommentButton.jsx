import React, { Component } from "react";
import {connect} from 'react-redux';

import { editComment, cancelEditComment } from '../../actions/dataActions';

@connect((store) => {
    return {
        comments: store.data.comments,
        commentInEditMode: store.data.commentInEditMode
    };
})
export default class EditCommentButton extends Component {

    renderEditCommentButton() {
        const {dispatch, commentID, commentInEditMode} = this.props;

        let editButton = <button className="ui violet mini button"
                                 onClick={() => dispatch(editComment(commentID))}>
            <i className="comment icon"/>Edit comment
        </button>;

        let cancelButton = <button className="ui red mini button"
                                   onClick={() => dispatch(cancelEditComment())}>
            <i className="comment icon"/>Cancel editing comment
        </button>;

        return (commentInEditMode === commentID ? cancelButton : editButton);
    }

    render() {
        return (
            <div style={{'display': 'inline'}}>
                {this.renderEditCommentButton()}
            </div>
        );
    }
}