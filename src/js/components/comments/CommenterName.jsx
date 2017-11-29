import React, { Component } from "react";
import {connect} from 'react-redux';

@connect((store) => {
    return {
        users: store.data.users
    };
})
export default class CommenterName extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameEditMode: false,
            newName: this.props.users[this.props.commenterID].name
        };
    }

    renderCommenterName() {
        let input = <div>
            <button
                className="ui green mini button"
                onClick={() => this.saveCommenterName()}
            >
                <i className="user icon"/>
                Save name (id{this.props.commenterID})
            </button>
            <div className="ui form">
                <div className="field">
                    <input
                        style={{'marginTop': '5px'}}
                        type="text"
                        value={this.state.newName}
                        onChange={e => this.setState({newName: e.target.value})}
                    />
                </div>
            </div>

        </div>;

        let link = <a className="author">
            <i className="user icon"/>{this.props.users[this.props.commenterID].name} (id{this.props.commenterID})
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