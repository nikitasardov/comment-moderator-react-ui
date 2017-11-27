export function mapObject(obj, callback) {
    return Object.keys(obj).map(objKey => callback(objKey));
}