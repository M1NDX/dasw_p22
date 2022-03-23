function auth(req,res,next){
    let authHeader = req.get('x-auth');
    if(authHeader){
        console.log(authHeader);
        req.userId = authHeader;
        next();
    }else{
        res.status(401).send({error: "no autenticado"})
        return;
    }
}

function validarUsuario(req,res,next){
    let authHeader = req.get('x-user')
    if(authHeader && authHeader=="myAdminToken"){
        req.esAdministrador = true;
    }else{
        req.esAdministrador= false;
    }
    next();
}

function requireAdmin(req,res,next){
    if(req.esAdministrador){
        next()
    }else{
        res.status(401).send({error: "requiere permiso de administrador"})
        return;
    }

}

module.exports = {auth, validarUsuario, requireAdmin}