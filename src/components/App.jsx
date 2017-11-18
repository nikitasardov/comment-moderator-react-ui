import React, {Component} from 'react';

import API from '../libs/API';
import Board from './Board';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            gotData: false
        };
    }

    cmAPI = new API();

    /**
     * Gets articles` data to render on board
     */
    boardInfo = () => {
        this.cmAPI.getBoardInfo()
            .then(result => this.setState(
                {
                    articles: result,
                    gotData: true
                }
            ))
            .catch(result => {
                console.log('getBoardInfo API request failed', result)
            });
    }

    /**
     * Puts users name
     *
     * @param userID
     * @param newName
     */
    /*putUserName = (userID, newName) => {
        let r;
        this.cmAPI.putUser(userID, newName)
            .then(result => {
                console.log('putUser result', result);
                r = true;
            })
            .catch(result => {
                console.log('putUser API request failed', result);
                r = false;
            });
        return r;
    }*/

    putUserName = (userID, newName) => {
        return new Promise((resolve, reject) => {
            this.cmAPI.putUser(userID, newName)
                .then(result => {
                    console.log('putUser result', result);
                    resolve(true);
                })
                .catch(result => {
                    console.log('putUser API request failed', result);
                    reject(false);
                });
        });
    }

    componentWillMount = () => {
        this.boardInfo();
    }

    render = () => {
        return (
            <div>
                <Board
                    data={this.state.articles}
                    gotData={this.state.gotData}
                    putUserF={this.putUserName.bind(this)}
                />
            </div>
        );
    }
}
