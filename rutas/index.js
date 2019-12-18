const router = require("express").Router({mergeParams: true});
const autos = require("./autos");
const clientes = require("./clientes");
//Importaracion de librerias

const concesionaria = require("./concesionaria");
const turnos = require("./turnos");
const login = require("./login");
const auth = require("../modulos/auth");
var path = require("path");

//Rutas que no requieren autenticacion
router.use("/login", login);
router.use("/clientes", clientes);
router.use("/concesionaria", concesionaria);

// Rutas autenticadas, auth es el guard de Angular
//va acceder atraves de un token
router.use("/auto", [auth, autos]);
router.use("/turnos", [auth, turnos]);
/* router.get('/*', function(req, res) {
    //res.send("Que haces aca? Estas perdido!");
    console.log(path.join(__dirname + '/dist/index.html'));
    res.sendFile(path.join(__dirname + '/dist/index.html'));  
}); */

module.exports = router;
