import Image from "next/image";
import Reveal from "@/components/site/Reveal";
import { guides } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Guides — Cave Run Muskie Guide Service",
  description:
    "Thirteen guides — line-class records, the Kentucky state record, and PMTT champions. Plus Tim Newsome for crappie, bass, and turkey.",
};

const initials = (name: string) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

export default function GuidesPage() {
  return (
    <>
      <section className="bg-forest-900 text-bone-50 pt-36 pb-20 relative overflow-hidden">
        <div className="container-x">
          <Reveal>
            <span className="eyebrow text-clay-300">The Roster</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="h-display text-5xl md:text-7xl mt-3 max-w-3xl">
              The largest muskie
              <br />
              guide staff in North America.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-bone-100/85 text-lg leading-relaxed">
              Line-class records. The state&apos;s largest registered fish. The most
              total muskies caught in a single year. These are the elements that
              have built a guide service that keeps people returning year after
              year.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section bg-bone-50">
        <div className="container-x grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides.map((g, i) => (
            <Reveal key={g.name} delay={(i % 6) * 0.05}>
              <article className="group rounded-3xl bg-forest-50 p-7 h-full ring-1 ring-forest-100 hover:ring-clay-400 hover:bg-bone-50 transition-all duration-500 hover:-translate-y-1">
                {g.image ? (
                  <div className="relative w-20 h-20 rounded-full overflow-hidden ring-2 ring-clay-300">
                    <Image
                      src={g.image}
                      alt={g.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-20 h-20 rounded-full bg-clay-500 text-bone-50 grid place-items-center font-display text-2xl">
                    {initials(g.name)}
                  </div>
                )}
                <h3 className="font-display text-2xl text-forest-900 mt-5">
                  {g.name}
                </h3>
                <div className="text-xs uppercase tracking-[0.2em] text-clay-600 mt-1">
                  {g.role}
                </div>
                <p className="mt-4 text-forest-800 text-sm leading-relaxed">
                  {g.bio}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
