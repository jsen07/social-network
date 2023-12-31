const { Schema, Types, model } = require('mongoose');

//schema for reaction model
const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280,
        },
        username: {
            type: String,
            required: true, 
        },
        createdAt: {
            type: Date, 
            default: Date.now,
            get: function () {
                return this.createdAt.toLocaleDateString();
              },
            
        },
    },

);

module.exports = reactionSchema;