const mysql = require ("mysql2")

// creiamo la connessione a mysql 
const connection = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
     user: process.env.DB_USER,
     password: process.env.DB_PASSWORD,
     database: process.env.DB_NAME
})

connection.connect((err) => {
    if (err) throw err;
    console.log('Sei connesso al database webapp-express');
});


module.exports = connection
