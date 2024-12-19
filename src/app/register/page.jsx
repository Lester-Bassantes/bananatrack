'use client'

import { useActionState } from 'react';
import Image from "next/image";
import Form from "next/form";
import { createNewUser } from "./storeNewUser";
import Swal from "sweetalert2";

export default function Page() {
    const [message, formAction] = useActionState(createNewUser, null);

    if (message === "No se puedo ingresar el usuario") {
        Swal.fire({
            title: "Error",
            text: "No se pudo crear el usuario",
            icon: "error"
        });
    }

    if (message === "Usuario creado correctamente") {
        Swal.fire({
            title: "Correcto",
            text: "Usuario creado correctamente",
            icon: "success"
        });
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black">
            <Form
                action={formAction}
                className="bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-md border border-gray-700 animate__animated animate__fadeInDown"
            >
                <div className="flex justify-center items-center mb-6">
                    <Image
                        src="/images/Grupo-Palmar-Logotipo.png"
                        width={250}
                        height={150}
                        alt="BananaTrack Logo"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="txtFirstName" className="block text-gray-300 mb-2 font-medium">
                        Nombre
                    </label>
                    <input
                        id="txtFirstName"
                        name="txtFirstName"
                        type="text"
                        maxLength={25}
                        required
                        placeholder="Nombre"
                        className="w-full px-4 py-2 text-white bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-400"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="txtSecondName" className="block text-gray-300 mb-2 font-medium">
                        Apellido
                    </label>
                    <input
                        id="txtSecondName"
                        name="txtSecondName"
                        type="text"
                        maxLength={25}
                        required
                        placeholder="Apellido"
                        className="w-full px-4 py-2 text-white bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-400"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="txtUsername" className="block text-gray-300 mb-2 font-medium">
                        Nombre de usuario
                    </label>
                    <input
                        id="txtUsername"
                        name="txtUsername"
                        type="text"
                        maxLength={25}
                        required
                        placeholder="Usuario"
                        className="w-full px-4 py-2 text-white bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-400"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="dateBirthday" className="block text-gray-300 mb-2 font-medium">
                        Fecha de nacimiento
                    </label>
                    <input
                        id="dateBirthday"
                        name="dateBirthday"
                        type="date"
                        required
                        className="w-full px-4 py-2 text-gray-400 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="txtPassword" className="block text-gray-300 mb-2 font-medium">
                        Contraseña
                    </label>
                    <input
                        id="txtPassword"
                        name="txtPassword"
                        type="password"
                        required
                        placeholder="Contraseña"
                        className="w-full px-4 py-2 text-white bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-400"
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="txtPasswordConfirm" className="block text-gray-300 mb-2 font-medium">
                        Confirmar contraseña
                    </label>
                    <input
                        id="txtPasswordConfirm"
                        name="txtPasswordConfirm"
                        type="password"
                        required
                        placeholder="Confirmar contraseña"
                        className="w-full px-4 py-2 text-white bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-400"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 focus:ring-2 focus:ring-purple-500 focus:outline-none transition duration-300"
                >
                    Crear cuenta
                </button>
            </Form>
        </div>
    );
}
