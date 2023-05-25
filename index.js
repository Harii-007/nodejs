const http = require("http");
const fs= require('fs');

const hostname ="127.0.0.1";
const port = 3000;

const home = fs.readFileSync('./Home.html');
const about = fs.readFileSync('./About.html');
const contact = fs.readFileSync('./Contact.html');

const server =http.createServer((req,res)=>{
    url = req.url;

    res.statuscode =200;
    res.setHeader('content-type','text/html');
    if(url=='/'){
        res.end(home);
    }
    else if(url=='/about'){
        res.end(about);
    }
    else if(url=='/contact'){
        res.end(contact);
    }
    else{
        res.end("<h1>404 Sever is not found </h1>")
    }
});

server.listen(port ,hostname,()=>{
    console.log(`Server is running at http://${hostname}:${port}`)
});