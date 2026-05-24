"use client"
import { useEffect, useState } from "react";

const links = [
    { href: "#sobre", label: "Escritório" },
    { href: "#areas", label: "Atuação" },
    { href: "#diferenciais", label: "Método" },
    { href: "#equipe", label: "Sócios" },
    { href: "#processo", label: "Processo" },
    { href: "#jornal", label: "Jornal" },
];

export function Nav() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
                scrolled ? "bg-paper/85 backdrop-blur-md border-b border-line" : "bg-transparent"
            }`}
        >
            <div className="mx-auto flex max-w-370 items-center justify-between px-6 py-5 md:px-12">
                <a href="#top" className="flex items-baseline gap-3">
                    <span className="font-serif text-2xl tracking-tight text-ink">Vasconcellos</span>
                    <span className="hidden text-[10px] uppercase tracking-[0.4em] text-mute md:inline">
                        &amp; Mendes — 1987
                    </span>
                </a>

                <nav className="hidden items-center gap-9 md:flex">
                    {links.map((l) => (
                        <a
                            key={l.href}
                            href={l.href}
                            className="text-[12px] uppercase tracking-[0.22em] text-ash transition-colors hover:text-ink"
                        >
                            {l.label}
                        </a>
                    ))}
                </nav>

                <a
                    href="#contato"
                    className="hidden items-center gap-3 text-[12px] uppercase tracking-[0.22em] text-ink md:flex"
                >
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                    Consulta reservada
                </a>

                <button
                    aria-label="Menu"
                    onClick={() => setOpen((v) => !v)}
                    className="flex h-8 w-8 flex-col items-end justify-center gap-1.5 md:hidden"
                >
                    <span className={`h-px bg-ink transition-all ${open ? "w-6 rotate-45 translate-y-0.75" : "w-6"}`} />
                    <span className={`h-px bg-ink transition-all ${open ? "w-6 -rotate-45 -translate-y-0.75" : "w-4"}`} />
                </button>
            </div>

            {open && (
                <div className="border-t border-line bg-paper md:hidden">
                    <div className="flex flex-col gap-5 px-6 py-8">
                        {links.map((l) => (
                        <a
                            key={l.href}
                            href={l.href}
                            onClick={() => setOpen(false)}
                            className="text-sm uppercase tracking-[0.25em] text-ink"
                        >
                            {l.label}
                        </a>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
}
