const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const PORT = process.env.PORT || 3030


require('dotenv').config()
require('./db/db');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.json());
app.use(session({
  secret: 'foodsafety',
  resave: false,
  saveUninitialized: false
}));

const corsOptions = {
  origin: ['http://localhost:3000'],
  credentials: true,
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.send("welcome")
})




app.listen(PORT, (err) => {
  console.log(err || `server listening on port ${PORT}`)
});