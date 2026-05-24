import hero from "@/public/assets/hero.jpg";
import Image from "next/image";

export function Hero() {
  return (
    <section
      id="top"
      className="flex overflow-hidden bg-paper h-screen items-center"
    >
      <div className="mx-auto grid max-w-370 grid-cols-12 gap-x-6 px-6 md:px-12">
        {/* Left column: meta */}
        <aside className="reveal reveal-d1 col-span-12 mb-10 flex flex-col gap-8 md:col-span-2 md:mb-0">
          <div className="eyebrow rule-gold">Est. MCMLXXXVII</div>
          <div className="hidden text-[11px] uppercase tracking-[0.28em] text-mute md:block">
            São Paulo
            <br />
            Rio de Janeiro
            <br />
            Lisboa
          </div>
        </aside>

        {/* Headline */}
        <div className="col-span-12 md:col-span-7">
          <h1 className="reveal reveal-d2 font-serif text-[44px] leading-[1.02] tracking-[-0.02em] text-ink md:text-[88px] lg:text-[104px]">
            A advocacia
            <br />
            como <em className="font-serif italic text-gold/90">ofício</em>,
            <br />
            não como serviço.
          </h1>

          <div className="reveal reveal-d3 mt-12 flex flex-col items-start gap-8 md:flex-row md:items-end md:justify-between">
            <p className="max-w-md text-[15px] leading-relaxed text-ash">
              Há quase quatro décadas representamos famílias, fundadores e
              companhias em decisões que não admitem improviso. Trabalho
              artesanal, discrição absoluta, resultados verificáveis.
            </p>

            <a
              href="#contato"
              className="group inline-flex items-center gap-4 border-b border-ink pb-2 text-[12px] uppercase tracking-[0.3em] text-ink"
            >
              Agendar conversa
              <span className="inline-block translate-x-0 transition-transform duration-500 group-hover:translate-x-1.5">
                →
              </span>
            </a>
          </div>
        </div>

        {/* Right floating image */}
        <div className="reveal reveal-d4 col-span-12 mt-12 md:col-span-3 md:mt-0">
          <div className="relative aspect-3/4 w-full overflow-hidden">
            <Image
              src={hero}
              alt="Interior do escritório Vasconcellos &amp; Mendes"
              className="h-full w-full object-cover grayscale-15"
            />
            <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-ink/30 via-transparent to-transparent" />
          </div>
          <div className="mt-4 flex items-center justify-between text-xs uppercase tracking-[0.3em] text-mute">
            <span>Sede / SP</span>
            <span>nº 001</span>
          </div>
        </div>
      </div>
    </section>
  );
}

