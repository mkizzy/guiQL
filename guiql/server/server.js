require('dotenv').config()
const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
const mongoose = require('mongoose');
const cors = require('cors');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const URI = process.env.MONGO_URI;
mongoose.set("strictQuery", false);
mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'guiQL'
})
.then(()=>{
  app.listen(PORT, ()=>{
      console.log(`Server is on ${PORT}`)
  });
})
.catch(err=>{
  console.log('db connection failed. Server not start.');
  console.error(err);
})

// Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

// Unknown route handler
app.use((req, res) => res.sendStatus(404));
module.exports = app