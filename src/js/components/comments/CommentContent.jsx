import React, {Component} from "react";

export default class CommentContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            commentEditMode: false,
            comment: this.props.text
        };
    }

    renderCommentText() {
        let textarea = <div className="ui form">
            {/*<button
             className="ui green mini button"
             style={{'marginTop': '15px', 'marginBottom': '5px'}}
             onClick={() => this.saveCommentText()}
             >
             <i className="comment icon"/>
             Save comment (id{this.props.id})
             </button>*/}
            <div className="field">
                <textarea onChange={e => this.setState({comment: e.target.value})}>
                    {this.state.comment}
                </textarea>
            </div>
        </div>;

        let text = <div className="text">

            {this.props.comment}

        </div>;

        return (this.state.commentEditMode ? textarea : text);
    }

    render() {
        return (
            <div>
                {this.renderCommentText()}
            </div>
        );
    }
}