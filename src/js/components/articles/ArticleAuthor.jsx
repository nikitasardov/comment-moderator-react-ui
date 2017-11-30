import React, {Component} from "react";
import {connect} from 'react-redux';

import {changeView} from '../../actions/navigationActions';
import {VIEW_USER_S_COMMENTS} from '../../constants.js';

@connect((store) => {
    return {
        users: store.data.users
    };
})
export default class ArticleAuthor extends Component {

    render() {

        const {authorID, users, dispatch} = this.props;
        return (
            <div className="meta" style={{'clear':'both'}}>
                <a className="author"
                   onClick={() => {
                       dispatch(changeView(VIEW_USER_S_COMMENTS, {userID: authorID}))
                   }}>
                    <i className="user icon"/>{users[authorID].name} (id{authorID})
                </a>
            </div>
        );
    }
}

