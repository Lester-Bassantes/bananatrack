'use server';

import { createUser } from '../controllers/userController';
import { SignupFormSchema } from '../lib/registerDefinitions';

export async function createNewUser(prevState, formData) {
    const validatedFields = SignupFormSchema.safeParse({
        txtFirstName: formData.get('txtFirstName'),
        txtSecondName: formData.get('txtSecondName'),
        txtUsername: formData.get('txtUsername'),
        dateBirthday: formData.get('dateBirthday'),
        txtPassword: formData.get('txtPassword'),
        txtPasswordConfirm: formData.get('txtPasswordConfirm')
    });

    if (!validatedFields.success) {
        /* return {
            errors: validatedFields.error.flatten().fieldErrors,
        } */
        return "No se pudo ingresar el usuario"
    }

    const user = {
        user_name: formData.get('txtFirstName'),
        user_second_name: formData.get('txtSecondName'),
        user_username: formData.get('txtUsername'),
        user_birthday: formData.get('dateBirthday'),
        user_password: formData.get('txtPassword'),
    }

    await  createUser(user);
    return "Usuario creado correctamente";
}