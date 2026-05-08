import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/site/Reveal";
import { lakeFacts } from "@/lib/content";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Cave Run Lake — Kentucky's Mountain Muskie Water",
  description: "8,300 acres in the Daniel Boone National Forest, 50 miles east of Lexington. Year-round muskie fishing, top-10 ranked.",
};

const stats = [
  { v: lakeFacts.size.toLocaleString(), l: "Acres" },
  { v: "Top 10", l: "Muskie Lake — In-Fisherman & Field & Stream" },
  { v: "Year-Round", l: "No Closed Season" },
  { v: "50 mi", l: "East of Lexington, KY" },
];

const things = [
  { t: "Red River Gorge", d: "50+ rock formations, 20 minutes from Long Bow Marina." },
  { t: "Natural Bridge State Resort Park", d: "1,500-ft peak with sky-lift, snake pit, and the iconic stone bridge." },
  { t: "Daniel Boone National Forest", d: "Hiking trails, scenic views, abundant wildlife, mostly undeveloped shoreline." },
  { t: "Minor E. Clark Fish Hatchery", d: "Largest freshwater hatchery in the southeast — 200+ bird species observed nearby." },
  { t: "Cave Run Rock-N-Blues-N-BBQ Festival", d: "Annual music and food festival on the lake." },
  { t: "Preston Court Day", d: "Three-day trade festival ending the 3rd Monday in October — over a century old." },
];

export default function CaveRunPage() {
  return (
    <>
      <section className="relative h-[80svh] min-h-[600px] overflow-hidden">
        <Image src="/images/hero/prettyslider-961x440.jpg" alt="Cave Run Lake at dawn" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-950/40 to-forest-950/85" />
        <div className="relative z-10 container-x h-full flex flex-col justify-end pb-24 text-bone-50">
          <Reveal>
            <span className="eyebrow text-clay-300">The Water</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="h-display text-6xl md:text-[7.5rem] mt-3 leading-none">Cave Run Lake</h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-4 max-w-2xl text-bone-100/90 text-lg">
              The southernmost trophy-muskie reservoir in the U.S. — 8,300 acres of standing-timber water in the Daniel Boone National Forest.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section bg-bone-50">
        <div className="container-x grid lg:grid-cols-2 gap-16 items-start">
          <Reveal>
            <h2 className="h-display text-3xl md:text-5xl text-forest-900">A Canadian-shield lake — in Kentucky.</h2>
            <p className="mt-6 text-forest-800 leading-relaxed text-lg">
              Cave Run Lake was formed by the damming of the Licking River, a natural muskie habitat.
              Nestled in eastern Kentucky's mountainous area, this is one of the few bodies of water in the U.S.
              that has an undeveloped shoreline — surrounded by pines and rock, the lake has the appeal of a Canadian-shield lake.
            </p>
            <p className="mt-5 text-forest-800 leading-relaxed text-lg">
              The construction of the reservoir left most of the timber standing. This underwater forest has
              one of the nation's leading stocking programs and the perfect environment for muskies to grow.
              These ingredients have jolted Cave Run Lake into the list of top-ten muskie lakes by
              <em> In-Fisherman</em> and <em>Field & Stream</em> magazines.
            </p>
            <p className="mt-5 text-forest-800 leading-relaxed text-lg">
              Spring, summer, and fall produce the obvious bite. But Cave Run rarely freezes and ice never overtakes the entire body of water.
              By late January and February, muskies are at their premium weight, building egg mass for early-spring release.
              <strong> EXTEND YOUR MUSKIE SEASON.</strong> Don't stop muskie hunting because of ice or regulations — go south to cure the cabin fever.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="grid grid-cols-2 gap-3">
              {stats.map((s) => (
                <div key={s.l} className="rounded-3xl bg-forest-50 p-7 ring-1 ring-forest-100">
                  <div className="font-display text-4xl text-forest-700">{s.v}</div>
                  <div className="mt-2 text-xs uppercase tracking-[0.2em] text-forest-700/70">{s.l}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image src="/images/maps/areamap1.gif" alt="Cave Run Lake area map" fill className="object-contain bg-bone-100" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section bg-forest-50">
        <div className="container-x">
          <Reveal>
            <span className="eyebrow">Off The Water</span>
            <h2 className="h-display text-3xl md:text-5xl mt-3 text-forest-900 max-w-3xl">Things to do nearby</h2>
          </Reveal>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {things.map((t, i) => (
              <Reveal key={t.t} delay={(i % 3) * 0.05}>
                <div className="rounded-3xl bg-bone-50 p-7 ring-1 ring-forest-100 h-full">
                  <div className="font-display text-2xl text-forest-900">{t.t}</div>
                  <p className="mt-3 text-forest-700 leading-relaxed">{t.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-forest-900 text-bone-50">
        <div className="container-x text-center">
          <Reveal>
            <h2 className="h-display text-4xl md:text-6xl">Come for the muskie.<br />Stay for the mountains.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link href="/book" className="mt-10 inline-flex btn-primary">Book Your Trip <ArrowRight className="w-4 h-4" /></Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
