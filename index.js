var express = require('express')
var cors = require('cors')
var app = express()
const mysql = require('mysql2');
require('dotenv').config()

// create the connection to database
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE
  });

app.use(cors())

app.get('/users', function (req, res, next) {
    connection.query(
        'SELECT * FROM `users` ',
        function(err, results, fields) {
          res.json(results)
        }
      );
})

app.listen(5000, function () {
  console.log('CORS-enabled web server listening on port 5000')
})