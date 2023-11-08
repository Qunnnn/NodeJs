const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;

    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter message</title></head>');
        res.write('<body><form action="/mess" method="POST"><input name="test"><br><br><input type ="submit" value ="Submit"></form></body>');
        return res.write('</html>');
    }

    res.setHeader('content-type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from my NodeJs server</h1></body>');
    res.write('</html>');
    res.end();
})

server.listen(3000);
