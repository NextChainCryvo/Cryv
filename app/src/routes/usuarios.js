var express = require("express");
var router = express.Router();

const { regrasCadastro } = require('../middlewares/usuarioValidator');
var usuarioController = require("../controllers/usuarioController");


router.post("/cadastrar", regrasCadastro, function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});




module.exports = router;