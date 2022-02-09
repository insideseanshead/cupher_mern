const mongoose = require("mongoose")

const characterSchema = mongoose.Schema(
    {
        characterName: {
            type: String,
            required: [true, "please enter a name"]
        }
    },
    {
        timestamps:true
    }
)

module.exports = mongoose.model('Character', characterSchema)