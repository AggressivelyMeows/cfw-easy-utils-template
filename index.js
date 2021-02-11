import { response } from 'cfw-easy-utils'

addEventListener("fetch", event => {
    if (event.request.method == 'OPTIONS') {
        // Handle CORS requests without breaking a sweat.
        return event.respondWith(response.cors(event.request))
    }
    event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
    return response.json({ hello: 'world', url: request.url })
}