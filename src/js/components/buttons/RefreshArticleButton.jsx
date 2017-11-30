import React, {Component} from "react";
import {connect} from 'react-redux';

import {changeView} from '../../actions/navigationActions';
import {VIEW_SINGLE_ARTICLE} from '../../constants.js';

@connect((store) => {
    return {
        view: store.navigation.view
    };
})
export default class RefreshArticleButton extends Component {

    render() {
        if (this.props.view.viewID === VIEW_SINGLE_ARTICLE) {
            return (
                <button
                    className="ui right floated grey mini button"
                    onClick={() => this.props.dispatch(changeView(VIEW_SINGLE_ARTICLE, {
                        articleID: this.props.articleID,
                        forceFetch: true
                    }))}
                >
                    <i className="repeat icon"/>Refresh
                </button>
            );
        } else {
            return ('');
        }
    }
}

