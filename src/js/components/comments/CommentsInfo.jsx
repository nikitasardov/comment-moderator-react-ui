import React, {Component} from "react";
import {connect} from 'react-redux';

import {changeView} from '../../actions/navigationActions';
import {VIEW_SINGLE_ARTICLE} from '../../constants.js';

@connect((store) => {
    return {
        view: store.navigation.view
    };
})
export default class CommentsInfo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.view.viewID === VIEW_SINGLE_ARTICLE)  {
            return ('');
        }
        return (
            <div
                style={{'cursor': 'pointer'}}
                className="meta"
                onClick={() => {
                    this.props.dispatch(changeView(VIEW_SINGLE_ARTICLE, {articleID: this.props.articleID}))
                }}
            >
                <span>
                    {this.props.comments.length} <i className="comments outline icon"/> Open card
                </span>
            </div>
        );
    }
}

