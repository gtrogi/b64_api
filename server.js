const http = require('http');
const { getEmails, getEmail, addEmail } = require('./controllers/emailController');

const server = http.createServer(async (req, res) => {
    //default if no route is chosen
    let message = JSON.stringify({ message: 'Route Not Found'});
    let code = 404;

    //choose and execute the correct route
    if(req.url === '/api/emails' && req.method === 'GET') {
        message = await getEmails(req, res);
        code = 200;
    } else if(req.url.match(/\/api\/emails\/[0-9]+$/) && req.method === 'GET') {
        const id = req.url.split('/')[3];
        message = await getEmail(req, res, id);
        code = 200;
    } else if(req.url === '/api/emails' && req.method === 'POST') {
        message = await addEmail(req, res);
        code = 200;
    }

    //end the response with the correct return message (always of type json)
    res.writeHead(code, { 'Content-Type': 'application/json' });
    res.end(message);
});

//note: process.env.PORT picks up the environment variable so if you
//      install on a different server and they set the PORT it will
//      listen to that port instead
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));