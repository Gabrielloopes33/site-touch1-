import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-5 left-2 right-5 bg-white/1 z-30 ">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-sm before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Link href="/" aria-label="Ir para a Página Inicial">
              <Image
                src="/images/logo-01.svg" // Caminho correto
                alt="Logo da Agência"
                width={100}
                height={100}
                priority // Garante que carrega rapidamente
              />
            </Link>
          </div>

          {/* Desktop sign in links */}
          <ul className="flex flex-1 items-center justify-end gap-3">
          <li>
              <Link
                href="/Sobre"
                className="btn-sm bg-white text-gray-800 shadow hover:bg-gray-50"
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link
                href="/Port"
                className="btn-sm bg-white text-gray-800 shadow hover:bg-gray-50"
              >
                Portfólio
              </Link>
            </li>
            <li>
              <Link
                href="/signin"
                className="btn-sm bg-gray-800 text-gray-200 shadow hover:bg-gray-900"
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
