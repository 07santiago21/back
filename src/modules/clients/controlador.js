import db from '../../DB/mysql.js';
import bcrypt from 'bcrypt';

const tablaUsuarios = "users";
const tablaAuth = "auth";

const todos = () => {
    return db.todos(tablaUsuarios);
};

export const agregarUsuario = async (data) => {
    const { password, ...userData } = data;

    // Cifrar el password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Insertar en la tabla de usuarios
    const result = await db.agregar(tablaUsuarios, userData);
    const id_users = userData.id_users

    // Insertar en la tabla auth con el id_users y el hashedPassword
    const authData = { id_users, password: hashedPassword };
    await db.agregar(tablaAuth, authData);

    return result;
};

export default  todos;
