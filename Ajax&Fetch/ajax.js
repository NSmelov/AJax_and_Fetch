const requestURL = 'https://jsonplaceholder.typicode.com/posts'

function sendRequest(method, url, body = null) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()

        xhr.open(method, url)

        xhr.responseType = 'json' // по-умолчанию text/plain (string)
        xhr.setRequestHeader('Content-Type', 'application/json')

        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response)
            } else {
                resolve(xhr.response)
            }
        }

        xhr.onerror = () => {
            reject(xhr.response)
        }

        xhr.send(JSON.stringify(body))
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
