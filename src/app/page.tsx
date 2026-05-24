import { Nav } from "@/app/components/Nav";
import { Hero } from "@/app/components/Hero";
import { About } from "@/app/components/About";
import { Areas } from "@/app/components/Areas";
import { Diferenciais } from "@/app/components/Diferenciais";
import { Equipe } from "@/app/components/Equipe";
import { Processo } from "@/app/components/Processo";
import { Jornal } from "@/app/components/Jornal";
import { CTA } from "@/app/components/CTA";
import { Footer } from "@/app/components/Footer";
import Stats from "./components/Stats";

export default function Home() {
  return (
    <main className="bg-paper text-ink">
      <Nav />
      <Hero />
      <Stats />
      <About />
      <Areas />
      <Diferenciais />
      <Equipe />
      <Processo />
      <Jornal />
      <CTA />
      <Footer />
    </main>
  );
}
