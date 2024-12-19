import { z } from 'zod';

export const SignupFormSchema = z
    .object({
        txtFirstName: z
            .string()
            .min(2, { message: 'El nombre debe tener al menos 2 caracteres.' })
            .max(50, { message: 'El nombre no debe exceder los 25 caracteres.' })
            .trim(),
        txtSecondName: z
            .string()
            .min(2, { message: 'El apellido debe tener al menos 2 caracteres.' })
            .max(50, { message: 'El apellido no debe exceder los 25 caracteres.' })
            .trim(),
        txtUsername: z
            .string()
            .min(3, { message: 'El nombre de usuario debe tener al menos 3 caracteres.' })
            .max(30, { message: 'El nombre de usuario no debe exceder los 25 caracteres.' })
            .regex(/^[a-zA-Z0-9_]+$/, { message: 'El nombre de usuario solo puede contener letras, números y guiones bajos.' })
            .trim(),
        dateBirthday: z
            .string()
            .refine((val) => !isNaN(Date.parse(val)), { message: 'Debe ser una fecha válida.' }),
        txtPassword: z
            .string()
            .min(8, { message: 'La contraseña debe tener al menos 8 caracteres.' })
            .regex(/[a-zA-Z]/, { message: 'La contraseña debe contener al menos una letra.' })
            .regex(/[0-9]/, { message: 'La contraseña debe contener al menos un número.' })
            .regex(/[^a-zA-Z0-9]/, { message: 'La contraseña debe contener al menos un carácter especial.' })
            .trim(),
        txtPasswordConfirm: z.string(),
    })
    .superRefine((data, ctx) => {
        if (data.txtPassword !== data.txtPasswordConfirm) {
            ctx.addIssue({
                path: ['txtPasswordConfirm'],
                message: 'Las contraseñas deben coincidir.',
            });
        }
    });

