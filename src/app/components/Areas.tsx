"use client"
import { useState } from "react";

const areas = [
    {
        key: "empresarial",
        n: "I",
        title: "Direito Empresarial",
        sub: "Estratégia para companhias, fundadores e famílias empresárias.",
        body: "Estruturação societária, governança, M&A, contratos de longo prazo, sucessão familiar e proteção patrimonial. Atuamos lado a lado com o conselho — não como fornecedores externos, mas como interlocutores permanentes da diretoria.",
        bullets: ["Reorganizações societárias", "Joint ventures", "Acordos de sócios", "Holdings familiares"],
    },
    {
        key: "trabalhista",
        n: "II",
        title: "Trabalhista",
        sub: "Defesa, prevenção e arquitetura de relações de trabalho.",
        body: "Consultoria preventiva, contencioso estratégico e negociação coletiva. Trabalhamos para que processos não nasçam — e, quando inevitáveis, sejam conduzidos com leitura precisa do risco reputacional.",
        bullets: ["Compliance trabalhista", "Negociação sindical", "Executivos e altos cargos", "Reestruturações"],
    },
    {
        key: "tributario",
        n: "III",
        title: "Tributário",
        sub: "Planejamento, contencioso administrativo e judicial.",
        body: "Construímos teses sob medida, em diálogo próximo com o departamento fiscal do cliente. Atuamos em todas as instâncias administrativas e judiciais, com forte presença em CARF e tribunais superiores.",
        bullets: ["Planejamento patrimonial", "Defesa em CARF", "Contencioso estratégico", "Recuperação de créditos"],
    },
    {
        key: "previdenciario",
        n: "IV",
        title: "Previdenciário",
        sub: "Aposentadorias estratégicas e revisões de alta complexidade.",
        body: "Acompanhamos executivos, profissionais liberais e famílias em decisões previdenciárias de longo prazo — incluindo planejamento prévio à aposentadoria e revisões de benefícios concedidos.",
        bullets: ["Planejamento de aposentadoria", "Revisão de benefícios", "RPPS e regime próprio", "Pensão e dependentes"],
    },
    {
        key: "civel",
        n: "V",
        title: "Cível",
        sub: "Patrimônio, contratos, família e sucessões.",
        body: "Conduzimos disputas patrimoniais sensíveis com a discrição que o tema exige. Atuamos em inventários complexos, partilhas, contratos de alto valor e responsabilidade civil.",
        bullets: ["Inventários e partilhas", "Contratos imobiliários", "Responsabilidade civil", "Família — alta complexidade"],
    },
];

export function Areas() {
    const [active, setActive] = useState(areas[0].key);
    const current = areas.find((a) => a.key === active)!;

    return (
        <section id="areas" className="bg-ink py-10 text-paper md:py-18">
            <div className="mx-auto max-w-370 px-6 md:px-12">
                <div className="mb-16 flex items-end justify-between gap-8">
                    <div>
                        <div className="eyebrow rule-gold text-paper/70">§ 02 — Áreas de atuação</div>
                        <h2 className="mt-6 max-w-2xl font-serif text-4xl leading-tight text-paper md:text-6xl">
                            Cinco competências.<br />
                            Uma única <em className="italic text-champagne">disciplina</em>.
                        </h2>
                    </div>
                    <div className="hidden text-right text-xs uppercase tracking-[0.28em] text-paper/50 md:block">
                        {String(areas.findIndex((a) => a.key === active) + 1).padStart(2, "0")}
                        <span className="mx-2 text-paper/30">/</span>
                        {String(areas.length).padStart(2, "0")}
                    </div>
                </div>

                <div className="grid grid-cols-12 gap-x-6 gap-y-10">
                    {/* Side nav */}
                    <nav className="col-span-12 md:col-span-4">
                        <ul className="border-t border-paper/15">
                            {areas.map((a) => {
                                const on = a.key === active;
                                return (
                                    <li key={a.key} className="border-b border-paper/15">
                                        <button
                                            onMouseEnter={() => setActive(a.key)}
                                            onClick={() => setActive(a.key)}
                                            className="group flex w-full items-center justify-between p-6 text-left transition-colors"
                                        >
                                            <span className="flex items-baseline gap-6">
                                                <span
                                                    className={`font-serif text-sm tracking-[0.2em] transition-colors ${
                                                        on ? "text-champagne" : "text-paper/40"
                                                    }`}
                                                >
                                                    {a.n}
                                                </span>
                                                <span
                                                    className={`font-serif text-2xl leading-none transition-all md:text-3xl ${
                                                        on ? "text-paper translate-x-2" : "text-paper/60"
                                                    }`}
                                                >
                                                    {a.title}
                                                </span>
                                            </span>
                                            <span
                                                className={`text-paper/40 transition-all text-xl ${
                                                on ? "text-champagne translate-x-0" : "-translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
                                                }`}
                                            >
                                                →
                                            </span>
                                        </button>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>

                    {/* Detail */}
                    <div className="col-span-12 md:col-span-7 md:col-start-6">
                        <div key={current.key} className="reveal">
                            <p className="font-serif text-3xl leading-snug text-paper md:text-[42px]">
                                {current.sub}
                            </p>
                            <p className="mt-10 max-w-xl text-[15px] leading-relaxed text-paper/70">
                                {current.body}
                            </p>

                            <ul className="mt-12 grid grid-cols-1 gap-x-10 gap-y-4 border-t border-paper/15 pt-8 sm:grid-cols-2">
                                {current.bullets.map((b, i) => (
                                    <li
                                        key={b}
                                        className="flex items-baseline gap-4 text-[14px] text-paper/85"
                                    >
                                        <span className="font-serif text-lg text-champagne">
                                            0{i + 1}
                                        </span>
                                        {b}
                                    </li>
                                ))}
                            </ul>

                            <a
                                href="#contato"
                                className="mt-16 inline-flex items-center gap-4 border-b border-champagne/70 pb-2 text-[12px] uppercase tracking-[0.3em] text-champagne"
                            >
                                Consultar sobre {current.title.toLowerCase()}
                                <span>→</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
