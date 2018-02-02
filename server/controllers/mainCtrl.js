const axios = require("axios");

let bibles = [];
let books = [];
let chapters = [];
let verses = [];

const getBibles = (req, res, next) => {
  axios
    .get("https://bibler-server.prestonlee.com/bibles.json")
    .then(response => {
      console.log(response.data[0][0]);
      bibles.push(response.data);
      res.json(bibles);
    })
    .catch(console.log);
};

const getBooks = (req, res, next) => {
  axios
    .get("https://bibler-server.prestonlee.com/books.json")
    .then(response => {
      console.log(response.data);
      books.push(response.data);
      res.json(books);
    })
    .catch(console.log);
};

const getChapters = (req, res, next) => {
  axios
    .get(
      `https://bibler-server.prestonlee.com/american-standard-asv1901/genesis.json`
    )
    .then(response => {
      console.log(response.data);
      chapters.push(response.data);
      res.json(chapters);
    })
    .catch(console.log);
};

const getVerses = (req, res, next) => {
  axios
    .get(
      `https://bibler-server.prestonlee.com/american-standard-asv1901/genesis/1.json`
    )
    .then(response => {
      console.log(response.data);
      verses.push(response.data);
      res.json(verses);
    })
    .catch(console.log);
};
module.exports = {
  getBibles,
  getBooks,
  getChapters,
  getVerses
};
