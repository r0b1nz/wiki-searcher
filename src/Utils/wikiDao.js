/**
 * A data access utility for Wikipedia
 */

 // Forming Wikipedia's REST Enpoint
const baseUrl = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=';
const parameters = '&format=json&origin=*';

/**
 * Converting spaces to '+'
 * eg: "Indian Currency" -> "Indian+Currency"
 * @param {string} word 
 */
const convertSpaces = word => {
    return word.split(' ').join('+');
}

const constructUrl = searchKeyword => {
    const keyword = convertSpaces(searchKeyword);
    return baseUrl + keyword + parameters;
}

/**
 * Call's the endpoint and sets the result in the state using the callbackFunction
 * @param {string} word 
 * @param {Function} callbackFn 
 */
export function setResult(word, callbackFn){
    const url = constructUrl(word);
    fetch(url)
        .then(result => result.json())
        .then(result => callbackFn(result));
}

export default setResult