const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter message</title></head>');
        res.write('<body><form action="/message" method="POST"><input name= "test"><br><br><input type ="submit" value ="Submit"></form></body>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/message' && method == 'POST') {
        const body = [];

        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });

        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];

            //Should use writeFile instead of writeFileSync because in the case this file is too big so it will suspend the lines of code behind it until it done => not suggest

            fs.writeFile('message.txt', message, err => {
                res.statusCode = 302;
                res.setHeader('location', '/');
                return res.end();
            });

        });
    }

    res.setHeader('content-type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from my NodeJs server</h1></body>');
    res.write('</html>');
    res.end();
}



// module.exports = {
//     handler: requestHandler,
//     someText: 'Some hard code text...',
// };

//it's now stored in module exports.


//This is a shortcut for this syntax,
//it's just an explicit shortcut supported by nodejs where now we also have multiple exports being merged together into one export,
exports.handler = requestHandler;
exports.someText = 'Some hard code text...';
