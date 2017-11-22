import React, { Component } from "react";

export default class CommentContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameEditMode: false,
            name: this.props.commenter.name,
            commentEditMode: false,
            comment: this.props.text
        };
    }

    renderCommenterName = () => {
        let input = <div>
            <button
                className="ui green mini button"
                onClick={() => this.saveCommenterName()}
            >
                <i className="user icon"/>
                Save name (id{this.props.commenter.id})
            </button>
            <div className="ui form">
                <div className="field">
                    <input
                        style={{'marginTop': '5px'}}
                        type="text"
                        value={this.state.name}
                        onChange={e => this.setState({name: e.target.value})}
                    />
                </div>
            </div>

        </div>;

        let link = <a className="author">
            <i className="user icon"/>{this.props.commenter.name} (id{this.props.commenter.id})
        </a>;

        return (this.state.nameEditMode ? input : link);
    }

    render() {
        return (
            <div>
                {this.renderCommenterName()}
            </div>
        );
    }
}