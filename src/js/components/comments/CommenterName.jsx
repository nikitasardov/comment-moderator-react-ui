import React, { Component } from "react";
import {connect} from 'react-redux';

import { saveUser } from '../../actions/dataActions';

@connect((store) => {
    return {
        users: store.data.users,
        userInEditMode: store.data.userInEditMode
    };
})
export default class CommenterName extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newName: this.props.users[this.props.commenterID].name
        };
    }

    renderCommenterName() {
        console.log('CommenterName', this.props);
        const {dispatch, commenterID, users, userInEditMode} = this.props;

        let input = <div>
            <button className="ui green mini button"
                    onClick={() => {dispatch(saveUser(
                        commenterID,
                        this.state.newName
            ))}}>
                <i className="user icon"/>
                Save name (id{commenterID})
            </button>
            <div className="ui form">
                <div className="field">
                    <input
                        style={{'marginTop': '5px'}}
                        type="text"
                        placeholder={users[commenterID].name}
                        value={this.state.newName}
                        onChange={e => this.setState({newName: e.target.value})}
                    />
                </div>
            </div>

        </div>;

        let link = <a className="author">
            <i className="user icon"/>{users[commenterID].name} (id{commenterID})
        </a>;

        return (userInEditMode === commenterID ? input : link);
    }

    render() {
        return (
            <div>
                {this.renderCommenterName()}
            </div>
        );
    }
}