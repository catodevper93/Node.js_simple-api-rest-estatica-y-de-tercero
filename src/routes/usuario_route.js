

const {Router} = require("express");


const {getUsuarios} = require("../controllers/usuario_controller");



const router = new Router();




router.get("/users", getUsuarios);




module.exports = router;


