//Create web server
http.createServer(function (req, res) {
    //Set the response header
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    //Send the response body "Hello World"
    res.end('Hello World\n');
}).listen(8080); //Server object listens on port 8080
console.log('Server running on port 8080.'); //Output to console