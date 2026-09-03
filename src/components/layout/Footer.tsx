import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#080C14] px-5 py-10 sm:px-8 sm:py-14 lg:px-10">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-center">
        <div className="flex items-center gap-4 sm:gap-5">
          <Image
            src="/emblem.png"
            alt="LOOK ALWAYS AHEAD"
            width={96}
            height={144}
            className="h-16 w-11 object-contain drop-shadow-[0_0_16px_rgba(19,191,255,0.5)] sm:h-20 sm:w-[54px]"
          />
          <div>
            <p className="font-mono text-lg font-bold tracking-[0.24em] text-cyber-blue sm:text-xl">JEDADI</p>
            <p className="mt-1 font-mono text-[9px] tracking-[0.16em] text-muted-gray sm:text-[10px]">LOOK ALWAYS AHEAD</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
