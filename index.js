const express = require('express');
const app = express(); // single express app

app.get('/greeting',(req,res) => {
  res.send({hi:'there'});
});

const PORT = process.env.PORT || 5000;

app.listen(PORT);


//localhost:5000/greeting
