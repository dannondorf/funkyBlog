import {tHead, tBody} from './environment.js';

export function populateTableHeaders(headers) {
    tHead.innerHTML = '';
    headers.forEach(header => {
        tHead.innerHTML += `<th>${header.toUpperCase()}</th>`;
    })
    tHead.innerHTML += `<th>ACTIONS</th>`;
}

export function populateTableRows(data, headers) {
    let final = '';
    data.forEach(row => {
        let output = '';
        headers.forEach(header => {
            output += `<td>${row[header]}</td>`;
        })
        final += `<tr>${output}<td><button>Edit</button><button>Delete</button></td></tr>`;
    })
    tBody.innerHTML = final;
}
