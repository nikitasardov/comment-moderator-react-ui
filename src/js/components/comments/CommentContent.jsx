import React, { Component } from "react";
import {connect} from 'react-redux';

@connect((store) => {
    return {
        users: store.data.users,
        comments: store.data.comments
    };
})
export default class CommentContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            commentEditMode: false,
            newComment: this.props.comments[this.props.сommentID].text
        };
    }

    renderCommentText() {
        let textarea = <div className="ui form">
            {/*<button
             className="ui green mini button"
             style={{'marginTop': '15px', 'marginBottom': '5px'}}
             onClick={() => this.saveCommentText()}
             >
             <i className="comment icon"/>
             Save comment (id{this.props.id})
             </button>*/}
            <div className="field">
                <textarea onChange={e => this.setState({newComment: e.target.value})}>
                    {this.state.newComment}
                </textarea>
            </div>
        </div>;

        let text = <div className="text">

            {this.props.comments[this.props.сommentID].text}

        </div>;

        return (this.state.commentEditMode ? textarea : text);
    }

    render() {
        return (
            <div>
                {this.renderCommentText()}
            </div>
        );
    }
}