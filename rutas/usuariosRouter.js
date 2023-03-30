import express from 'express';
import { DataTypes } from "sequelize";

import sequelize from "../loadSequelize.js";

//DEFINICION DEL MODELO
const Usuarios = sequelize.define('Usuarios', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    
}, { tableName: 'usuarios', timestamps: false });


const router = express.Router();

router.get('/', function (req, res, next) {
    sequelize.sync().then(() => {
        Usuarios.findAll()
            .then(usuarios => res.json({
                ok: true,
                data: usuarios
            }))
            .catch(error => res.json({
                ok: false,
                error: error
            }))

    }).catch((error) => {
        res.json({
            ok: false,
            error: error
        })
    });

});




router.get('/:id', function (req, res, next) {

    const idBuscado = req.params.id;

    sequelize.sync().then(() => {

        Usuarios.findOne({ where: { id:idBuscado } })
            .then(usuarios => res.json({
                ok: true,
                data: usuarios
            }))
            .catch(error => res.json({
                ok: false,
                error: error
            }))

    }).catch((error) => {
        res.json({
            ok: false,
            error: error
        })
    });

});




// POST, creació d'un nou Usuarios
router.post('/', function (req, res, next) {
    sequelize.sync().then(() => {
        console.log(req.body)
        Usuarios.create(req.body)
            .then((item) => res.json({ ok: true, data: item }))
            .catch((error) => res.json({ ok: false, error }))


    }).catch((error) => {
        res.json({
            ok: false,
            error: error
        })
    });
});


// put modificació d'un Usuarios
router.put('/:id', function (req, res, next) {
    sequelize.sync().then(() => {
        Usuarios.findOne({ where: { id: req.params.id } })
            .then((al) =>
                al.update(req.body)
            )
            .then((ret) => res.json({
                ok: true,
                data: ret
            }))
            .catch(error => res.json({
                ok: false,
                error: error
            }));

    }).catch((error) => {
        res.json({
            ok: false,
            error: error
        })
    });
});



// DELETE elimina l'Usuarios id
router.delete('/:id', function (req, res, next) {

    sequelize.sync().then(() => {
        
        Usuarios.destroy({ where: { id: req.params.id } })
            .then((data) => res.json({ ok: true, data }))
            .catch((error) => res.json({ ok: false, error }))

    }).catch((error) => {
        res.json({
            ok: false,
            error: error
        })
    });

});






export default router;
