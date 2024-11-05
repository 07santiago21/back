import express from 'express';
import { error, success } from '../../red/response.js';
import todos, {agregarUsuario } from './controlador.js';

const router = express.Router();

router.get('/', (req, res) => {
    todos().then((items) => {
        success(req, res, items, 200);
    }).catch((err) => {
        error(req, res, 'Error al obtener usuarios', 500, err);
    });
});

router.post('/add', (req, res) => {
    console.log(req.body);
    const { id_users, name, last_name, cellphone_number, email, fecha_nacimiento, password } = req.body;
    const newUser = { id_users, name, last_name, cellphone_number, email, fecha_nacimiento, password };

    agregarUsuario(newUser).then((result) => {
        success(req, res, { message: 'Usuario y autenticación creados exitosamente', id: result.insertId }, 201);
    }).catch((err) => {
        error(req, res, 'Error al agregar usuario', 500, err);
    });
});

export default router;
