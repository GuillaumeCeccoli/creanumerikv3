import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex flex-col items-center text-white text-xs gap-2">
      <span>Créé par Guillaume Ceccoli - CreaNumerik04</span>
      <span>SIRET : 98036273500014</span>
      <Link href="/mentions"> Mentions légales</Link>
    </div>
  );
}

