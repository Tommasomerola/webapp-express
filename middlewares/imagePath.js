function setImagePath(req, res, next) {
    // creaimo il path assoluto della img
    req.imagePath = `${req.protocol}://${req.get('host')}/img/films/`;
    next()
}

module.exports = setImagePath;