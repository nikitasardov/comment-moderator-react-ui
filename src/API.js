import App from "./App";

export default class API {
    constructor() {
        this.baseURL = 'http://91.201.41.52:4567/api';
        this.getArticlesURL = `${this.baseURL}/articles/`;
        this.getArticleURL = `${this.baseURL}/articles/`;

        //http://joxi.ru/52avD0jcGxoNnA plural "comments", singular "user"
        this.putCommentURL = `${this.baseURL}/comments/`;
        this.putUserURL = `${this.baseURL}/user/`;
    }

    /**
     * Gets some articles to fill the board
     *
     */
    getBoardInfo() {
        return this.getAllArticles();
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
                App.setState({articles: json});
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
}
/*response => {
 /!*if (response.status !== 200) {
 console.log('Looks like there was a problem. Status Code: ' +
 response.status);
 return;
 }*!/

 // Examine the text in the response
 response.json().then(function (data) {
 console.log(data);
 });
 }*/