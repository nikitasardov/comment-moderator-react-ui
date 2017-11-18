import React, { Component } from "react";

export default class CommentItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameEditMode: false,
            name: this.props.commenter.name,
            commentEditMode: false
        };
    }

    saveCommenterName = () => {
        console.log('putUserF(): commenterID', this.props.commenter.id,
                    'this.state.name',this.state.name);
        this.props.putUserF(this.props.commenter.id, this.state.name)
            .then(result => {
                if (result) {
                    console.log('result',result,'after',this.state.name);
                    this.setState({
                        nameEditMode: true,
                        name: this.state.name
                    })
                }
            });
    }

    renderCommenterName = () => {
        let input = <span>
                <i className="user red icon"/>
                <input
                    className="ui inline"
                    value={this.state.name}
                    onChange={e => this.setState({name: e.target.value})}
                />
                <button
                    className="ui green mini button"
                    style={{'marginLeft': '5px'}}
                    onClick={() => this.setState({nameEditMode: false})}
                >Cancel</button>
            </span>;

        let link = <a className="author">
            <i className="user icon"/>{this.props.commenter.name}
        </a>;

        return (this.state.nameEditMode ? input : link);
    }

    renderEditNameButton = () => {
        let editButton = <button
            className="ui black mini button"
            onClick={() => this.setState({nameEditMode: true})}
        >
            <i className="user icon"/>Edit name
        </button>;

        let saveButton = <button
            className="ui red mini button"
            onClick={() => this.saveCommenterName()/*this.setState({nameEditMode: false})*/}
        >
            <i className="user icon"/>Save name
        </button>;

        return (this.state.nameEditMode ? saveButton : editButton);
    }

    render = () => {

        return (
            <div className="comment">
                <div className="ui inverted blue segment">
                    <div className="content">

                        {this.renderCommenterName()}

                        <div className="ui right floated ">

                            {this.renderEditNameButton()}

                            <button className="ui violet mini button">
                                <i className="comment icon"/>Edit comment
                            </button>
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