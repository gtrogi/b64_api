const http = require('http');
const { addEmail } = require('./controllers/emailController');

const server = http.createServer(async (req, res) => {
    //default if no route is chosen
    console.log("Hello World");
    console.log(req.url);
    console.log(req.method);

    let returnMessage = 0;
    let message = JSON.stringify({ message: 'Route Not Found'});
    let code = 404;

    if(req.url === '/api/emails' && req.method === 'OPTIONS') {
        message = JSON.stringify({ message: 'CORS Approved'});
        code = 200;
    } else if(req.url === '/api/emails' && req.method === 'POST') {
        returnMessage = await addEmail(req, res);
        if(returnMessage) {
            message = returnMessage;
            code = 200;
        }
    }

    //end the response with the correct return message (always of type json)
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');
    res.writeHead(code);
    res.end(message);
});

//note: process.env.PORT picks up the environment variable so if you
//      install on a different server and they set the PORT it will
//      listen to that port instead
const PORT = process.env.PORT || 3003;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));