import React, {Component} from "react";

//import {getArticle} from '../actions/articlesActions';

export default class CommentsInfo extends Component {
    constructor(props) {
        super(props);
    }

    commentsInfo = () => {
        const { length } = this.props.comments;
        return (
            (length > 0)
                ? <span>
                      <i className="comments outline icon"/>{length} <span
                className="ui link">Show comments</span>
                    </span>
                : <span>
                      <i className="comments outline icon"/>{length} Still no comments
                  </span>
        );
    }

    render() {
        return (
            <div className="meta">
                {this.commentsInfo()}
            </div>
        );
    }
}

