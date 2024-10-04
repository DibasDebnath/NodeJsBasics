const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mongoose = require('mongoose');
const render = require('ejs');

const blogRoutes = require('./routes/blogRoutes');

//Express App
const app = express();
const rootPath =  path.join(__dirname, '../');
const dbURL = 'mongodb+srv://Tester:Testing@nodetuts.60isp.mongodb.net/blog-db?retryWrites=true&w=majority&appName=nodetuts';

//db Connect
mongoose.connect(dbURL).then((result) => {
    console.log("Connected to DB");
    app.listen(3000);

}).catch((err) => {
    console.log(err);
});


//Register View Engine
app.set('view engine', 'ejs');



//Middleware


// app.use((req,res,next) => {
//     console.log('New Request Recieved');
//     console.log('Host Name:'+req.hostname);
//     console.log('Path:'+req.path);
//     console.log('Methode:'+req.method);
//     next();

// });

// app.use((req,res,next) => {
//     console.log('In the Next Middleware');
//     next();

// });

//Setting up the public folder for all access
app.use(express.static('public'));

//logging type

app.use(morgan('tiny'));

//To Post data from form url
app.use(express.urlencoded( {extended: true}));


//mongoose sandbox
//Create a doc in the db
// app.get('/add-blog', (req,res) => {
//     const blog = new Blog({
//         title: "New Blog 2",
//         snippet: "About blog 2",
//         body: "MOre about the blog 2"
//     });

//     blog.save().then((result)=> {
//         res.send(result);
//     }).catch((err) => {
//         console.log(err);
//     });
// });

// //get all docs in an array
// app.get('/all-blogs', (req,res) => {
    

//     Blog.find().then((result)=> {
//         res.send(result);
//     }).catch((err) => {
//         console.log(err);
//     });
// });

// //get a single doc
// app.get('/single-blog', (req,res) => {
    

//     Blog.findById('66fd7b19dbaf751dab32a53b').then((result)=> {
//         res.send(result);
//     }).catch((err) => {
//         console.log(err);
//     });
// });




app.get('/', (req,res) =>{

    //res.send('<p>This is From App Home<p>');
    //res.sendFile('./views/index.html', {root: __dirname });

    // const blogs = [
    //     {title: 'Alpha 1', content: 'This is Blog 1'},
    //     {title: 'Alpha 2', content: 'This is Blog 2'},
    //     {title: 'Alpha 3', content: 'This is Blog 3'}
    // ];

    // res.render('index', { name: 'Dibas' , blogs:blogs});

    res.redirect('/blogs');

});

app.use('/blogs', blogRoutes);




app.get('/about', (req,res) =>{

    //res.send('<p>This is About Page<p>');
    //res.sendFile('./views/about.html', {root: __dirname });

    res.render('about');


});





//redirect

app.get('/about-us', (req,res) =>{

    //res.send('<p>This is About Page<p>');
    res.redirect('./about');

});

//404

app.use((req,res) => {
    res.status(404).render('404');
});