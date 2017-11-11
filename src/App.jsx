import React, { Component } from 'react';

/*import API from './API';*/
import Board from './components/Board';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.baseURL = 'http://91.201.41.52:4567/api';
        this.getArticlesURL = `${this.baseURL}/articles/`;
        this.getArticleURL = `${this.baseURL}/articles/`;

        //http://joxi.ru/52avD0jcGxoNnA plural "comments", singular "user"
        this.putCommentURL = `${this.baseURL}/comments/`;
        this.putUserURL = `${this.baseURL}/user/`;

        this.state = {
            users: [],
            comments: [],
            articles: []
        };
    }

    /*cmAPI = new API();*/

    /**
     * Gets some articles to fill the board
     *
     */
    getBoardInfo() {
        this.getAllArticles();
    }

    /**
     * Gets all articles
     *
     */
    getAllArticles() {
        fetch(this.getArticlesURL, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(json => {
                console.log('articles json:', json);
                this.setState({articles: json});
                return json;
            })
            .catch(function (err) {
                console.log('Error:', err);
                return {}
            });
    }

    /**
     * Gets single article
     *
     * @param id
     */
    getArticle(id) {
        fetch(`${this.getArticleURL}${id}`, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(json => {
                console.log(`article id${id} json:`, json);
                return json;
            })
            .catch(function (err) {
                console.log('Error:', err);
                return {}
            });
    }

    /**
     * Puts single comment
     *
     * @param id
     */
    putComment(id) {
        fetch(`${this.putCommentURL}${id}`, {
            method: 'PUT',
            body: JSON.stringify(id)
        })
            .then(response => response.json())
            .then(json => {
                console.log(`article id${id} json:`, json);
                return json;
            })
            .catch(function (err) {
                console.log('Error:', err);
                return {}
            });
    }

    /**
     * Puts single user
     *
     * @param id
     */
    putUser(id) {
        fetch(`${this.putUserURL}${id}`, {
            method: 'PUT',
            body: JSON.stringify(id)
        })
            .then(response => response.json())
            .then(json => {
                console.log(`article id${id} json:`, json);
                return json;
            })
            .catch(function (err) {
                console.log('Error:', err);
                return {}
            });
    }

    componentWillMount() {
        this.getBoardInfo();
    }

    render() {
        return (
            <div>
                <Board
                    /*data={this.props.data}*/
                    data={this.state.articles}
                />
            </div>
        );
    }
}
