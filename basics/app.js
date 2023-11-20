const http = require('http');

// This one is not a global module so we want to add a local path to it with ./ and you can omit .js because nodejs will automatically attach this at the end.
//now node will go ahead and look for a routes.js file in the same folder as app.js which it will find and in that file, it will look for module exports and see what's registered in there

const routes = require('./routes');

const server = http.createServer(routes.handler);
console.log(routes.someText);

server.listen(3000);
