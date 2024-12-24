'use server'

import bcrypt from 'bcrypt';
import { searchUserByUsername } from './controllers/userController';
import {redirect} from "next/navigation";

export async function login(state, formData) {
    const username = formData.get('txtUsername');
    const password = formData.get('txtPassword');
    const userDatabase = await searchUserByUsername(username);

    if (!userDatabase) {
        return {message: "No existe el usuario"};
    }

    const isPasswordValid = await bcrypt.compare(password, userDatabase.user_password);

    if (!isPasswordValid) {
        return {message: "Contraseña incorrecta"};
    }

    redirect('/dashboard');
    return {message: "Login"};

}