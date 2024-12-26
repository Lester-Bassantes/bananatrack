'use client';

import Image from "next/image";
import Form from "next/form";
import { login } from './checkLogin';
import { useActionState } from "react";

export default function Page() {
  const [state, action, pending] = useActionState(login, undefined);

  return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black ">
        <Form
            className="bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-md border border-gray-700 animate__animated animate__fadeInDown"
            action={action}
        >
          <div className="flex justify-center items-center mb-6">
            <Image src={"/images/Grupo-Palmar-Logotipo.png"} alt={"Logo"} height={150} width={250}/>
          </div>

          <div className="mb-4">
            <label
                htmlFor="txtUsername"
                className="block text-gray-300 mb-2 font-medium"
            >
              Usuario
            </label>
            <input
                type="text"
                name="txtUsername"
                id="txtUsername"
                className="w-full px-4 py-2 text-white bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-400"
                placeholder="Ingresa tu usuario"
                required={true}
            />
          </div>
          <div className="mb-6">
            <label
                htmlFor="txtPassword"
                className="block text-gray-300 mb-2 font-medium"
            >
              Contraseña
            </label>
            <input
                type="password"
                name="txtPassword"
                id="txtPassword"
                className="w-full px-4 py-2 text-white bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-400"
                placeholder="Ingresa tu contraseña"
                required={true}
            />
            {state?.message && (
                <p className="mt-2 text-sm text-red-500 font-medium animate__animated animate__fadeIn">
                  {state.message}
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
                "Ingresar"
            )}
          </button>

          <p className="mt-4 text-sm text-center text-gray-400">
            ¿No tienes cuenta?{" "}
            <a href="/register" className="text-purple-500 hover:underline">
              Regístrate aquí
            </a>
          </p>
        </Form>
      </div>
  );
}
