import React, { Component } from "react";

export default class CommentItem extends Component {
/*    constructor(props) {
        super(props);
    }*/

    render() {
        return (
            <div className="comment">
                <div className="ui inverted blue segment">
                    <div className="content">
                        <span className="author"><i className="user icon"/>{this.props.commenter.name}</span>
                        <div className="ui right floated ">
                            <button className="ui black mini button"><i className="user icon"/>Edit name</button>
                            <button className="ui violet mini button"><i className="comment icon"/>Edit comment</button>
                        </div>
                        <div className="text" >
                            {this.props.text}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
