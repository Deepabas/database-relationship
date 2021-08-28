const express = require("express");
const mongoose = require("mongoose")
const bodyParser = require('body-parser')
const publishers = require("./model")
const Books = require("./bookmodel")

const port = 3000
const app = express();
app.use(bodyParser.json());
//ADD A NEW PUBLISHER
app.post('/addPublisher', async (req, res) => {
   console.log(req.body)
  
     //validate req.body data before saving
     const Publisher = new publishers(req.body);
   try {
     await Publisher.save();
     console.log(Publisher)
     res.status(201).json({success:true, data: Publisher });

  } catch (err) {
     res.status(400).json({success: false, message:err.message});
  }
});

//ADD A NEW BOOK
app.post('/addBook', async (req, res)=>{

     //validate data as required

     const book = new Books(req.body);
     await book.save();

     const Publisher = await publishers.findById({_id: book.publisher})
     console.log(Publisher)
     try {
     Publisher.publishedBooks.push(book);
     await Publisher.save();

 //return new book object, after saving it to Publisher
     res.status(200).json({success:true, data: book })

  } catch (err) {
     res.status(400).json({success: false, message:err.message})
  }
})

//GET ALL PUBLISHERS
app.get('/publishers', async (req, res) => {
  try {
     const data = await Publisher.find().populate({
        path: 'booksPublished', select: 'name publishYear author'});
        console.log("data")
     res.status(200).json({success: true, data});
  } catch (err) {
     res.status(400).json({success: false, message:err.message});
  }
})



app.listen(port,() => {
  console.log("server listening in port",port)
})

mongoose.connect('mongodb+srv://user:MbvyVlIqk0xlPnZs@cluster0.uxdtw.mongodb.net/test', {
      useNewUrlParser: true , useFindAndModify: false, useUnifiedTopology: true, useCreateIndex: true, })
      .then(() => console.log("mongodb connected"))
      .catch(err => console.log(err));
