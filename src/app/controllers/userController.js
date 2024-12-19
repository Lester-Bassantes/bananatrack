import User from '../models/User';
import bcrypt from 'bcrypt';

export async function createUser(user) {
    try {
        const { user_name, user_second_name, user_username, user_birthday, user_password } = user;

        // Encrypt password
        const hashedPassword = await bcrypt.hash(user_password, 10);

        const newUser = await User.create({
            user_name,
            user_second_name,
            user_username,
            user_birthday,
            user_password: hashedPassword,
        });
        return { success: true, message: 'Usuario creado exitosamente', data: newUser };
    } catch (error) {
        console.error(error);
        return { success: false, message: 'Error al crear el usuario', error: error.message };
    }
}

export async function searchUserByUsername(username) {
    return await User.findOne({
        where: { user_username: username }
    });
}