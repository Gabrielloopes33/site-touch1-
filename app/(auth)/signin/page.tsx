export const metadata = {
  title: "Sign In - Simple",
  description: "Page description",
};

import Link from "next/link";
import Header from "@/components/ui/header"; // Certifique-se de que o caminho está correto

export default function SignIn() {
  return (
    <>
      <Header /> {/* Adicionando o Header aqui */}
      <div className="container mx-auto px-4">
        <div className="mb-10">
          <h1 className="text-4xl font-bold">Faça login na sua conta</h1>
        </div>
        {/* Form */}
        <form>
          <div className="space-y-4">
            <div>
              <label
                className="mb-1 block text-sm font-medium text-gray-700"
                htmlFor="email"
              >
                Email
              </label>
              <input
                id="email"
                className="form-input w-full py-2"
                type="email"
                placeholder="email-de-acesso@email.com"
                required
              />
            </div>
            <div>
              <label
                className="mb-1 block text-sm font-medium text-gray-700"
                htmlFor="password"
              >
                Senha
              </label>
              <input
                id="password"
                className="form-input w-full py-2"
                type="password"
                autoComplete="on"
                placeholder="••••••••"
                required
              />
            </div>
          </div>
          <div className="mt-6">
            <button className="btn w-full bg-gradient-to-t from-purple-700 to-purple-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%]">
              Acessar
            </button>
          </div>
        </form>
        {/* Bottom link */}
        <div className="mt-6 text-center">
          <Link
            className="text-sm text-gray-700 underline hover:no-underline"
            href="/reset-password"
          >
            Esqueci minha senha
          </Link>
        </div>
      </div>
    </>
  );
}