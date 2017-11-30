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
    }

    render() {
        console.log('CommentItem', this.props);
        const {commenterID, commentID} = this.props;
        return (
            <div className="comment">
                <div className="ui inverted blue segment">
                    <div className="content">
                        <div className="ui right floated ">
                            <EditNameButton commenterID={commenterID} />
                            <EditCommentButton commentID={commentID}/>
                        </div>
                        <CommenterName commenterID={commenterID} />
                        <CommentContent commentID={commentID} />
                    </div>
                </div>
            </div>
        );
    }
}