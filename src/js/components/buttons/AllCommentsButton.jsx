import React, {Component} from "react";
import {connect} from 'react-redux';

import {changeView} from '../../actions/navigationActions';
import {VIEW_LIST_OF_COMMENTS} from '../../constants.js';

@connect()
export default class AllCommentsButton extends Component {

    render() {
        return (
            <button className="ui right floated grey mini button"
                    onClick={() => this.props.dispatch(changeView(VIEW_LIST_OF_COMMENTS, {forceFetch: true}))}>
                <i className="comments icon"/>View all comments
            </button>
        );
    }
}

