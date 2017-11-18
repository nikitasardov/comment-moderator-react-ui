import React, { Component } from "react";

export default class CommentItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameEditMode: false,
            name: this.props.commenter.name,
            commentEditMode: false,
            comment: this.props.text
        };
    }

    saveCommenterName = () => {
        console.log('putUserF(): commenterID', this.props.commenter.id,
                    'this.state.name',this.state.name);
        this.props.putUserF(this.props.commenter.id, this.state.name)
            .then(result => {
                if (result) {
                    this.setState({
                        nameEditMode: false
                    })
                }
            });
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
                        value={this.state.name/* !== this.props.commenter.name
                                ? this.props.commenter.name
                                : this.state.name*/}
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

    renderEditNameButton = () => {
        let editButton = <button
            className="ui black mini button"
            onClick={() => this.setState(
                {
                    nameEditMode: true,
                    commentEditMode: false
                }
            )}
        >
            <i className="user icon"/>Edit name
        </button>;

        let cancelButton = <button
            className="ui red mini button"
            onClick={() => this.setState(
                {
                    nameEditMode: false,
                    name: this.props.commenter.name
                }
            )}
        >
            <i className="user icon"/>Cancel editing name
        </button>;

        return (this.state.nameEditMode ? cancelButton : editButton);
    }

    saveCommentText = () => {
        console.log('putCommentF(): commentID', this.props.id,
                    'this.state.comment',this.state.comment);
        this.props.putCommentF(this.props.id, this.state.comment)
            .then(result => {
                if (result) {
                    this.setState({
                        commentEditMode: false
                    })
                }
            });
    }

    renderCommentText = () => {
        let textarea = <div className="ui form">
            <button
                className="ui green mini button"
                style={{'marginTop': '15px', 'marginBottom': '5px'}}
                onClick={() => this.saveCommentText()}
            >
                <i className="comment icon"/>
                Save comment (id{this.props.id})
            </button>
            <div className="field">
                <textarea onChange={e => this.setState({comment: e.target.value})}>
                    {this.state.comment /*!== this.props.text
                        ? this.state.comment
                        : this.props.text*/}
                </textarea>
            </div>
        </div>;

        let text = <div className="text" >

            {this.props.text}

        </div>;

        return (this.state.commentEditMode ? textarea : text);
    }

    renderEditCommentButton = () => {
        let editButton = <button
            className="ui violet mini button"
            onClick={() => this.setState(
                {
                    commentEditMode: true,
                    nameEditMode: false
                }
            )}
        >
            <i className="comment icon"/>Edit comment
        </button>;

        let cancelButton = <button
            className="ui red mini button"
            onClick={() => this.setState(
                {
                    commentEditMode: false,
                    comment: this.props.text
                }
            )}
        >
            <i className="comment icon"/>Cancel editing comment
        </button>;

        return (this.state.commentEditMode ? cancelButton : editButton);
    }

    render = () => {

        return (
            <div className="comment">
                <div className="ui inverted blue segment">

                    <div className="content">

                        <div className="ui right floated ">

                            {this.renderEditNameButton()}

                            {this.renderEditCommentButton()}

                        </div>

                        {this.renderCommenterName()}

                        {this.renderCommentText()}

                    </div>
                </div>
            </div>
        );
    }
}