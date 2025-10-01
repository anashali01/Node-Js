const http = require('http');
const fs = require('fs');
const port = 8981;

const handleRequest = ((req, res) => {
    let filename = '';
    switch (req.url) {
        case '/':
            filename = './index.html';
            break;
        case '/about':
            filename = './about.html';
            break;
        case '/contact':
            filename = './contact.html';
            break;
        case '/blog': 
            filename = './blog.html';
            break;
        default:
            filename = './404.html';
            break;
    }
    fs.readFile(filename, (err, result) => {
        if (!err) {
            res.end(result);
        }else{
            res.end('<h1>Error Occurred</h1>');
        }
    })
})
const server = http.createServer(handleRequest);
server.listen(port, (err) => {
    if (!err) {
        console.log(`Server is Live`);
        console.log(`http://localhost:${port}`);
    } else {
        console.log(err);
    }
})