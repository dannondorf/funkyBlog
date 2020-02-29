/**
 * This file encapsulates the CRUD functionality for our app
 */
import {url} from './environment.js';
export let headers;
export var data;


/**
 * Create a new record on the server
 * @param {object} thing - the object to create on the server
 * @param {string} endpoint - the endpoint for the url (posts, comments, album, etc)
 */
export function create(thing, endpoint) {
    return action(url + endpoint, 'POST', thing);
}
/**
 * List the data
 * @param {string} endpoint 
 */
export async function read(endpoint) {
    const req = await action(url + endpoint);
    const json = await req.json();
    headers = Object.keys(json[0]);
    data = json;
}
/**
 * Update existing record on the server
 * @param {Object} thing - the object to update on the server
 * @param {string} endpoint - the endpoint for the url
 * @param {number} id - the current id of the record to update
 */
export function update(thing, endpoint, id) {
    return action(url + endpoint + '/' + id, 'PUT', thing)
    .then(read(endpoint));
}
/**
 * Delete a record from the server
 * @param {number} id - the current id of the record to delete
 * @param {string} endpoint - the enpoint for the url
 */
export function remove(id, endpoint) {
    return action(url + endpoint + '/' + id, 'DELETE');
}
/**
 * Do the work
 * @param {string} url 
 * @param {string} method 
 * @param {Object} thing 
 */
function action(url, method, thing) {
    return fetch(url, {
        method: method || 'GET',
        body: (thing) ? JSON.stringify(thing) : null,
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    });
}

