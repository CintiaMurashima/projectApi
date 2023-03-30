//importamos express y controladores
import express from "express";

const app = express();

//necesario para poder recibir datos en json
app.use(express.json());

import usuariosRouter from './rutas/usuariosRouter.js';

//las rutas que empiecen por /api/alumnes se dirigirán a alumnesRouter
app.use('/api/usuarios', usuariosRouter);

//arranque del servidor
const port = 3000
app.listen(port, () => console.log(`App listening on port ${port}!`))

