import React, {Component} from "react";
import {connect} from 'react-redux';

import CSSPreLoader from "./CSSPreLoader.jsx";
import Breadcrumbs from '../Breadcrumbs.jsx';
import CommentItem from "../comments/CommentItem.jsx";
import CommentsListHeader from "../comments/CommentsListHeader.jsx";

import {getAllArticles} from '../../actions/dataActions';
import {mapObject} from '../../libs/functions';

import {changeView} from '../../actions/navigationActions';
import {VIEW_LIST_OF_COMMENTS} from '../../constants.js';

@connect((store) => {
    return {
        comments: store.data.comments,
        users: store.data.users,
        dataFetched: store.data.dataFetched,
        view: store.navigation.view
    };
})
export default class AllCommentsList extends Component {

    componentWillMount() {
        this.props.dispatch(getAllArticles());
    }

    componentWillUpdate(nextProps, nextState) {
        if (nextProps.view.data.forceFetch) {
            this.props.dispatch(getAllArticles());
        }
    }

    render() {
        if (this.props.view.data.forceFetch) {
            this.props.dispatch(changeView(VIEW_LIST_OF_COMMENTS, {
                forceFetch: false
            }))
        }

        const {comments, dataFetched} = this.props;

        let commentsArr = [];
        let commentsOfUser = mapObject(comments, commentID => {
            const comment = comments[commentID];
            commentsArr.push(commentID);
            return (
                <CommentItem
                    key={comment.id.toString()}
                    commentID={comment.id}
                    commenterID={comment.commenter}
                />
            )
    });

        if (dataFetched) {
            return (
                <div className="ui container">
                    <h3 className="header" style={{'paddingTop': '15px'}}>
                        <i className="doctor icon"/>Comment moderator
                    </h3>

                    <Breadcrumbs viewTitle={'All comments'}/>

                    <div className="ui cards" style={{'clear':'both'}}>
                        <div className='ui fluid card' style={{'background': '#909090'}}>
                            <div className="content">

                                <CommentsListHeader commentsArr={commentsArr} />

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
