import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Trophy, Calendar, Compass } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import { offerings, lakeFacts } from "@/lib/content";
import type { Metadata } from "next";

const muskie = offerings[0];

export const metadata: Metadata = {
  title: "Muskie Fishing — Cave Run Lake, KY",
  description:
    "Year-round trophy muskie fishing on Cave Run Lake — Kentucky's mountain-country muskie water and the southernmost trophy reservoir in the U.S.",
};

export default function MuskiePage() {
  return (
    <>
      <section className="relative h-[80svh] min-h-[600px] overflow-hidden">
        <Image src="/images/hero/bigfishslider-961x440.jpg" alt="Trophy muskie at Cave Run" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-950/40 to-forest-950/85" />
        <div className="relative z-10 container-x h-full flex flex-col justify-end pb-24 text-bone-50">
          <Reveal>
            <span className="eyebrow text-clay-300">{muskie.eyebrow}</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="h-display text-6xl md:text-[8rem] mt-3 leading-none">Muskie<span className="text-clay-300">.</span></h1>
          </Reveal>
        </div>
      </section>

      <section className="section bg-bone-50">
        <div className="container-x grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 prose prose-lg max-w-none">
            <Reveal>
              <h2 className="h-display text-3xl md:text-5xl text-forest-900">
                The "King of Freshwater" — and Cave Run is its southernmost throne.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-forest-800 leading-relaxed text-lg mt-6">
                Different names in different regions — Freshwater Shark, Waterwolf, Mighty Muskellunge — but they all
                mean one thing: big, mean, and nasty. World records push 70 lbs and 63 inches.
                And nowhere south of the Mason-Dixon line produces them like Cave Run Lake.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-forest-800 leading-relaxed text-lg mt-5">
                At Cave Run Muskie Guide Service, we've put in the pre-fishing hours for you.
                Our guides are on the water more than 100 hours a week targeting the mighty musky.
                We've located that big once-in-a-lifetime fish for the veteran muskie nut and many smaller fish
                for the beginner after their first legal.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-forest-800 leading-relaxed text-lg mt-5">
                Cave Run is the largest southernmost reservoir containing native and stocked muskellunge,
                and with a year-round season the freshwater king can be captured anytime.
                Just had a run from clients and guests of The Muskie Lodge of <strong>108 muskies in 17 days.</strong>
              </p>
            </Reveal>

            <Reveal delay={0.25}>
              <h3 className="h-display text-2xl md:text-3xl mt-14 text-forest-900">The story of the state record</h3>
              <p className="text-forest-800 leading-relaxed mt-4">
                On a foggy September morning, on his first cast with a black Grim Reaper spinner,
                Tony Grant set the hook on what would become the Kentucky state record:
                a 44.75-lb muskellunge that walked out of the water twice on the hookset.
                A few years later, his step-daughter-of-a-client Sara Terry — guided by Cave Run's own Scott Salchli —
                broke that record with a 54-inch, 47-pound giant. Both fish came from the same lake. Both stories happened on our water.
              </p>
            </Reveal>
          </div>

          <aside className="space-y-6">
            <Reveal>
              <div className="rounded-3xl bg-forest-900 text-bone-50 p-7">
                <Trophy className="w-8 h-8 text-clay-300" />
                <div className="font-display text-3xl mt-4">54" / 47 lb</div>
                <div className="text-bone-100/80 mt-1 text-sm">Current Kentucky State Record — guided by Scott Salchli</div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-3xl bg-clay-100 p-7 ring-1 ring-clay-200">
                <Calendar className="w-8 h-8 text-clay-700" />
                <div className="font-display text-3xl mt-4 text-forest-900">Year-Round</div>
                <div className="text-forest-800 mt-1 text-sm">No closed season. Winter pre-spawn fish are at peak weight.</div>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="rounded-3xl bg-forest-50 p-7 ring-1 ring-forest-100">
                <Compass className="w-8 h-8 text-forest-700" />
                <div className="font-display text-3xl mt-4 text-forest-900">{lakeFacts.size.toLocaleString()} acres</div>
                <div className="text-forest-800 mt-1 text-sm">8,300 acres of standing-timber muskie water in the Daniel Boone National Forest.</div>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="space-y-3">
                {muskie.highlights.map((h) => (
                  <div key={h} className="flex items-start gap-2 text-forest-800">
                    <span className="mt-2 block w-1.5 h-1.5 rounded-full bg-clay-500 shrink-0" />
                    {h}
                  </div>
                ))}
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      <section className="section bg-forest-900 text-bone-50">
        <div className="container-x text-center">
          <Reveal>
            <span className="eyebrow text-clay-300">Ready?</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="h-display text-4xl md:text-6xl mt-3">Eight hours on muskie water,<br />and a steak afterwards.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="/packages" className="btn-primary">See Packages <ArrowRight className="w-4 h-4" /></Link>
              <Link href="/book" className="btn-ghost text-bone-50 border-bone-50/40 hover:bg-bone-50 hover:text-forest-900">Book a Trip</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
