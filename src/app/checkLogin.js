'use server'

import bcrypt from 'bcrypt';
import { searchUserByUsername } from './controllers/userController';

export async function login(prevState, formData) {
    const username = formData.get('txtUsername');
    const password = formData.get('txtPassword');
    const userDatabase = await searchUserByUsername(username);

    if (!userDatabase) {
        return "No existe el usuario";
    }

    const isPasswordValid = await bcrypt.compare(password, userDatabase.user_password);

    if (!isPasswordValid) {
        return "Contraseña incorrecta";
    }

    return "Login exitoso";

}