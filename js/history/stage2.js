const url = 'https://jsonplaceholder.typicode.com/posts';
const tHead = document.querySelector('.cinereousTable thead tr');
const tBody = document.querySelector('.cinereousTable tbody');


fetch(url)
    .then(request => request.json())
    .then(processData);


function processData(data) {
    const headers = Object.keys(data[0]);
    populateHeaders(headers);
    populateTableRows(data, headers);
}

function populateHeaders(headers) {
    tHead.innerHTML = '';
    headers.forEach(header => {
        tHead.innerHTML += `<th>${header.toUpperCase()}</th>`;
    })
}

function populateTableRows(data, headers) {
    let final = '';
    data.forEach(row => {
        let output = '';
        headers.forEach(header => {
            output += `<td>${row[header]}</td>`;
        })
        final += `<tr>${output}</tr>`;
    })
    tBody.innerHTML = final;

}
