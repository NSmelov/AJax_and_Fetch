const requestURL = 'https://jsonplaceholder.typicode.com/posts'

function sendRequest(method, url, body = null) {
    const headers = {
        'Content-Type': 'application/json',
    }

    return fetch(url, {
        method: method,
        body: JSON.stringify(body),
        headers: headers,
    }).then((response) => {
        if (response.ok) {
            return response.text() // .json()
        }
        return response.json().then((error) => {
            const e = new Error('Что-то пошло не так...')
            e.data = console.error()
            throw e
        })
    })
}

// sendRequest('GET', requestURL)
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err))

const body = {
    name: 'Nikolay',
    age: 29,
}

sendRequest('POST', requestURL, {})
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
