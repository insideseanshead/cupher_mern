const express = require('express')
const router = express.Router()
const {
    getCharacters,
    postCharacter,
    putCharacter,
    deleteCharacter
} = require('../controllers/characterController');

router.route('/').get(getCharacters).post(postCharacter);
router.route('/:id').delete(deleteCharacter).put(putCharacter)

module.exports = router