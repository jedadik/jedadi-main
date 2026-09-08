import Image from "next/image";
import { DASHBOARD_URL, TECNOSOLAR_URL } from "@/config/links";

const modules = [
  {
    number: "01",
    category: "/ PRODUCTIVITY SYSTEM",
    title: "JEDADI Dashboard",
    description:
      "Centro de control personal para erradicar el estrés y organizar proyectos con métricas en tiempo real.",
    status: "OPERATIONAL - LIVE",
    accentText: "text-emerald-ahead",
    accentBorder: "hover:border-emerald-ahead/60",
    accentGlow: "hover:shadow-[0_0_34px_rgba(34,197,94,0.14)]",
    cta: "Acceder al Dashboard ->",
    href: DASHBOARD_URL,
    image: "/dashboardimg.png",
    imageWidth: 900,
    imageHeight: 560,
    imageClassName: "h-full w-full object-contain p-1 sm:p-2",
    imageWrapClassName: "h-52 bg-slate-950/60 sm:h-44",
  },
  {
    number: "02",
    category: "/ CLEAN ENERGY & ENGINEERING",
    title: "Tecnosolar del Caribe",
    description:
      "Soluciones de energía fotovoltaica, instalación solar profesional y catálogo digital de ingeniería.",
    status: "CATÁLOGO & SERVICIOS",
    accentText: "text-fire-orange",
    accentBorder: "hover:border-fire-orange/60",
    accentGlow: "hover:shadow-[0_0_34px_rgba(255,138,0,0.16)]",
    cta: "Ver Catálogo Digital ->",
    href: TECNOSOLAR_URL,
    image: "/logoTecnosolar.png",
    imageWidth: 900,
    imageHeight: 560,
    imageClassName: "h-full w-full object-contain p-3 drop-shadow-[0_0_15px_rgba(245,158,11,0.15)]",
    imageWrapClassName: "border-amber-500/20 bg-gradient-to-b from-amber-500/5 via-slate-950 to-slate-950",
  },
  {
    number: "03",
    category: "/ NEURAL LEARNING & NETWORK",
    title: "Aprendizaje Neuronal de Idiomas",
    description:
      "Metodología basada en la experiencia de aprendizaje autónomo y comunidad de intercambio entre hispanohablantes y nativos.",
    status: "EN DESARROLLO",
    accentText: "text-cyber-blue",
    accentBorder: "hover:border-cyber-blue/60",
    accentGlow: "hover:shadow-[0_0_34px_rgba(19,191,255,0.14)]",
    cta: "Unirse a la Lista de Espera ->",
    image: "/languagesLogo.png",
    imageWidth: 900,
    imageHeight: 560,
    imageClassName: "h-full w-full object-contain p-2",
    imageWrapClassName: "bg-slate-950/60",
  },
  {
    number: "04",
    category: "/ BRAND & PHILOSOPHY",
    title: "JEDADI Lifestyle & Apparel",
    description:
      'El manifiesto "LOOK ALWAYS AHEAD" llevado a productos físicos, ropa y herramientas de mentalidad.',
    status: "NEXT GEN",
    accentText: "text-neon-purple",
    accentBorder: "hover:border-neon-purple/60",
    accentGlow: "hover:shadow-[0_0_34px_rgba(168,85,247,0.16)]",
    cta: "Conocer el Manifiesto ->",
    image: "/jedadilifestyleimg.png",
    imageWidth: 900,
    imageHeight: 560,
    imageClassName: "h-full w-full object-contain p-2",
    imageWrapClassName: "bg-slate-950/60",
  },
];

export default function EcosystemGrid() {
  return (
    <section id="ecosystem" className="border-t border-white/10 bg-titanium-dark px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-10 flex flex-col gap-5 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-cyber-blue">/ Ecosystem matrix</p>
            <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
              Cuatro sistemas.
              <span className="block text-muted-gray">Una direccion.</span>
            </h2>
          </div>
          <p className="max-w-xs font-mono text-xs leading-6 text-muted-gray sm:text-right">
            Un ecosistema modular para pensar con claridad, operar mejor y construir impacto.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {modules.map((module) => {
            const card = (
              <article
                className={`group relative flex min-h-[22rem] flex-col overflow-hidden border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-1 ${module.accentBorder} ${module.accentGlow} sm:min-h-80 sm:p-8`}
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="font-mono text-[10px] tracking-[0.14em] text-muted-gray">{module.category}</span>
                  <span className={`font-mono text-xs ${module.accentText}`}>{module.number}</span>
                </div>
                <div className={`mt-10 h-px w-12 bg-current ${module.accentText} transition-all duration-300 group-hover:w-20`} />
                <h3 className="mt-5 text-2xl font-semibold tracking-[-0.025em] text-white">{module.title}</h3>
                <div className={`relative mt-5 h-52 w-full overflow-hidden rounded-lg border border-slate-800/80 shadow-inner transition-all duration-300 group-hover:border-cyan-500/30 sm:h-44 ${module.imageWrapClassName}`}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(19,191,255,0.18),transparent_30%),radial-gradient(circle_at_80%_30%,rgba(168,85,247,0.12),transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.02),rgba(255,255,255,0))]" />
                  <div className="pointer-events-none absolute -inset-x-8 top-[-30%] h-[170%] bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent blur-2xl animate-pulse" />
                  <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
                    <Image
                      src={module.image}
                      alt={module.title}
                      width={module.imageWidth}
                      height={module.imageHeight}
                      className={`${module.imageClassName} transition-transform duration-500 group-hover:scale-105`}
                    />
                  </div>
                </div>
                <p className="mt-3 max-w-md text-sm leading-6 text-muted-gray">{module.description}</p>
                <div className="mt-auto flex items-end justify-between gap-4 pt-8">
                  <span className={`font-mono text-[10px] font-bold tracking-[0.12em] ${module.accentText}`}>
                    [{module.status}]
                  </span>
                  <span className="font-mono text-[10px] tracking-[0.08em] text-white/55 transition-colors group-hover:text-white" aria-hidden="true">
                    {module.cta}
                  </span>
                </div>
              </article>
            );

            return module.href ? (
              <a key={module.title} href={module.href} target="_blank" rel="noopener noreferrer" className="block" aria-label={`Abrir ${module.title}`}>
                {card}
              </a>
            ) : (
              <div key={module.title}>{card}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
