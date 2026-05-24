export function Diferenciais() {
    return (
        <section id="diferenciais" className="bg-paper py-10 md:py-18">
            <div className="mx-auto max-w-370 px-6 md:px-12">
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="col-span-12 md:col-span-4">
                        <div className="eyebrow rule-gold">§ 03 — O método</div>
                        <h2 className="mt-6 font-serif text-4xl leading-tight md:text-5xl">
                            Quatro princípios <br />
                            <em className="italic text-gold/90">não-negociáveis.</em>
                        </h2>
                        <p className="mt-8 max-w-xs text-[14px] leading-relaxed text-ash">
                            Não vendemos pacotes. Cada uma destas convicções aparece, sem exceção, em todas as causas que aceitamos conduzir.
                        </p>
                    </div>

                    <div className="col-span-12 mt-16 md:col-span-7 md:col-start-6 md:mt-0">
                        <ol className="divide-y divide-line">
                            <Principio
                                n="01"
                                title="Um sócio por causa"
                                body="O sócio responsável conduz o caso do primeiro encontro à última peça. Não há repasses internos invisíveis ao cliente."
                                tag="Responsabilidade"
                            />
                            <Principio
                                n="02"
                                title="Honorário transparente"
                                body="Proposta detalhada antes do mandato. Reajustes só após autorização expressa. Nenhuma surpresa em fatura."
                                tag="Ética"
                            />
                            <Principio
                                n="03"
                                title="Confidencialidade ampliada"
                                body="Estendemos sigilo a todos os colaboradores externos. Documentos sensíveis circulam em rede isolada, com auditoria."
                                tag="Sigilo"
                            />
                            <Principio
                                n="04"
                                title="Acordo antes do litígio"
                                body="92% das causas se encerram fora dos tribunais — não por aversão à corte, mas por respeito ao tempo e à reputação dos clientes."
                                tag="Estratégia"
                            />
                        </ol>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Principio({
    n,
    title,
    body,
    tag,
}: {
    n: string;
    title: string;
    body: string;
    tag: string;
}) {
    return (
        <li className="group grid grid-cols-12 gap-x-6 py-10">
            <div className="col-span-2">
                <span className="font-serif text-4xl text-gold">{n}</span>
            </div>
            <div className="col-span-7">
                <h3 className="font-serif text-2xl text-ink md:text-3xl">{title}</h3>
                <p className="mt-3 max-w-md text-[14px] leading-relaxed text-ash">{body}</p>
            </div>
            <div className="col-span-3 text-right">
                <span className="text-xs uppercase tracking-[0.3em] text-mute">{tag}</span>
            </div>
        </li>
    );
}
