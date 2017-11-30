import React, { Component } from "react";
import {connect} from 'react-redux';

import { saveComment } from '../../actions/dataActions';

@connect((store) => {
    return {
        comments: store.data.comments,
        commentInEditMode: store.data.commentInEditMode
    };
})
export default class CommentContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newText: this.props.comments[this.props.commentID].text
        };
    }

    renderCommentText() {
        const {dispatch, commentID, comments, commentInEditMode} = this.props;

        let textarea = <div className="ui form">
            <button className="ui green mini button"
                    style={{'marginTop': '15px', 'marginBottom': '5px'}}
                    onClick={() => {dispatch(saveComment({
                        id: commentID,
                        text: this.state.newText,
                        commenter: comments[commentID].commenter
            }))}}>
                <i className="comment icon"/>
                Save comment (id{commentID})
            </button>
            <div className="field">
                <textarea
                    onChange={e => this.setState({newText: e.target.value})}
                    placeholder={comments[commentID].text}
                    value={this.state.newText}
                />
            </div>
        </div>;

        let text = <div className="text">
            {comments[commentID].text}
        </div>;

        return (commentInEditMode === commentID ? textarea : text);
    }

    render() {
        //console.log('this.props.commentID', this.props.commentID);
        return (
            <div>
                {this.renderCommentText()}
            </div>
        );
    }
}