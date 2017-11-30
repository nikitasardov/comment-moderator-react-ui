import React, {Component} from "react";
import { connect } from 'react-redux';

import AllCommentsButton from './buttons/AllCommentsButton.jsx';
import { goHome } from '../actions/navigationActions';

@connect((store) => {
    return {
        articles: store.data.articles,
        view: store.navigation.view
    };
})
export default class Breadcrumbs extends Component {

    render() {
        let text = 'Articles / ';
        let crumbs = '';
        let isLink = false;
        if (this.props.viewTitle) {
            crumbs = this.props.viewTitle;
            isLink = true;
        }

        return (
            <h4 className="header" style={{'marginTop': '0'}}>
                {(isLink)
                    ? <a style={{'cursor': 'pointer'}}
                         onClick={() => this.props.dispatch(goHome())}>{text}</a>
                    : text
                }
                {crumbs}

                <AllCommentsButton />

            </h4>
        );
    }
}
