import React, {Component} from "react";

export default class Article extends Component {

    render = () => {

        return (
            <div className="content" style={{'maxHeight': '30vh'}}>
                <div className="header">
                    <i className="file text outline icon"/>{this.props.title} (id{this.props.id})
                    <button
                        className="ui right floated grey mini button"
                        onClick={() => this.props.refreshArticleF(this.props.id)}
                    >
                        <i className="repeat icon"/>Refresh
                    </button>
                </div>

                <div className="meta" style={{'clear':'both'}}>
                    <span className="name">
                        <i className="user icon"/>{this.props.author.name} (id{this.props.author.id})
                    </span>
                    <span className="ui right floated">
                        <i className="protect icon"/>Article title and content cannot be modified</span>
                </div>

                <div style={{'maxHeight': '15vh', 'overflowY': 'scroll', 'clear':'both'}}>
                    <div className="ui raised inverted grey segment">
                        {this.props.text}
                    </div>
                </div>
            </div>
        );
    }
}

