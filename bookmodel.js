const mongoose = require('mongoose');
const {Schema} = require('mongoose');
//book
const bookSchema = new Schema({
    name: String,
    publishYear: Number,
    author: String,
    publisher: {
       type: Schema.Types.ObjectId,
       ref: 'publishers',
       required: true
    }
  },
  {timestamps: true});
  module.exports = mongoose.model('Books', bookSchema);