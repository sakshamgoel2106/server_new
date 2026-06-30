const express = require('express');
const router = express.Router();
const bookController = require('./bookController');

router.get('/',bookController.getAllBooks);
router.get('/:id',bookController.getBookById);
router.post('/',bookController.createBook);
router.put('/:id',bookController.updateBook);
router.delete('/:id',bookController.delete);

module.exports = router;