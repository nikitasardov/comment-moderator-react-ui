class API {
    constructor() {
        this.baseURL = 'http://91.201.41.52:4567/api';
        this.getArticlesURL = `${this.baseURL}/articles/`;

        // http://joxi.ru/52avD0jcGxoNnA plural "comments", singular "user"
        this.putCommentURL = `${this.baseURL}/comments/`;
        this.putUserURL = `${this.baseURL}/user/`;
    }

    /**
     * Any request to API is sent through this method
     *
     * @param URL
     * @param method
     * @param paramsObj
     * @returns {Promise}
     */
    request = (URL, method, paramsObj) => {
        return new Promise((resolve, reject) => {
            let obj = {
                method: method,
                mode: 'cors'
            };

            if ('undefined' !== typeof paramsObj) {
                obj['headers'] = {
                    //'Access-Control-Request-Headers': 'Content-Type',
                    'Content-Type': 'application/json; charset=utf-8',
                    'Access-Control-Request-Method': 'OPTIONS, PUT'
                };

                obj['body'] = JSON.stringify(paramsObj);
                /*console.log('obj[\'body\']',obj['body']);*/
            }

            fetch(URL, obj)
                .then(response => {
                    let json = response.json();
                    /*console.log(URL, method, paramsObj, 'response json:', json);*/
                    resolve(json);
                })
                .catch(function (err) {
                    //console.log('Error:', URL, method, paramsObj, err);
                    reject(
                        {
                            'error': err,
                            'requestURL': URL,
                            'method': method,
                            'requestParamsObj': paramsObj
                        }
                    );
                });
        });
    }

    /**
     * Gets SOME articles to fill the board
     *
     */
    getBoardInfo = () => {
        return this.getAllArticles()
    }

    /**
     * Gets all articles
     *
     */
    getAllArticles = () => {
        return this.request(this.getArticlesURL, 'GET');
    }

    /**
     * Gets single article
     *
     * @param id
     */
    getArticle = (id) => {
        return this.request(`${this.getArticlesURL}${id}`, 'GET');
    }

    /**
     * Puts single comment
     *
     * @param id
     * @param newText
     */
    putComment = (id, newText) => {
        return this.request(`${this.putCommentURL}${id}`, 'PUT', {'text': newText});
    }

    /**
     * Puts single user
     *
     * @param id
     * @param newName
     */
    putUser = (id, newName) => {
        return this.request(`${this.putUserURL}${id}`, 'PUT', {'name': newName});
    }
}

export default new API();