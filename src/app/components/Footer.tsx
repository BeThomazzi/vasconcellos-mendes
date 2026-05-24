export function Footer() {
    return (
        <footer className="border-t border-line bg-paper pt-14 pb-7">
            <div className="mx-auto max-w-370 px-6 md:px-12">
                <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-12 md:col-span-5">
                        <p className="font-serif text-2xl text-ink">Vasconcellos &amp; Mendes</p>
                        <p className="mt-2 text-[11px] uppercase tracking-[0.3em] text-mute">
                            Sociedade de advogados · OAB/SP 12.345
                        </p>
                    </div>
                    <div className="col-span-6 md:col-span-3">
                        <p className="text-[10px] uppercase tracking-[0.3em] text-mute">Escritórios</p>
                        <p className="mt-3 text-[13px] leading-relaxed text-ash">
                            São Paulo<br />Rio de Janeiro<br />Lisboa
                        </p>
                    </div>
                    <div className="col-span-6 md:col-span-2">
                        <p className="text-[10px] uppercase tracking-[0.3em] text-mute">Áreas</p>
                        <p className="mt-3 text-[13px] leading-relaxed text-ash">
                            Empresarial<br />Tributário<br />Trabalhista<br />Cível<br />Previdenciário
                        </p>
                    </div>
                    <div className="col-span-12 md:col-span-2 md:text-right">
                        <p className="text-[10px] uppercase tracking-[0.3em] text-mute">Contato</p>
                        <p className="mt-3 text-[13px] leading-relaxed text-ash">
                            +55 11 3000 0000
                        <br />
                            contato@vm.adv.br
                        </p>
                    </div>
                </div>

                <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-line pt-6 text-[10px] uppercase tracking-[0.28em] text-mute md:flex-row md:items-center">
                    <span>© MCMLXXXVII — MMXXVI Vasconcellos &amp; Mendes</span>
                    <div className="flex flex-col items-end gap-2">
                        <span>Em conformidade com o Provimento 205/2021 — OAB</span>
                        <span className="eyebrow">Feito por <a href="http://devoxlabs.dev" target="_blank" rel="noopener noreferrer" className="text-ash">DeVox</a></span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
