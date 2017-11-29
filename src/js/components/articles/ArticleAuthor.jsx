import React, {Component} from "react";
import {connect} from 'react-redux';

@connect((store) => {
    return {
        users: store.data.users
    };
})
export default class ArticleAuthor extends Component {

    render() {
        const {authorID, users} = this.props;
        return (
            <div className="meta" style={{'clear':'both'}}>
                <span className="name">
                    <i className="user icon"/>{users[authorID].name} (id{authorID})
                </span>
            </div>
        );
    }
}

