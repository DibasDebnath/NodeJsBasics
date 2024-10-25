const express = require('express');

const blogController = require('../controllers/blogController');
const multer = require("multer");
const upload = multer({ dest: "uploads/" });




const router = express.Router();




router.get('/', blogController.BlogIndex);
router.get("/create", blogController.BlogCreateGet);
router.post('/', upload.single("img"), blogController.BlogCreatePost);
router.delete('/:id', blogController.BlogDelete);
router.get('/:id',blogController.BlogDetails);





module.exports = router;