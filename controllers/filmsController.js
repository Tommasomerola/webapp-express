// importiamo i file di connesione dal database 
const connection = require("../src/db")

function index(req, res) {
    // query di richiesta film 
    const filmsSql = "SELECT * FROM movies;"

    connection.query(filmsSql, (err, result) => {
        // se la query non va a buon fine
        if (err) return res.status(500).json({ error: 'Database query failed' });
        
        
        // versione mappata del risultato
        const films = result.map(film => {
            return {
                ...film,
                image: req.imagePath + film.image
            }
        })


        // se tutto funziona
        res.json(films);
    });
}

function show(req, res) {

// recuperiamo l'id dai params
const { id } = req.params;

// prepariamo la query di richiesta
const detailFilm = "SELECT * FROM movies WHERE movies.id = ?";


// prepariamo la query di richiesta
const reviewSql = "SELECT * FROM reviews WHERE movie_id = ?";

// richiediamo i dati del singolo libro
connection.query(detailFilm, [id], (err, filmResult) => {
    // se la query non va a buon fine
    if (err) return res.status(500).json({ error: 'Database query failed' });
    if (filmResult.length === 0) return res.status(404).json({ error: 'Book not found' });

    // se tutto funziona
    // res.json(bookResult[0]);
    const film = filmResult[0];

    connection.query(reviewSql, [id], (err, reviewResult) => {
        // se la query non va a buon fine
        if (err) return res.status(500).json({ error: 'Database query failed' });

        // aggiorniamo l'oggetto book con le review ritornate
        film.reviews = reviewResult;

        // aggiungiamo il valore path img da middleware
        film.image = req.imagePath + film.image;

        // ritorniamo l'oggetto completo
        res.json(film);
    });



});


}

function store(req, res) {

}



// esportiamo tutto
module.exports = { index, show, store,}