const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

const mongoUri =
  "mongodb+srv://ponpon:ponpon2020@cluster0.hablj.mongodb.net/dataForBlogy?retryWrites=true&w=majority";
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//////////////////////////////
const articleSchema = mongoose.Schema({
  title: String,
  content: String,
});

const Article = mongoose.model("Article", articleSchema);

//////////////////POST DATA///////////////////////
app.post("/api/addarticle", (req, res) => {
  const addarticle = new Article({
    title: req.body.title,
    content: req.body.content,
  });

  addarticle.save((err, doc) => {
    if (err) return console.log(err);
    res.status(200).json(doc);
  });
});

///// GET POST /////   Article.findById('6034fde4296d022474cfb0c1',(err, doc)=>{}
app.get("/api/getarticle", (req, res) => {
  Article.find((err, doc) => {
    if (err) return console.log(err);
    res.json(doc);
  });
});

////////////// REMOVE /////////
app.post("/api/removeartile", (req, res) => {
  const title = req.body.title;
  Article.findOneAndRemove({ title: title }, (err, doc) => {
    if (err) return console.log(err);
    res.json(doc);
  });
});

//////////// UPDATE ///////////////
app.post("/api/updatearticle", (req, res) => {
  const id = req.body.id;
  const title = req.body.title;

  Article.update({ _id: id }, { $set: { title: title } }, (err, doc) => {
    if (err) return console.log(err);
    res.json(doc);
  });
});

const port = process.env.PORT || 3001;

app.listen(port);
