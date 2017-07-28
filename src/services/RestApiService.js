function handleResponse(response) {
    window.scroll(0, 0)
    if (response.status === 400) {
        return response.json().then(errors => {
            const messages = errors.map(text => ({ type: 'error', text }))
            throw messages
        })
    } else if (response.status === 500) {
        const messages = { type: 'error', text: 'Server error.' }
        throw messages
    } else {
        return response.json()
    }
}

function get(url) {
    return fetch(url, { credentials: 'same-origin', headers: { 'Accept': 'application/json' } })
        .then(handleResponse)
}

function put(url, data) {
    return fetch(url, {
        method: 'PUT',
        credentials: 'same-origin',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(handleResponse)
}

export default { put, get }