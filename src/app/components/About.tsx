import about from "@/public/assets/about.jpg";
import detail from "@/public/assets/detail-1.jpg";
import Image from "next/image";

export function About() {
  return (
    <section id="sobre" className="bg-paper py-10 md:py-18">
      <div className="mx-auto max-w-370 px-6 md:px-12">
        <div className="eyebrow rule-gold mb-16">§ 01 — O Escritório</div>

        <div className="grid grid-cols-12 gap-x-6 gap-y-12">
          <div className="col-span-12 md:col-span-5">
            <div className="sticky top-32">
              <div className="relative aspect-4/5 overflow-hidden">
                <Image
                  src={about}
                  alt="Sala de reunião"
                  className="h-full w-full object-cover"
                  loading="eager"
                />
              </div>
              <p className="mt-4 text-xs uppercase tracking-[0.3em] text-mute">
                Avenida Brigadeiro Faria Lima, 21º andar
              </p>
            </div>
          </div>

          <div className="col-span-12 md:col-span-7 md:pl-12">
            <p className="font-serif text-[28px] leading-tight text-ink md:text-[40px]">
              Fundado em 1987 por{" "}
              <em className="italic text-gold/90">Antonio Vasconcellos</em>, o
              escritório nasceu de uma convicção simples: que cada cliente
              merece a atenção integral de quem o representa — e que pressa
              raramente convém ao direito.
            </p>

            <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2">
              <Block
                title="Filosofia"
                body="Estudamos antes de aconselhar. Recusamos casos que não acreditamos poder honrar. A relação que mantemos com cada cliente é, antes de tudo, fiduciária."
              />
              <Block
                title="Discrição"
                body="Não publicamos clientes, não comemoramos vitórias em redes sociais, não negociamos honra. O sigilo é a primeira regra do ofício."
              />
              <Block
                title="Continuidade"
                body="Três gerações de uma mesma banca. Atendemos hoje filhos e netos das famílias que confiaram em nós nos anos 1990."
              />
              <Block
                title="Método"
                body="Cada causa recebe um sócio responsável. Não há equipes anônimas, não há terceirização: quem assina, conduz."
              />
            </div>

            <figure className="mt-20 border-l border-gold/60 pl-8">
              <blockquote className="font-serif text-2xl italic leading-snug text-ink md:text-3xl">
                “A pressa do cliente nunca pode contaminar a paciência do
                advogado. Defender é uma forma de leitura: lenta, repetida,
                obstinada.”
              </blockquote>
              <figcaption className="mt-4 text-xs uppercase tracking-[0.28em] text-mute">
                Antonio Vasconcellos — sócio fundador
              </figcaption>
            </figure>

            <div className="mt-20 grid grid-cols-2 items-center gap-10">
              <div className="relative aspect-4/5 overflow-hidden">
                <Image
                  src={detail}
                  alt="Biblioteca jurídica"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <p className="text-sm leading-relaxed text-ash">
                Mantemos uma biblioteca de mais de 12 mil volumes — comentários,
                periódicos, jurisprudência histórica. Em uma profissão saturada
                de atalhos, ainda acreditamos no peso da leitura.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Block({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <h3 className="eyebrow mb-3 text-ink">{title}</h3>
      <p className="text-[15px] leading-relaxed text-ash">{body}</p>
    </div>
  );
}
