const mysql = require ("mysql2")

// creiamo la connessione a mysql 
const connection = mysql.createConnection({
    host: "localhost",
    user: "root", 
    password: "Tommi2004!", 
    database: "webapp-express" 
})

connection.connect((err) => {
    if (err) throw err;
    console.log('Sei connesso al database webapp-express');
});


module.exports = connection
