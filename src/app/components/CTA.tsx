export function CTA() {
    const words = "Algumas decisões merecem ser conduzidas com o tempo que exigem.";
    return (
        <section id="contato" className="relative overflow-hidden bg-ink py-10 text-paper md:py-18">
            <div className="pointer-events-none absolute inset-0 flex items-center overflow-hidden opacity-[0.04]">
                <div className="marquee flex shrink-0 whitespace-nowrap font-serif text-[18vw] leading-none">
                    <span className="px-12">Vasconcellos &amp; Mendes —</span>
                    <span className="px-12">Vasconcellos &amp; Mendes —</span>
                </div>
            </div>

            <div className="relative mx-auto max-w-370 px-6 md:px-12">
                <div className="eyebrow rule-gold text-paper/60">§ 07 — Consulta</div>

                <h2 className="mt-10 max-w-4xl font-serif text-4xl leading-[1.1] text-paper md:text-7xl">
                    {words.split(" ").map((w, i) =>
                        w === "tempo" ? (
                            <em key={i} className="italic text-champagne">
                                {w}{" "}
                            </em>
                        ) : (
                            <span key={i}>{w} </span>
                        ),
                    )}
                </h2>

                <div className="mt-16 grid grid-cols-12 gap-6 border-t border-paper/15 pt-12">
                    <div className="col-span-12 md:col-span-5">
                        <p className="text-[13px] uppercase tracking-[0.28em] text-paper/60">
                            Agendamento
                        </p>
                        <p className="mt-4 font-serif text-2xl text-paper md:text-3xl">
                            contato@vasconcellosmendes.adv.br
                        </p>
                        <p className="mt-2 font-serif text-2xl text-paper md:text-3xl">
                            +55 11 3000 0000
                        </p>
                    </div>
                    <div className="col-span-12 md:col-span-4">
                        <p className="text-[13px] uppercase tracking-[0.28em] text-paper/60">Sede</p>
                        <p className="mt-4 text-[15px] leading-relaxed text-paper/80">
                            Av. Brigadeiro Faria Lima, 4500
                            <br />
                            21º andar — Itaim Bibi
                            <br />
                            São Paulo · 04538-132
                        </p>
                    </div>
                    <div className="col-span-12 md:col-span-3 md:text-right">
                        <a
                            href="mailto:contato@vasconcellosmendes.adv.br"
                            className="inline-flex items-center gap-4 border-b border-champagne pb-2 text-[12px] uppercase tracking-[0.3em] text-champagne"
                        >
                            Agendar conversa <span>→</span>
                        </a>
                        <p className="mt-6 text-[11px] uppercase tracking-[0.22em] text-paper/40">
                            Atendimento sob hora marcada
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
