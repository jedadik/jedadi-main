import { FACEBOOK_URL, INSTAGRAM_URL, TIKTOK_URL } from "@/config/links";

const metrics = [
  { label: "ENERGÍA SOLAR", value: "Instalación & Ingeniería", color: "text-fire-orange" },
  { label: "SISTEMA SAAS", value: "Organización Anti-Estrés", color: "text-emerald-ahead" },
  { label: "COMUNIDAD GLOBAL", value: "Conexión de Idiomas", color: "text-cyber-blue" },
];

export default function Hero() {
  return (
    <main
      id="central"
      className="relative isolate flex min-h-[calc(100vh-80px)] items-center overflow-hidden px-5 py-16 sm:px-8 sm:py-24 lg:px-10 lg:py-28"
      style={{
        backgroundImage:
          "radial-gradient(circle at 50% 34%, rgba(19,191,255,0.12), transparent 32%), radial-gradient(circle at 84% 72%, rgba(168,85,247,0.1), transparent 24%), linear-gradient(rgba(156,163,175,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(156,163,175,0.055) 1px, transparent 1px)",
        backgroundSize: "auto, auto, 42px 42px, 42px 42px",
      }}
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(11,15,25,0.1),#0B0F19_88%)]" />
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center text-center">
        <div className="mx-auto mt-2 mb-3 flex w-full justify-center sm:mt-3 sm:mb-4">
          <details className="group relative">
            <summary className="flex cursor-pointer list-none items-center gap-2 rounded-full border border-cyber-blue/70 bg-cyber-blue/10 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.18em] text-cyber-blue shadow-[0_0_22px_rgba(19,191,255,0.16)] transition hover:border-cyber-blue hover:bg-cyber-blue/20 [&::-webkit-details-marker]:hidden">
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-cyber-blue/70 bg-[#0B0F19] text-sm font-bold text-cyber-blue">
                J/
              </span>
              <span className="text-muted-gray">Redes sociales</span>
            </summary>
            <div className="absolute left-1/2 top-[calc(100%+0.35rem)] z-30 w-60 -translate-x-1/2 border border-cyber-blue/35 bg-[#080C14]/95 p-3 text-left shadow-[0_0_30px_rgba(19,191,255,0.18)] backdrop-blur-xl">
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

        <div className="mt-3 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-cyber-blue sm:mt-4">
          <span className="h-px w-8 bg-cyber-blue/60 sm:w-14" />
          <span>Central intelligence / 001</span>
          <span className="h-px w-8 bg-cyber-blue/60 sm:w-14" />
        </div>

        <h1 className="max-w-5xl text-balance text-5xl font-semibold leading-[0.96] tracking-[-0.04em] text-white sm:text-7xl lg:text-8xl">
          Look always
          <span className="block bg-gradient-to-r from-cyber-blue via-white to-neon-purple bg-clip-text text-transparent">ahead.</span>
        </h1>
        <p className="mt-7 max-w-2xl text-base leading-7 text-muted-gray sm:mt-8 sm:text-lg sm:leading-8">
          Erradica el caos mental. Organiza tu inteligencia, protege lo que importa y aprende con una arquitectura neuronal diseñada para avanzar.
        </p>

        <div className="mt-9 flex w-full flex-col items-stretch justify-center gap-3 sm:mt-11 sm:w-auto sm:flex-row sm:items-center">
          <a
            href="#ecosystem"
            className="inline-flex min-h-14 items-center justify-center border border-cyber-blue/45 bg-cyber-blue/5 px-7 font-mono text-xs font-bold uppercase tracking-[0.12em] text-cyber-blue transition hover:border-cyber-blue hover:bg-cyber-blue/12 hover:shadow-[0_0_24px_rgba(19,191,255,0.14)]"
          >
            Explorar Ecosistema
          </a>
        </div>

        <div className="mt-16 w-full max-w-4xl border border-white/10 bg-titanium-dark/65 text-left shadow-[0_20px_80px_rgba(0,0,0,0.28)] backdrop-blur-md sm:mt-24">
          <div className="border-b border-white/10 px-4 py-3 sm:px-5">
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-gray">JEDADI / ECOSYSTEM METRICS</span>
          </div>
          <div className="grid divide-y divide-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {metrics.map((metric) => (
              <div key={metric.label} className="px-4 py-5 sm:px-5 sm:py-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-gray">{metric.label}</p>
                <p className={`mt-2 font-mono text-base font-semibold leading-6 ${metric.color}`}>{metric.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
