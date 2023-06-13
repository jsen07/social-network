const { Schema, model } = require("mongoose");
const reactionSchema = require("./reaction");


//schema for thought model
const thoughtSchema = new Schema(
    {
        thoughtText:{
            type: String,
            required: true,
            minlength: 1,
            maxlength: 200
        },
        createdAt:{
            type: Date,
            default: Date.now,
            get: function () {
                return this.createdAt.toLocaleDateString();
              }
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema]
    },
    {
        toJSON: {
            virtuals: true
        },
        id: false
    }
);
//create a virtual property that gets the amount reactions associated with a thought
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
})

const Thought = model('thought', thoughtSchema);



module.exports = Thought;