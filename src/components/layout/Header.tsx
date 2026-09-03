import Image from "next/image";
import { FACEBOOK_URL, INSTAGRAM_URL, TIKTOK_URL } from "@/config/links";

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

        <div className="ml-auto flex items-center">
          <details className="group relative">
            <summary className="flex h-9 w-9 cursor-pointer list-none items-center justify-center border border-cyber-blue/70 bg-cyber-blue/10 font-mono text-sm font-bold text-cyber-blue shadow-[0_0_22px_rgba(19,191,255,0.16)] transition hover:border-cyber-blue hover:bg-cyber-blue/20 [&::-webkit-details-marker]:hidden">
              J/
              <span className="sr-only">Abrir redes sociales</span>
            </summary>
            <div className="absolute right-0 top-12 z-30 w-60 border border-cyber-blue/35 bg-[#080C14]/95 p-3 text-left shadow-[0_0_30px_rgba(19,191,255,0.18)] backdrop-blur-xl">
              <p className="px-2 pb-2 font-mono text-[9px] uppercase tracking-[0.16em] text-muted-gray">/ Redes sociales</p>
              <a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between px-2 py-3 font-mono text-sm text-white/80 transition-colors hover:bg-cyber-blue/10 hover:text-cyber-blue">
                TikTok
                <span className="text-xs text-white/40" aria-hidden="true">-&gt;</span>
              </a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between px-2 py-3 font-mono text-sm text-white/80 transition-colors hover:bg-neon-purple/10 hover:text-neon-purple">
                Instagram
                <span className="text-xs text-white/40" aria-hidden="true">-&gt;</span>
              </a>
              <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between px-2 py-3 font-mono text-sm text-white/80 transition-colors hover:bg-cyber-blue/10 hover:text-cyber-blue">
                Facebook
                <span className="text-xs text-white/40" aria-hidden="true">-&gt;</span>
              </a>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
