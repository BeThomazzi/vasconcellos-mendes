import t1 from "@/public/assets/team-1.jpg";
import t2 from "@/public/assets/team-2.jpg";
import t3 from "@/public/assets/team-3.jpg";
import Image from "next/image";

const team = [
  {
    img: t1,
    name: "Antonio Vasconcellos",
    role: "Sócio fundador",
    area: "Empresarial · Sucessório",
    line: "USP · LL.M. Universidade de Coimbra",
  },
  {
    img: t2,
    name: "Helena Mendes",
    role: "Sócia diretora",
    area: "Tributário · Contencioso estratégico",
    line: "FGV · Mestrado em Direito Tributário",
  },
  {
    img: t3,
    name: "Rafael Vasconcellos",
    role: "Sócio sênior",
    area: "Trabalhista · M&A",
    line: "PUC-SP · Especialização em Harvard",
  },
];

export function Equipe() {
  return (
    <section id="equipe" className="bg-bone py-10 md:py-18">
      <div className="mx-auto max-w-370 px-6 md:px-12">
        <div className="grid grid-cols-12 items-end gap-x-6">
          <div className="col-span-12 md:col-span-6">
            <div className="eyebrow rule-gold">§ 04 — Os sócios</div>
            <h2 className="mt-6 font-serif text-4xl leading-tight md:text-6xl">
              Quem assina, <br />
              <em className="italic text-gold/90">conduz.</em>
            </h2>
          </div>
          <p className="col-span-12 max-w-md text-[14px] leading-relaxed text-ash md:col-span-5 md:col-start-8">
            Três sócios. Uma única banca. Nenhum caso é entregue a equipes
            anônimas — cada cliente conhece, pelo nome, o advogado que responde
            por sua causa.
          </p>
        </div>

        <ul className="mt-20 divide-y divide-line border-y border-line">
          {team.map((m, i) => (
            <li
              key={m.name}
              className="group grid grid-cols-12 items-center gap-x-6 p-8 transition-colors hover:bg-paper"
            >
              <div className="col-span-2 md:col-span-1">
                <span className="font-serif text-4xl text-mute">0{i + 1}</span>
              </div>
              <div className="col-span-3 md:col-span-2">
                <div className="relative aspect-square w-full overflow-hidden bg-ash/10">
                  <Image
                    src={m.img}
                    alt={m.name}
                    loading="lazy"
                    className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-[1.04]"
                  />
                </div>
              </div>
              <div className="col-span-7 md:col-span-5 md:pl-6">
                <h3 className="font-serif text-2xl text-ink md:text-3xl">
                  {m.name}
                </h3>
                <p className="mt-1 text-[12px] uppercase tracking-[0.25em] text-mute">
                  {m.role}
                </p>
              </div>
              <div className="col-span-12 mt-6 md:col-span-4 md:mt-0 md:text-right">
                <p className="text-md text-ash">{m.area}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.22em] text-mute">
                  {m.line}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
