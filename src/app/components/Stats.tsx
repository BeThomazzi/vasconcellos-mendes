export default function Stats () {
    return (
        <div className="border-y border-line">
            <div className="mx-auto flex max-w-370 flex-wrap items-center justify-between gap-y-6 px-6 py-6 md:px-12">
                <Stat n="37" label="anos de banca" />
                <Stat n="9" label="sócios" />
                <Stat n="1.4k+" label="causas conduzidas" />
                <Stat n="92%" label="acordos antes do litígio" />
                <div className="hidden text-[10px] uppercase tracking-[0.3em] text-mute md:block">
                    OAB/SP · OAB/RJ · OA Portugal
                </div>
            </div>
        </div>
    )
}


function Stat({ n, label }: { n: string; label: string }) {
    return (
        <div className="flex items-baseline gap-3">
            <span className="font-serif text-3xl text-ink">{n}</span>
            <span className="text-[10px] uppercase tracking-[0.28em] text-mute">
                {label}
            </span>
        </div>
    );
}