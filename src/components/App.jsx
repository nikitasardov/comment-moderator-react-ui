import React, { Component } from 'react';

import API from '../libs/API';
import Board from './Board';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            comments: [],
            articles: []
        };
    }

    cmAPI = new API();

    componentWillMount() {
        this.cmAPI.getBoardInfo()
            .then(result => this.setState({articles: result}));
    }

    render() {
        return (
            <div>
                <Board
                    data={this.state.articles}
                />
            </div>
        );
    }
}
