'use server';

import {createUser} from '../controllers/userController';
import {SignupFormSchema} from '../lib/registerDefinitions';
import {redirect} from "next/navigation";

export async function createNewUser(state, formData) {
    const validatedFields = SignupFormSchema.safeParse({
        txtFirstName: formData.get('txtFirstName'),
        txtSecondName: formData.get('txtSecondName'),
        txtUsername: formData.get('txtUsername'),
        dateBirthday: formData.get('dateBirthday'),
        txtPassword: formData.get('txtPassword'),
        txtPasswordConfirm: formData.get('txtPasswordConfirm')
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    const user = {
        user_name: formData.get('txtFirstName'),
        user_second_name: formData.get('txtSecondName'),
        user_username: formData.get('txtUsername'),
        user_birthday: formData.get('dateBirthday'),
        user_password: formData.get('txtPassword'),
    }
    const {success} = await createUser(user);
    redirect('/');
    return success;
}