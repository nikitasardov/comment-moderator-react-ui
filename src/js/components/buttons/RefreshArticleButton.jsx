import React, {Component} from "react";

export default class RefreshCardButton extends Component {

    render() {

        return (
            <button
                className="ui right floated grey mini button"
                onClick={() => this.props.refreshArticleF(this.props.id)}
            >
                <i className="repeat icon"/>Refresh
            </button>
        );
    }
}

