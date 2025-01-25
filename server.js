const http = require('http')
const server = http.createServer((request, response) => {
    if(request.url == '/') {
        response.end('Welcome to the website')
    } else {
        response.end('page not found')
    }
})

server.listen(3000,  '0.0.0.0', () => {
    console.log('Server running on port 3000')
})
