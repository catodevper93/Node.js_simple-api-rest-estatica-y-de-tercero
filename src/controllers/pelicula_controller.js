

const _ = require("underscore");


const peliculas = require("../datos_peliculas.json");



/* solo agregará estáticamente, en el archivo .json no modificará en nada, solo en el postman veremos
la inserción de registro, si se necesita modificar el archivo podemos valernos de los métodos
para manipular los ficheros "fs"*/
const crearPelicula = (req, res) => {

    const id = peliculas.length + 1;

    const { titulo, director, anio, reputacion } = req.body;


    const nueva_pelicula = { ...req.body, id };

    if (id && titulo && director && anio && reputacion) {

        peliculas.push(nueva_pelicula);

        res.json({
            mensaje: "Added with success, you view the insertion at the register",
            added: nueva_pelicula,
            
            peliculas: peliculas
        });

    } else {
        res.status(500).json({
            mensaje: "All fields are required"
        });
    }
}


const getPeliculas = (req, res) => {

    res.status(200).json({
        peliculas: peliculas
    });
}






const actualizarPelicula = (req, res) => {

    const { id } = req.params;

    const { titulo, director, anio, reputacion } = req.body;

    if (id && titulo && director && anio && reputacion) {

        _.each(peliculas, (pelicula, i) => {

            if (pelicula.id === id) {
                pelicula.titulo = titulo;
                pelicula.director = director;
                pelicula.anio = anio;
                pelicula.reputacion = reputacion;
            }
        });

        res.json({
            peliculas: peliculas
        });


    } else {
        res.status(500).json({
            mensaje: "There was an error"
        });
    }
}


const eliminarPelicula = (req, res) => {

    const { id } = req.params;

    if (id) {
        _.each(peliculas, (pelicula, i) => {

            if (pelicula.id == id) {
                peliculas.splice(i, 1);
            }
        });

        res.json(peliculas);
    }
}



module.exports = {
    crearPelicula,
    getPeliculas,
    actualizarPelicula,
    eliminarPelicula
}
