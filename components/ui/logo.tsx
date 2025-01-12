import Link from "next/link";
import Image from "next/image"; // Importa o componente Image do Next.js




export default function Logo() {
  return (
    <Link href="/" className="inline-flex " aria-label="Cruip"  >
      <Image
        src='/imageasds/logo-01.svg' // Caminho da logo (em public/)
        alt=" "
        width={300} // Ajuste para o tamanho desejado
        height={100}
      />
    </Link>
  );
}
