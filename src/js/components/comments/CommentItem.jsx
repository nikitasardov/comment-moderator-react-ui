import React, { Component } from "react";
import {connect} from 'react-redux';

import EditNameButton from '../buttons/EditNameButton.jsx';
import EditCommentButton from '../buttons/EditCommentButton.jsx';
import CommenterName from './CommenterName.jsx';
import CommentContent from './CommentContent.jsx';

@connect((store) => {
    return {
        users: store.data.users
    };
})
export default class CommentItem extends Component {
    constructor(props) {
        super(props);
        /*this.state = {
            nameEditMode: false,
            name: this.props.commenter.name,
            commentEditMode: false,
            comment: this.props.text
        };*/
    }

    render() {
        return (
            <div className="comment">
                <div className="ui inverted blue segment">
                    <div className="content">
                        <div className="ui right floated ">
                            {/*<EditNameButton commenter={this.props.commenterID} />*/}
                            {/*<EditCommentButton comment={this.props.commentID}/>*/}
                        </div>
                        <CommenterName
                            commenterID={this.props.commenterID}
                        />
                        <CommentContent
                            /*comment={this.props.commentText}*/
                            сommentID={this.props.commentID}
                        />
                    </div>
                </div>
            </div>
        );
    }
}