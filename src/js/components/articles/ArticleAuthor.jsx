import React, {Component} from "react";

export default class ArticleAuthor extends Component {

    render() {

        return (
            <div className="meta" style={{'clear':'both'}}>
                <span className="name">
                    <i className="user icon"/>{this.props.author.name} (id{this.props.author.id})
                </span>
            </div>
        );
    }
}

