const http = require('http');
const routes = require('./routes');



//create serveur(createServer return a server)
const server = http.createServer(routes);
//  console.log(req.url + '\n' + req.method + '\n', req.headers);
//process.exit()//quite the server  (event loop )

//send response





server.listen(3000);