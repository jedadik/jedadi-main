import Image from "next/image";

const navigation = [
  { label: "Central", href: "#central" },
  { label: "Ecosistema", href: "#ecosystem" },
  { label: "Manifiesto", href: "#manifiesto" },
  { label: "Foundation", href: "#foundation" },
];

export default function Header() {
  return (
    <header className="relative z-20 border-b border-white/10 bg-titanium-dark/75 backdrop-blur-xl">
      <div className="relative mx-auto flex min-h-20 w-full max-w-7xl items-center justify-between gap-6 px-5 py-4 sm:px-8 lg:px-10">
        <a href="#central" className="group absolute left-1/2 flex -translate-x-1/2 shrink-0 items-center gap-3" aria-label="JEDADI, volver al inicio">
          <Image
            src="/logo.png"
            alt="JEDADI"
            width={120}
            height={60}
            priority
            className="h-12 w-[96px] object-contain transition duration-300 group-hover:brightness-125 sm:h-14 sm:w-[120px]"
          />
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegacion principal">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-gray transition-colors hover:text-cyber-blue"
            >
              {item.label}
            </a>
          ))}
        </nav>


      </div>
    </header>
  );
}
