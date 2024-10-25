const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema(
  {
    title: { type: String, require: true },
    snippet: { type: String, require: true },
    body: { type: String, require: true },
    img: {
        data: Buffer,
        contentType: String  
    },
  },
  {
    timestamps: true,
  }
);

const Blog = mongoose.model('Blog', blogSchema);

module.exports =Blog;