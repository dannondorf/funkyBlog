fetch(url)
    .then(request => request.json())
    .then(data => {
        const headers = Object.keys(data[0]);
        let final = '';
        headers.forEach(header => {
            document.querySelector('.cinereousTable thead tr').innerHTML += `<th>${header}</th>`;
        })
        data.forEach(row => {
            let output = '';
            headers.forEach(header => {
                output += `<td>${row[header]}</td>`;
            })
            final += `<tr>${output}</tr>`;
        })
        document.querySelector('.cinereousTable tbody').innerHTML = final;
    });
