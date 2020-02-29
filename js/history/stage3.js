const url = 'https://jsonplaceholder.typicode.com/';
const table = document.querySelector('main section table');
const tHead = document.querySelector('main section table thead tr');
const tBody = document.querySelector('main section table  tbody');
let headers;

getData(url + 'posts');

document.querySelector('main section nav').addEventListener('click', (e) => {
    const target = e.target.textContent;
    if (target == 'Posts') {
        getData(url + 'posts');
    } else if (target == 'Comments') {
        getData(url + 'comments');
    } else {
        console.log('clicked on NAV');
    }
});
tBody.addEventListener('click', e => {
    const target = e.target.textContent;
    if (target == 'Edit') {
        console.log(target, e.target.parentNode.parentNode);
    } else if (target == 'Delete') {
        console.log(target, e.target.parentNode.parentNode.children[headers.indexOf('id')].textContent);
        deleteData(e.target.parentNode.parentNode.children[headers.indexOf('id')].textContent);
    } else {
        console.log('clicked on NAV');
    }
});

function addData(post) {
    fetch(url + 'posts', {
            method: 'POST',
            body: JSON.stringify(post),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(getData(url + 'posts'));
}

function updateData(post) {
    fetch(url + 'posts/' + post.id, {
            method: 'PUT',
            body: JSON.stringify(post),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(getData(url + 'posts'));
}

function deleteData(id) {
    fetch(url + 'posts/' + id, {
            method: "DELETE"
        })
        .then(getData(url + 'posts'));
}

function getData(url) {
    fetch(url)
        .then(request => request.json())
        .then(processData);
}

function processData(data) {
    headers = Object.keys(data[0]);
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
        final += `<tr>${output}<td><button>Edit</button><button>Delete</button></td></tr>`;
    })
    tBody.innerHTML = final;
    table.style.visibility = "visible";
}
