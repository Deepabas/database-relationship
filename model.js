const mongoose = require('mongoose');
const {Schema} = require('mongoose');

const publisherSchema = new Schema({
   name:String,
   location:String,
   publishedBooks: [{
      type: Schema.Types.ObjectId,
      ref: 'Book'
   }]
},
{timestamps: true});


module.exports = mongoose.model('publishers', publisherSchema);

