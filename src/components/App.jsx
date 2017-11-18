import React, {Component} from 'react';

import API from '../libs/API';
import Board from './Board/Board';

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
     * Gets and renders single articles` data
     * Then refresh article is merged into state object
     */
    articleInfo = (articleID) => {
        this.cmAPI.getArticle(articleID)
            .then(rAtricle => {
                let refreshedArticles = this.state.articles.map(a => {
                   if (a.id === rAtricle.id) {
                       a = rAtricle;
                   }
                   return a;
                });

                this.setState(
                    {
                        articles: refreshedArticles,
                        gotData: true
                    }
                );
            })
            .catch(result => {
                console.log('getArticle API request failed', result)
            });
    }

    /**
     * Puts users name
     *
     * @param userID
     * @param newName
     */
    putUserName = (userID, newName) => {
        return new Promise((resolve, reject) => {
            this.cmAPI.putUser(userID, newName)
                .then(result => {
                    console.log('putUser result', result);
                    this.boardInfo();
                    resolve(true);
                })
                .catch(result => {
                    console.log('putUser API request failed', result);
                    reject(false);
                });
        });
    }

    /**
     * Puts comment text
     *
     * @param commentID
     * @param newText
     */
    putCommentText = (commentID, newText) => {
        return new Promise((resolve, reject) => {
            this.cmAPI.putComment(commentID, newText)
                .then(result => {
                    console.log('putComment result', result);
                    this.boardInfo();
                    resolve(true);
                })
                .catch(result => {
                    console.log('putComment API request failed', result);
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
                    putCommentF={this.putCommentText.bind(this)}
                    refreshArticleF={this.articleInfo.bind(this)}
                />
            </div>
        );
    }
}
