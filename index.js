
const express = require("express");

const morgan = require("morgan");

const usuario = require("./src/routes/usuario_route");
const pelicula = require("./src/routes/pelicula_route");

const app = express();


const PUERTO = process.env.PORT || 4000;


app.set('puerto', PUERTO);


// MIDDLEWARES
app.use(morgan("dev"));
app.use(express.urlencoded({extended: false}));
app.use(express.json());


// rutas
app.use(usuario);
app.use(pelicula);



// iniciamos y escuchamos servidor
app.listen(app.get("puerto"), ()=>{
    console.log(`Server on port ${app.get("puerto")}`);
});
