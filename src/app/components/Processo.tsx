const steps = [
    {
        n: "I",
        title: "Audiência reservada",
        body: "Encontro privativo, sem formalismo, para escutar antes de propor. Não cobramos por esta conversa.",
        time: "Dia 01",
    },
    {
        n: "II",
        title: "Estudo de caso",
        body: "Análise documental aprofundada e mapeamento de cenários — incluindo riscos não-jurídicos.",
        time: "Dias 02 — 10",
    },
    {
        n: "III",
        title: "Plano e honorários",
        body: "Proposta detalhada por escrito: estratégia, prazos, equipe e honorários. Nada começa sem aprovação.",
        time: "Dia 12",
    },
    {
        n: "IV",
        title: "Condução",
        body: "Sócio responsável conduz pessoalmente. Relatórios mensais escritos, reuniões trimestrais presenciais.",
        time: "Em curso",
    },
    {
        n: "V",
        title: "Encerramento e relação",
        body: "Relatório final, arquivo seguro, e — invariavelmente — uma relação de confiança que permanece.",
        time: "Conclusão",
    },
];

export function Processo() {
    return (
        <section id="processo" className="relative overflow-hidden bg-paper py-10 md:py-18">
            <div className="mx-auto max-w-370 px-6 md:px-12">
                <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                    <div>
                        <div className="eyebrow rule-gold">§ 05 — Processo de atendimento</div>
                        <h2 className="mt-6 max-w-3xl font-serif text-4xl leading-tight md:text-6xl">
                            Cinco etapas.
                            <br />
                            <em className="italic text-gold/90">Nenhum atalho.</em>
                        </h2>
                    </div>
                    <p className="max-w-sm text-[13px] uppercase tracking-[0.22em] text-mute">
                        Mesma sequência<br />desde 1987.
                    </p>
                </div>
            </div>

            {/* Horizontal scroll timeline */}
            <div className="mt-24 overflow-x-auto mx-10 md:mx-12">
                <div className="mx-auto flex max-w-none gap-0" style={{ minWidth: "1200px" }}>
                    {steps.map((s, i) => (
                        <div
                            key={s.n}
                            className="relative flex w-70 shrink-0 flex-col border-l border-line pl-6 md:w-85"
                        >
                            {/* dot on top rail */}
                            <div className="relative -mt-3 mb-10 flex items-center">
                                <div className="absolute -left-1.75 h-3 w-3 rotate-45 border border-gold bg-paper" />
                                <div className="ml-2 h-px flex-1 bg-line" />
                            </div>

                            <span className="font-serif text-5xl text-gold/80">{s.n}</span>
                            <p className="mt-2 text-xs uppercase tracking-[0.3em] text-mute">{s.time}</p>
                            <h3 className="mt-8 font-serif text-2xl text-ink md:text-3xl">{s.title}</h3>
                            <p className="mt-4 max-w-65 text-[14px] leading-relaxed text-ash">{s.body}</p>
                            {i < steps.length - 1 && (
                                <div className="absolute right-6 top-1/2 hidden text-mute md:block">→</div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
