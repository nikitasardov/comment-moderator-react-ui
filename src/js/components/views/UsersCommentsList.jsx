import React, {Component} from "react";
import {connect} from 'react-redux';

import CSSPreLoader from "./CSSPreLoader.jsx";
import Breadcrumbs from '../Breadcrumbs.jsx';
import CommentItem from "../comments/CommentItem.jsx";

import {getAllArticles} from '../../actions/dataActions';
import {mapObject} from '../../libs/functions';

@connect((store) => {
    return {
        comments: store.data.comments,
        users: store.data.users,
        dataFetched: store.data.dataFetched,
        view: store.navigation.view
    };
})
export default class UsersCommentsList extends Component {

    componentWillMount() {
        this.props.dispatch(getAllArticles());
    }

    render() {
        const {comments, dataFetched, view, users} = this.props;

        let commentsArr = [];
        let commentsOfUser = mapObject(comments, commentID => {
            const comment = comments[commentID];
            if (comment.commenter === view.data.userID) {
                commentsArr.push(commentID);
                return (
                    <CommentItem
                        key={comment.id.toString()}
                        commentID={comment.id}
                        commenterID={comment.commenter}
                    />
                )
            }
        });
        let mayBePlural = commentsArr.length === 1 ? ' comment by ' : ' comments by ';
        let commenterComments = commentsArr.length + mayBePlural + users[view.data.userID].name;

        if (dataFetched) {
            return (
                <div className="ui container">
                    <h3 className="header" style={{'paddingTop': '15px'}}>
                        <i className="doctor icon"/>Comment moderator
                    </h3>

                    <Breadcrumbs viewTitle={'User`s comments'}/>

                    <div className="ui cards" style={{'clear':'both'}}>
                        <div className='ui fluid card' style={{'background': '#909090'}}>
                            <div className="content">

                                <div className="content">
                                    <span className="ui header"><i className="comments outline icon"/>{commenterComments}</span>
                                    <span className="meta right floated"><i className="wizard icon"/>Comments can be modified</span>
                                </div>

                                <div className="ui comments">
                                    {commentsOfUser}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (<CSSPreLoader />);
        }
    }
}
