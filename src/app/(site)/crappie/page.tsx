import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Fish, Sun, Users } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import { offerings, guides } from "@/lib/content";
import type { Metadata } from "next";

const crappie = offerings[1];
const tim = guides.find((g) => g.name === "Tim Newsome")!;

export const metadata: Metadata = {
  title: "Crappie & Multi-Species Fishing — Cave Run Lake, KY",
  description:
    "Crappie, bass, white bass, and turkey hunts with Tim Newsome — one of the Cave Run area's top multi-species anglers.",
};

export default function CrappiePage() {
  return (
    <>
      <section className="relative h-[80svh] min-h-[600px] overflow-hidden">
        <Image src="/images/hero/kidcatchslider-961x440.jpg" alt="Family fishing on Cave Run" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-950/40 to-forest-950/85" />
        <div className="relative z-10 container-x h-full flex flex-col justify-end pb-24 text-bone-50">
          <Reveal>
            <span className="eyebrow text-clay-300">{crappie.eyebrow}</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="h-display text-6xl md:text-[8rem] mt-3 leading-none">Crappie<span className="text-clay-300">.</span></h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-4 max-w-xl text-bone-100/90 text-lg">
              When the muskie are sleeping, the crappie are biting.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section bg-bone-50">
        <div className="container-x grid lg:grid-cols-2 gap-16 items-start">
          <Reveal>
            <h2 className="h-display text-3xl md:text-5xl text-forest-900">
              Cave Run isn't just a muskie lake.
            </h2>
            <p className="mt-6 text-forest-800 leading-relaxed text-lg">
              Spring crappie work the brushpiles in pre-spawn. Summer white bass slam topwaters at first light.
              Largemouth bass hold tight to the standing timber that makes Cave Run special. And in spring,
              the same forest that surrounds the lake is full of turkeys.
            </p>
            <p className="mt-5 text-forest-800 leading-relaxed text-lg">
              Whether you're a family looking for a half-day on easier fish, a first-time angler who wants
              to go home with a cooler, or a hunter looking for a Cave Run gobbler — we have a guide for that.
            </p>
            <div className="mt-10 grid sm:grid-cols-3 gap-4">
              <div className="rounded-2xl bg-clay-100 p-5">
                <Fish className="w-6 h-6 text-clay-700" />
                <div className="font-display text-lg text-forest-900 mt-3">Crappie</div>
                <div className="text-sm text-forest-700 mt-1">Pre-spawn brushpile bite, Mar–May</div>
              </div>
              <div className="rounded-2xl bg-clay-100 p-5">
                <Sun className="w-6 h-6 text-clay-700" />
                <div className="font-display text-lg text-forest-900 mt-3">White Bass</div>
                <div className="text-sm text-forest-700 mt-1">Summer topwater frenzy</div>
              </div>
              <div className="rounded-2xl bg-clay-100 p-5">
                <Users className="w-6 h-6 text-clay-700" />
                <div className="font-display text-lg text-forest-900 mt-3">Family Trips</div>
                <div className="text-sm text-forest-700 mt-1">Half-day, easy fishing, more bites</div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="rounded-3xl overflow-hidden bg-forest-900 text-bone-50 p-1">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                <Image
                  src="/images/hero/springslider-961x440.jpg"
                  alt="Tim Newsome — multi-species guide"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-7">
                <div className="eyebrow text-clay-300">Your Guide</div>
                <div className="font-display text-3xl mt-2">{tim.name}</div>
                <div className="text-sm text-clay-300 mt-1">{tim.role}</div>
                <p className="mt-5 text-bone-100/85 leading-relaxed">{tim.bio}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section bg-forest-50">
        <div className="container-x">
          <Reveal>
            <h2 className="h-display text-3xl md:text-5xl text-forest-900 max-w-3xl">What's included with a multi-species trip</h2>
          </Reveal>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {crappie.highlights.map((h, i) => (
              <Reveal key={h} delay={i * 0.06}>
                <div className="rounded-2xl bg-bone-50 ring-1 ring-forest-100 p-6 h-full">
                  <span className="block w-2 h-2 rounded-full bg-clay-500" />
                  <p className="mt-4 text-forest-800 font-medium">{h}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-forest-900 text-bone-50">
        <div className="container-x text-center">
          <Reveal>
            <h2 className="h-display text-4xl md:text-6xl">Same lodge.<br />Same packages. Easier fish.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="/packages" className="btn-primary">See Packages <ArrowRight className="w-4 h-4" /></Link>
              <Link href="/book" className="btn-ghost text-bone-50 border-bone-50/40 hover:bg-bone-50 hover:text-forest-900">Book a Crappie Trip</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
