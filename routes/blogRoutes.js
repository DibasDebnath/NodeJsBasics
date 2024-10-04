const express = require('express');

const blogController = require('../controllers/blogController');




const router = express.Router();



router.get('/', blogController.BlogIndex);
router.get('/create', blogController.BlogCreateGet);
router.post('/', blogController.BlogCreatePost);
router.delete('/:id', blogController.BlogDelete);
router.get('/:id',blogController.BlogDetails);





module.exports = router;