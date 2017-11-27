export class DataNormalizer {
    /**
     * Extracts article data
     *
     * @param obj
     * @param targetNormalizedObj
     * @returns object
     */
    extractArticleData = (obj, targetNormalizedObj) => {

        targetNormalizedObj.articles[obj.id] = {
            'id': obj.id,
            'author': obj.author.id,
            'title': obj.title,
            'text': obj.text,
            'comments': obj.comments.map(c => c.id)
        };

        return targetNormalizedObj;
    }

    /**
     * Extracts comments data
     *
     * @param obj
     * @param targetNormalizedObj
     * @returns object
     */
    extractCommentsData = (obj, targetNormalizedObj) => {

        const comments = obj.comments;
        for(const comment in comments) {
            if (!comments.hasOwnProperty(comment)) {
                // if comment is not a direct property of comments
                continue;
            }
            targetNormalizedObj.comments[comments[comment].id] = {
                'id': comments[comment].id,
                'text': comments[comment].text,
                'commenter': comments[comment].commenter.id
            };
        }

        return targetNormalizedObj;
    }

    /**
     * Extracts users data
     *
     * @param obj
     * @param targetNormalizedObj
     * @returns object
     */
    extractUsersData = (obj, targetNormalizedObj) => {

        // extract author data from article
        targetNormalizedObj.users[obj.author.id] = {
            'id': obj.author.id,
            'name': obj.author.name
        };

        // extract users data from comments
        const comments = obj.comments;
        for(const comment in comments) {
            if (!comments.hasOwnProperty(comment)) {
                // if comment is not a direct property of comments
                continue;
            }
            targetNormalizedObj.users[comments[comment].commenter.id] = {
                'id': comments[comment].commenter.id,
                'name': comments[comment].commenter.name
            };
        }

        return targetNormalizedObj;
    }

    /**
     * Parses single article object
     *
     * @param obj
     * @param targetNormalizedObj
     * @returns object
     */
    parseObject = (obj, targetNormalizedObj) => {
        targetNormalizedObj = this.extractArticleData(obj, targetNormalizedObj);
        targetNormalizedObj = this.extractCommentsData(obj, targetNormalizedObj);
        targetNormalizedObj = this.extractUsersData(obj, targetNormalizedObj);

        return targetNormalizedObj;
    }

    /**
     * Parses array of articles
     *
     * @param arr
     * @param targetNormalizedObj
     * @returns object
     */
    parseArray = (arr, targetNormalizedObj) => {
        for(let obj in arr) {
            if (!arr.hasOwnProperty(obj)) {
                // if obj is not a direct property of arr
                continue;
            }
            this.parseObject(arr[obj], targetNormalizedObj);
        }
        return targetNormalizedObj;
    }

    /**
     * Normalizes data received from API
     *
     * @param data
     * @returns object
     */
    normalizeData = (data) => {
        let initialNormalizedObj = {
            articles: {},
            comments: {},
            users: {}
        };

        // Can process only objects
        if (!(data instanceof Object)) {
            console.error('Normalizer: not an object. data:', data);
            return initialNormalizedObj;
        }

        // If not an array, wrap it into array
        if (!(data instanceof Array)) {
            data = [data];
        }

        let r = this.parseArray(data, initialNormalizedObj);
        console.warn('Normalized data', r);
        return r;
    }
}