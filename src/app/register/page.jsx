'use client'

import { useActionState } from 'react';
import Image from "next/image";
import Form from "next/form";
import { createNewUser } from "./storeNewUser";

export default function Page() {
    const [state, action, pending] = useActionState(createNewUser, undefined);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black">
            <Form
                action={action}
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
                    {state?.errors?.txtFirstName && (
                        <p className="mt-2 text-sm text-red-500 font-medium animate__animated animate__fadeIn">
                            {state.errors.txtFirstName}
                        </p>
                    )}
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
                    {state?.errors?.txtSecondName && (
                        <p className="mt-2 text-sm text-red-500 font-medium animate__animated animate__fadeIn">
                            {state.errors.txtSecondName}
                        </p>
                    )}
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
                    {state?.errors?.txtUsername && (
                        <p className="mt-2 text-sm text-red-500 font-medium animate__animated animate__fadeIn">
                            {state.errors.txtUsername}
                        </p>
                    )}
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
                    {state?.errors?.dateBirthday && (
                        <p className="mt-2 text-sm text-red-500 font-medium animate__animated animate__fadeIn">
                            {state.errors.dateBirthday}
                        </p>
                    )}
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
                    {state?.errors?.txtPassword && (
                        <div>
                            <p className="mt-2 text-sm text-red-500 font-medium animate__animated animate__fadeIn">
                                La contraseña debe cumplir con:
                            </p>
                            <ul className="mt-2 ml-4 list-disc text-sm text-red-400 space-y-1">
                                {state.errors.txtPassword.map((error) => (
                                    <li key={error} className="leading-5">
                                        {error}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
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
                    {state?.errors?.txtPasswordConfirm && (
                        <p className="mt-2 text-sm text-red-500 font-medium animate__animated animate__fadeIn">
                            {state.errors.txtPasswordConfirm}
                        </p>
                    )}
                </div>

                <button
                    type="submit"
                    className={`w-full py-2 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none transition duration-300 ${
                        pending
                            ? "bg-purple-400 text-gray-300 cursor-not-allowed"
                            : "bg-purple-600 text-white hover:bg-purple-700"
                    }`}
                    disabled={pending}
                >
                    {pending ? (
                        <div className="flex items-center justify-center">
                            <svg
                                className="animate-spin h-5 w-5 mr-2 text-gray-300"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                ></circle>
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8v8h8a8 8 0 01-8 8z"
                                ></path>
                            </svg>
                            Cargando...
                        </div>
                    ) : (
                        "Crear cuenta"
                    )}
                </button>
                <p className="mt-4 text-sm text-center text-gray-400">
                    ¿Ya tienes cuenta?{" "}
                    <a href="/" className="text-purple-500 hover:underline">
                        Ingresa aquí
                    </a>
                </p>
            </Form>
        </div>
    );
}
