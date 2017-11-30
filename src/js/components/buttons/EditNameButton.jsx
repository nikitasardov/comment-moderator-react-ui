import React, { Component } from "react";
import {connect} from 'react-redux';

import { editUser, cancelEditUser } from '../../actions/dataActions';

@connect((store) => {
    return {
        users: store.data.users,
        userInEditMode: store.data.userInEditMode
    };
})
export default class EditNameButton extends Component {

    renderEditNameButton() {
        const {dispatch, commenterID, userInEditMode} = this.props;

        let editButton = <button className="ui black mini button"
                                 onClick={() => dispatch(editUser(commenterID))}>
                             <i className="user icon"/>Edit name
                         </button>;

        let cancelButton = <button className="ui red mini button"
                                   onClick={() => dispatch(cancelEditUser())}>
                               <i className="user icon"/>Cancel editing name
                           </button>;

        return (userInEditMode === commenterID ? cancelButton : editButton);
    }

    render() {
        return (
            <div style={{'display': 'inline'}}>
                {this.renderEditNameButton()}
            </div>
        );
    }
}