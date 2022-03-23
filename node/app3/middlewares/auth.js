function auth(req,res,next){
    let authHeader = req.get('x-auth');
    if(authHeader){
        console.log(authHeader);
        req.userId = authHeader;
        next();
    }else{
        res.status(401).send({error: "no autenticado"})
    }
}

module.exports = {auth}