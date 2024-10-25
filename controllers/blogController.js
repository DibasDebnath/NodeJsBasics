
const Blog = require('../models/blog');
const fs = require("fs");
const path = require("path");
const multer = require("multer");
var bodyParser = require("body-parser");


const BlogIndex = (req,res) =>{

    //res.send('<p>This is From App Home<p>');
    //res.sendFile('./views/index.html', {root: __dirname });

        Blog.find().sort( {createdAt : -1 }).then((result)=> {


        let blogs = [];

        result.forEach(element =>{
            blogs.push(element);
        });

        res.render('blogs/index', { blogs:blogs});
        
        //res.send(result);
    }).catch((err) => {
        console.log(err);
    });

}

// function BlogIndex(req,res){

//     //res.send('<p>This is From App Home<p>');
//     //res.sendFile('./views/index.html', {root: __dirname });

//         Blog.find().sort( {createdAt : -1 }).then((result)=> {


//         let blogs = [];

//         result.forEach(element =>{
//             blogs.push(element);
//         });

//         res.render('blogs/index', { blogs:blogs});
        
//         //res.send(result);
//     }).catch((err) => {
//         console.log(err);
//     });

// }


const BlogCreateGet = (req,res) =>{

    //res.send('<p>This is About Page<p>');
    //res.sendFile('./views/about.html', {root: __dirname });

    res.render('blogs/create');

}



const BlogCreatePost = (req,res) => {
    //console.log(req.body);

    const blog = new Blog({
      title: req.body.title,
      snippet: req.body.snippet,
      body: req.body.body,
      img: {
        data: fs.readFileSync(
          path.join(
            path.join(__dirname, "../") + "/uploads/" + req.file.filename
          )
        ),
        contentType: "image/png",
      },
    });

    //const blog = new Blog(req.body);

    blog.save().then((result)=> {
        //res.send(result);
        res.redirect('/blogs');

    }).catch((err) => {
        console.log(err);
    });

    //res.redirect('/blogs');

}


const BlogDelete = (req,res) =>{

    const id = req.params.id;

    Blog.findByIdAndDelete(id).then((result) =>{

        res.json({ redirect: '/blogs'});
    }).catch((err) => {
        console.log(err);
    });

}

const BlogDetails = (req,res) => {
    const id = req.params.id;
    //console.log(id);

    Blog.findById(id).then((result) => {
        res.render('blogs/details', {blog: result , title: 'Blog Details'});
    }).catch((err) => {
        console.log(err);
        res.status(404).render('404');
    });
}


module.exports = {

    BlogIndex,
    BlogCreateGet,
    BlogCreatePost,
    BlogDelete,
    BlogDetails
}