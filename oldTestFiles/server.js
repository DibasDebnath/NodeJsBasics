const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((req, res) => {
    console.log("Request recieved");
    //console.log(req.url , req.method);

    //Lodash

    let rnd = _.random(0,20);
    //console.log(rnd);


    const Greet = _.once(() => {

        console.log("Welcome");
    });

    Greet();
    


    //Set Header content type

    res.setHeader('content-type','text/html');

    let path = './views/';

    switch(req.url){
        case '/':
            path += 'index.html';
            res.statusCode = 200;

            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;

            break;
        case '/aboutmeout':
            res.statusCode = 301;
            res.setHeader('Location' , '/');
            res.end();
        default:
            res.statusCode = 404;
            path += '404.html';
            break;
        
    }


    // res.write('<p>Hello From Server<p>');
    // res.write('<p>Hello From Server again<p>');


    // Send HTML file

    fs.readFile(path , (err,data) => {
        if(err){
            console.log(err);
            res.end();
        }
        else{
            //res.write(data);
            res.end(data);
        }
    });


    //res.end();
});


server.listen(3000, 'localhost', () => {
    console.log("Listening For Request on port 3000");
});