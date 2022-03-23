function log (req, res, next){
    console.log(req.method);
    console.log(req.originalUrl);
    next();
}

module.exports = {log}