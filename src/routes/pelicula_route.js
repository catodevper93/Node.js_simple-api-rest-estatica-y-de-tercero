




const {Router} = require("express");


const {crearPelicula,  getPeliculas, actualizarPelicula, eliminarPelicula} = require("../controllers/pelicula_controller");



const router = new Router();




router.post("/new-movie", crearPelicula);
router.get("/movies", getPeliculas);

router.put("/edit/movie/:id", actualizarPelicula);
router.delete("/delete/movie/:id", eliminarPelicula);




module.exports = router;










