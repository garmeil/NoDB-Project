const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const {
  getBibles,
  getBooks,
  getChapters,
  getVerses
} = require(`${__dirname}/controllers/mainCtrl`);

const port = 3001;
const app = express();

app.use(bodyParser.json());
//cors is cross origin resource sharing, for sending & receiving
app.use(cors());

//__dirname is the file path
console.log(__dirname);
//setup proxy in package.json so all my app's requests will hit this path
//server or proxy determine where we are making our requests
app.get("/api/test", getVerses);

app.listen(port, () => {
  console.log(`Litening on Port: ${port}`);
});
