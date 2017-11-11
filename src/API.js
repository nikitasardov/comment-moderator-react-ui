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
        return this.getAllArticles()
    }

    /**
     * Gets all articles
     *
     */
    getAllArticles() {
        return new Promise((resolve, reject) => {
            fetch(this.getArticlesURL, {
                method: 'GET'
            })
                .then(response => response.json())
                .then(json => {
                    console.log('articles json:', json);
                    resolve(json);
                })
                .catch(function (err) {
                    console.log('Error:', err);
                    reject({});
                });
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