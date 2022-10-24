const express = require("express");
const router = express.Router();

const usuarioHandler = require("./usuario.handler");
router.post("/usuario", (req, res)=>{
    usuarioHandler.cadastrar(req, res).then(dados => res.send(dados));
});

router.get("/usuario", (req, res)=>{
    usuarioHandler.pegar(req, res).then(dados => res.send(dados));
})

router.post("/usuario/login", (req, res)=>{
    usuarioHandler.login(req, res).then(dados => res.send(dados));
});

module.exports = router;