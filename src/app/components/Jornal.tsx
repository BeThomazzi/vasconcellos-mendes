const articles = [
    {
        kicker: "Tributário",
        date: "Mar. 2026",
        title: "O CARF depois da Lei 14.689: o que mudou para o contencioso de alto valor.",
        read: "12 min",
    },
    {
        kicker: "Sucessório",
        date: "Fev. 2026",
        title: "Holdings familiares: erros silenciosos que comprometem a próxima geração.",
        read: "9 min",
    },
    {
        kicker: "Trabalhista",
        date: "Jan. 2026",
        title: "Executivos C-level: cláusulas de não-concorrência e o limite da exigibilidade.",
        read: "7 min",
    },
];

export function Jornal() {
    return (
        <section id="jornal" className="bg-paper py-10 md:py-18">
            <div className="mx-auto max-w-370 px-6 md:px-12">
                <div className="flex items-end justify-between border-b border-line pb-10">
                    <div>
                        <div className="eyebrow rule-gold">§ 06 — Jornal</div>
                        <h2 className="mt-6 font-serif text-4xl leading-tight md:text-5xl">
                            Notas da banca.
                        </h2>
                    </div>
                    <a
                        href="#"
                        className="hidden text-xs uppercase tracking-[0.28em] text-ink md:inline gold-underline"
                    >
                        Arquivo completo →
                    </a>
                </div>

                <ul>
                    {articles.map((a, i) => (
                        <li key={i} className="border-b border-line">
                            <a
                                href="#"
                                className="group grid grid-cols-12 items-baseline gap-x-6 py-10 transition-colors"
                            >
                                <div className="col-span-2 text-xs uppercase tracking-[0.28em] text-mute">
                                    {a.date}
                                </div>
                                <div className="col-span-2 text-xs uppercase tracking-[0.28em] text-gold">
                                    {a.kicker}
                                </div>
                                <h3 className="col-span-7 font-serif text-2xl leading-snug text-ink transition-colors group-hover:text-gold md:text-4xl">
                                    {a.title}
                                </h3>
                                <div className="col-span-1 text-right text-xs uppercase tracking-[0.22em] text-mute">
                                    {a.read}
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
