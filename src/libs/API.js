export default class API {
    constructor() {
        this.baseURL = 'http://91.201.41.52:4567/api';
        this.getArticlesURL = `${this.baseURL}/articles/`;
        this.getArticleURL = `${this.baseURL}/articles/`;

        // http://joxi.ru/52avD0jcGxoNnA plural "comments", singular "user"
        this.putCommentURL = `${this.baseURL}/comments/`;
        this.putUserURL = `${this.baseURL}/user/`;
    }

    /**
     * Any request to API is sent through this method
     *
     * @param URL
     * @param method
     * @returns {Promise}
     */
    request(URL, method) {
        return new Promise((resolve, reject) => {
            fetch(URL, {
                method: method
            })
                .then(response => {
                    let json = response.json();
                    console.log(URL, method, 'response json:', json);
                    resolve(json);
                })
                .catch(function (err) {
                    console.log('Error:', err, URL, method);
                    reject({});
                });
        });
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
        return this.request(this.getArticlesURL, 'GET');
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