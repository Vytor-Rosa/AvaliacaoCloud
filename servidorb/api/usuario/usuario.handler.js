const crud = require("../../crud/index");

async function cadastrar(req, res){
    const usuario = req.body;
    return await crud.salvar("Usuarios", "", usuario);
}

async function pegar(req, res){
    return await crud.pegar("Usuarios");
}

async function login(req, res){
    const usuarios = await crud.pegar("Usuarios");
    const email = req.body.email;
    const senha = req.body.senha;
    const emailUsuario = usuarios.findIndex(u => u.email == email);
    if(emailUsuario != -1){
        if(usuarios[emailUsuario].senha == senha){
            return "Logado com sucesso!";
        }else{
            return "Erro no login";
        }
    }else{
        return "Email inválido";
    }
}

module.exports = {
    cadastrar,
    pegar,
    login
}