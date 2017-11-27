import React, { Component } from "react";
import {connect} from 'react-redux';

import { putUser } from '../../actions/dataActions';

@connect((store) => {
    return {
        /*nameEditMode: store.users.nameEditMode,*/
        article: store.data.singleArticleData,
        articles: store.data.articles,
        haveData: store.data.haveData,
        view: store.navigation.view
    };
})

export default class EditNameButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameEditMode: false,
            name: this.props.commenter.name,
            commentEditMode: false
        };
    }

    saveCommenterName() {
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

    renderEditNameButton() {
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

    render() {
        return (
            <div>
                {this.renderEditNameButton()}
            </div>
        );
    }
}