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
        const {view, dispatch, articleID, comments} = this.props;

        if (view.viewID === VIEW_SINGLE_ARTICLE)  {
            return ('');
        }
        return (
            <div
                style={{'cursor': 'pointer'}}
                className="meta"
                onClick={() => {
                    dispatch(changeView(VIEW_SINGLE_ARTICLE, {articleID: articleID}))
                }}
            >
                <span>{comments.length} <i className="comments outline icon"/> Open card</span>
            </div>
        );
    }
}

