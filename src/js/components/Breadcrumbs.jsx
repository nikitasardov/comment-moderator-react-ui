import React, {Component} from "react";
import { connect } from 'react-redux';

import { goHome } from '../actions/navigationActions';

@connect((store) => {
    return {
        articles: store.articles.articles,
        haveData: store.articles.haveData,
        viewID: store.articles.viewID,
        singleArticleData: store.articles.singleArticleData
    };
})
export default class Breadcrumbs extends Component {
    /*constructor(props) {
        super(props);
    }*/

    render() {
        let text = 'Articles';
        let crumbs = '';
        let isLink = false;
        if (this.props.viewTitle) {
            crumbs = ' / ' + this.props.viewTitle;
            isLink = true;
        }

        return (
            <h4 className="header" style={{'marginTop': '0'}}>
                {(isLink)
                    ? <span className="ui link"
                            style={{'cursor': 'pointer', 'color': '#333'}}
                            onClick={() => this.props.dispatch(goHome())}>{text}</span>
                    : text
                }
                {crumbs}
            </h4>
        );
    }
}
