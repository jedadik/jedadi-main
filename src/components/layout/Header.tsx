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
      <div className="relative mx-auto w-full max-w-7xl px-4 py-3 sm:px-8 lg:px-10">
        <div className="relative flex min-h-16 items-center justify-center sm:min-h-20">
          <a href="#central" className="group flex items-center gap-3" aria-label="JEDADI, volver al inicio">
            <Image
              src="/logo.png"
              alt="JEDADI"
              width={120}
              height={60}
              priority
              className="h-11 w-[92px] object-contain transition duration-300 group-hover:brightness-125 sm:h-14 sm:w-[120px]"
            />
          </a>
        </div>

        <nav className="mt-1.5 flex items-center justify-center gap-1.5 overflow-x-auto pb-1 md:hidden" aria-label="Navegacion principal movil">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap rounded-full border border-white/10 bg-white/[0.02] px-2 py-1 font-mono text-[9px] uppercase tracking-[0.1em] text-muted-gray transition-colors hover:border-cyber-blue/40 hover:text-cyber-blue"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <nav className="hidden items-center justify-center gap-7 lg:flex" aria-label="Navegacion principal desktop">
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
