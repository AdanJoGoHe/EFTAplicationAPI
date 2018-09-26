'use strict'
var express = require('express');
var app = express();
var api = express.Router();
//models
var armas = 
[
    {
        Nombre:  "M4A1",        
        Distribuidor: "Colt",
        Calibre: "5,56x45mm nato",
        Rol: "Rifle de asalto",
        Descripcion: 'Colt M4A1 es un rifle de asalto(carabina) diseñada en los estados unidos bajo la plataforma AR-15.',
        Imagen: "https://i.imgur.com/BBJsyLa.png"
    },
    {
        Nombre:  "AK74M",
        Distribuidor: "Kalashnikov",
        Calibre: "5.45x39mm",
        Rol: "Rifle de asalto",
        Descripcion: 'Kalashnikov 5.45x39mm rifle de asalto modernizado equipado con culata abatible y montura para miras nocturnas.',
        Imagen: "https://i.imgur.com/J2Ba4pt.png"
    },
    {
        Nombre:  "R11 RSASS",
        Distribuidor: "Remington",
        Calibre: "7.62x51mm",
        Rol: "Rifle Tirador designado",
        Descripcion: 'El francotirador semi automatico de remington es el culmen de los esfuerzos entre "Remington arms" y "JP Enterprises" para desarrollar un rifle de gran precisión y fuego rapido.',
        Imagen: "https://i.imgur.com/GwpmdxA.png"
    }
]
const showHelloWorld = (req,res) => 
{
    res.status(200).send
    ({
        message: 'Hello World'
    });
}

const getArma = (req, res) => 
{
    console.log("Entrando en getArma");
    const position = req.params.position
    res.status(200).send(armas[position]);
}
//routes

api.get('/Hello-world', showHelloWorld);
api.get('/armas/:position', getArma)

app.use('/api', api);

const escuchar = () => 
{

}
const port = 40000;

app.listen(port, () => 
{
    console.log ('listening on http://localhost' + port)
});