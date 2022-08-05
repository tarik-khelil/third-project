const fs = require('fs');


const requestHandler = (req, res) => {
    console.log(req)
    if (req.url === '/') {
        res.write('<html>');
        res.write('<head><title>My message page </title></head>');
        res.write('<body><form action="/message" method="POST"> <input type="text" name="message"  /> <button type="submit">Ajouter</button></form></body>');
        res.write('</html>');
        return res.end();

    }

    if (req.url === "/message" && req.method === "POST") {
        const body = [];
        req.on('data', (chunck) => {
            body.push(chunck)
        })
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.text', message, (err => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            }));
        })


    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from my Node.js server</h1></body>');
    res.write('</html>');
    res.end();

}

module.exports = requestHandler

//or  if we want export many things
// module.exports={
//     handler:requestHandler
//     somText:mmm
// }
//or 
// module.exports.handler=requestHandler
// module.exports.someText=mmm;
//** auther syntaxt */
//exports.handler=requestHandler
// exports.someText=mmm;
//** auther syntaxt */
