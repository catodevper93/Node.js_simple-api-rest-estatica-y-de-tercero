

const node_fetch = require("node-fetch");



const getUsuarios = async(req, res)=>{

    const respuesta = await node_fetch("https://jsonplaceholder.typicode.com/users");

    const resultado = await respuesta.json();


    res.json({
        resultado: resultado 
    });

}


module.exports = {
    getUsuarios
}

