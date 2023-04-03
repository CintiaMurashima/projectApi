//importamos express y controladores
import express from "express";

import cors from "cors";

const app = express();

//necesario para poder recibir datos en json
app.use(express.json());
app.use(cors());

// app.use(cors({
//     origin: 'http://localhost:5173'
// }));

import usuariosRouter from './rutas/usuariosRouter.js';

//las rutas que empiecen por /api/alumnes se dirigirán a alumnesRouter
app.use('/api/usuarios', usuariosRouter);

//arranque del servidor
const port = 3000
app.listen(port, () => console.log(`App listening on port ${port}!`))

