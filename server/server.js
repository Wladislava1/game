const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {

  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  if (path === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Home Page\n');
  } else if (path === '/login') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Login Page');
  } else if (path === '/signup') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Signup Page');
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not Found Page');
  }
  /*} else if (path === '/womens') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Signup Page\n');
  } else if (path === '/money') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Signup Page\n');
  } else if (path === '/cloth') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Signup Page\n');
  }*/
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});