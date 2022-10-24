const express = require("express");
const router = express.Router();
const usuario = require("./api/usuario/usuario.controller");

router.use(express.json());
router.use('/', usuario);

module.exports = router;