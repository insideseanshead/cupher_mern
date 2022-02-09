const asyncHandler = require('express-async-handler')

// @desc Get Characters
// @route Get /api/characters
// @acess Public
const getCharacters = asyncHandler(async(req,res) => {
    res.status(200).json({message: 'Get characters'})
})

// @desc Post Character
// @route POST /api/characters
// @acess Public
const postCharacter = asyncHandler(async(req,res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.status(200).json({message: 'Set character'})
})

// @desc PUT Characters
// @route PUT /api/characters/
// @acess Public
const putCharacter = asyncHandler(async(req,res) => {
    res.status(200).json({message: `Update character ${req.params.id}`})
})

// @desc DELETE Characters
// @route DELETE /api/characters
// @acess Public
const deleteCharacter = asyncHandler(async(req,res) => {
    res.status(200).json({message: `Delete characters ${req.params.id}`})
})

module.exports = {
    getCharacters, postCharacter, putCharacter, deleteCharacter,
}