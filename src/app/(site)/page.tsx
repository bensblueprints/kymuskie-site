import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Fish, BedDouble, Trophy, Star, Quote, Phone } from "lucide-react";
import {
  business, stats, offerings, lodge, packages, testimonials, lakeFacts, heroImages
} from "@/lib/content";
import { TEL, TEL_HREF } from "@/lib/utils";
import Reveal from "@/components/site/Reveal";
import StatCounter from "@/components/site/StatCounter";

export default function HomePage() {
  return (
    <>
      {/* HERO — split-bedrock */}
      <section className="relative h-[100svh] min-h-[700px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={heroImages[0]}
            alt="Trophy muskie at the boat on Cave Run Lake"
            fill
            priority
            className="object-cover kenburns"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-forest-950/40 via-forest-950/30 to-forest-950/85" />
        </div>

        {/* Centered headline */}
        <div className="relative z-10 container-x h-full flex flex-col justify-center text-bone-50 pt-20">
          <Reveal>
            <span className="eyebrow text-clay-300">Wellington, Kentucky · Est. {business.established}</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="h-display text-5xl sm:text-7xl md:text-[7.5rem] mt-4 max-w-5xl">
              Trophy Muskie.
              <br />
              <span className="text-clay-300 italic font-light">Mountain Country.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-xl text-lg md:text-xl text-bone-100/90 leading-relaxed">
              Three decades guiding the largest trophy-muskie reservoir in the South.
              Crappie and multi-species trips on the side. Seven rooms attached to The Muskie Shack —
              where every cast ends with a story.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/book" className="btn-primary">
                Book a Trip <ArrowRight className="w-4 h-4" />
              </Link>
              <a href={TEL_HREF} className="btn-ghost text-bone-50 border-bone-50/40 hover:bg-bone-50 hover:text-forest-900">
                <Phone className="w-4 h-4" /> {TEL}
              </a>
            </div>
          </Reveal>
        </div>

        {/* Split-bedrock panels */}
        <div className="absolute bottom-0 inset-x-0 z-10 grid grid-cols-2 border-t border-bone-50/20">
          <Link href="/muskie" className="group bg-forest-950/85 backdrop-blur-sm hover:bg-forest-900 transition-colors p-6 md:p-10 border-r border-bone-50/20">
            <div className="flex items-center gap-3 text-clay-300 text-xs uppercase tracking-[0.3em]">
              <Fish className="w-4 h-4" /> The King of Freshwater
            </div>
            <div className="font-display text-2xl md:text-4xl text-bone-50 mt-3">Muskie →</div>
            <div className="text-bone-100/70 text-sm mt-2 hidden md:block">
              Year-round season. State-record waters.
            </div>
          </Link>
          <Link href="/crappie" className="group bg-forest-900/85 backdrop-blur-sm hover:bg-forest-800 transition-colors p-6 md:p-10">
            <div className="flex items-center gap-3 text-clay-300 text-xs uppercase tracking-[0.3em]">
              <Star className="w-4 h-4" /> When the Slabs Are Running
            </div>
            <div className="font-display text-2xl md:text-4xl text-bone-50 mt-3">Crappie →</div>
            <div className="text-bone-100/70 text-sm mt-2 hidden md:block">
              Spring brushpiles. Half-day trips. Family-friendly.
            </div>
          </Link>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-bone-50 border-b border-forest-100">
        <div className="container-x py-16 md:py-20 grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.07} className="text-center">
              <div className="text-5xl md:text-6xl font-display text-forest-700 leading-none">
                <StatCounter value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-3 text-xs uppercase tracking-[0.2em] text-forest-700/70">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TWO OFFERINGS DEEP DIVE */}
      <section className="section bg-forest-50">
        <div className="container-x">
          <Reveal>
            <span className="eyebrow">Two Waters · One Lodge</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="h-display text-4xl md:text-6xl mt-4 max-w-3xl text-forest-900">
              Whatever's biting,<br />we have a guide for it.
            </h2>
          </Reveal>
          <div className="grid lg:grid-cols-2 gap-8 mt-16">
            {offerings.map((o, i) => (
              <Reveal key={o.slug} delay={0.1 + i * 0.1}>
                <Link
                  href={`/${o.slug}`}
                  className="group block relative overflow-hidden rounded-3xl bg-bone-50 ring-1 ring-forest-100 hover:ring-clay-400 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-forest-900/10"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={o.image}
                      alt={o.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-forest-950/20 to-transparent" />
                    <div className="absolute bottom-6 left-7 right-7 text-bone-50">
                      <div className="text-xs uppercase tracking-[0.3em] text-clay-300">{o.eyebrow}</div>
                      <div className="font-display text-4xl md:text-5xl mt-1">{o.name}</div>
                    </div>
                  </div>
                  <div className="p-7">
                    <p className="text-forest-800 leading-relaxed">{o.short}</p>
                    <ul className="mt-5 space-y-1.5 text-sm text-forest-700">
                      {o.highlights.slice(0, 3).map((h) => (
                        <li key={h} className="flex items-start gap-2">
                          <span className="mt-1.5 block w-1.5 h-1.5 rounded-full bg-clay-500 shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 inline-flex items-center gap-2 text-clay-600 font-medium">
                      Explore {o.name} <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* THE LODGE */}
      <section className="section bg-bone-50">
        <div className="container-x grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="grid grid-cols-2 gap-3">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                <Image src={lodge.images[0]} alt="Lodge interior" fill className="object-cover" />
              </div>
              <div className="space-y-3 pt-12">
                <div className="relative aspect-square overflow-hidden rounded-2xl">
                  <Image src={lodge.images[1]} alt="Lodge interior" fill className="object-cover" />
                </div>
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                  <Image src={lodge.images[2]} alt="Lodge interior" fill className="object-cover" />
                </div>
              </div>
            </div>
          </Reveal>
          <div>
            <Reveal>
              <span className="eyebrow">The Lodge</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="h-display text-4xl md:text-6xl mt-3 text-forest-900">
                Mountain Muskie Lodge<br />
                <span className="font-script text-clay-500 text-3xl md:text-5xl">& the Muskie Shack</span>
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-6 text-forest-800 leading-relaxed text-lg">
                Seven modern rooms in a quiet, lake-convenient setting. Attached: The Muskie Shack —
                full Wildcat Kitchen, pool table, a wide selection of muskie lures and gear, and the two biggest
                muskies ever taken from Cave Run mounted on the wall.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8 grid grid-cols-2 gap-3 text-sm text-forest-700">
                {lodge.amenities.slice(0, 8).map((a) => (
                  <div key={a.label} className="flex items-start gap-2 py-1">
                    <span className="mt-1 block w-1.5 h-1.5 rounded-full bg-clay-500 shrink-0" />
                    {a.label}
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.25}>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link href="/lodge" className="btn-primary">See the Lodge <ArrowRight className="w-4 h-4" /></Link>
                <Link href="/packages" className="btn-ghost">Packages & Pricing</Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="section bg-forest-900 text-bone-50">
        <div className="container-x">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <span className="eyebrow text-clay-300">Packages</span>
                <h2 className="h-display text-4xl md:text-6xl mt-3 text-bone-50 max-w-2xl">
                  Pick your stay.<br />We'll do the rest.
                </h2>
              </div>
              <Link href="/packages" className="btn-ghost text-bone-50 border-bone-50/40 hover:bg-bone-50 hover:text-forest-900">
                See All Packages
              </Link>
            </div>
          </Reveal>
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {packages.slice(0, 3).map((p, i) => (
              <Reveal key={p.name} delay={i * 0.08}>
                <div className={`relative rounded-3xl p-8 h-full flex flex-col ${
                  p.featured
                    ? "bg-clay-500 text-forest-950 ring-2 ring-clay-300"
                    : "bg-forest-800 text-bone-100 ring-1 ring-bone-50/10"
                }`}>
                  {p.featured && (
                    <span className="absolute -top-3 left-8 bg-bone-50 text-clay-700 text-xs font-medium tracking-[0.2em] uppercase px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  )}
                  <div className="font-display text-2xl">{p.name}</div>
                  <div className={`mt-2 text-sm ${p.featured ? "text-forest-900/80" : "text-bone-100/70"}`}>{p.duration}</div>
                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="font-display text-6xl">${p.price}</span>
                  </div>
                  <div className={`text-sm mt-1 ${p.featured ? "text-forest-900/80" : "text-bone-100/60"}`}>{p.note}</div>
                  <p className={`mt-5 text-sm ${p.featured ? "text-forest-900/90" : "text-bone-100/80"}`}>
                    Best for: {p.bestFor}
                  </p>
                  <Link
                    href="/book"
                    className={`mt-auto pt-7 inline-flex items-center gap-2 font-medium ${
                      p.featured ? "text-forest-950 hover:gap-3" : "text-clay-300 hover:gap-3"
                    } transition-all`}
                  >
                    Book this package <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section bg-forest-50">
        <div className="container-x">
          <Reveal>
            <span className="eyebrow">From The Boat</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="h-display text-4xl md:text-6xl mt-3 text-forest-900 max-w-3xl">
              Three things our clients keep saying.
            </h2>
          </Reveal>
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <Reveal key={t.author} delay={i * 0.1}>
                <figure className="bg-bone-50 rounded-3xl p-8 ring-1 ring-forest-100 h-full flex flex-col">
                  <Quote className="w-8 h-8 text-clay-400 shrink-0" />
                  <blockquote className="mt-4 text-forest-800 leading-relaxed flex-1">"{t.quote}"</blockquote>
                  <figcaption className="mt-6 pt-6 border-t border-forest-100">
                    <span className="font-script text-clay-600 text-2xl">— {t.author}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="relative section overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/hero/fallslider-961x440.jpg" alt="" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-950/95 via-forest-950/85 to-forest-950/70" />
        </div>
        <div className="relative container-x text-bone-50">
          <Reveal>
            <h2 className="h-display text-5xl md:text-7xl max-w-4xl">
              Ready for the<br /><span className="text-clay-300 italic">fish of a lifetime?</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-bone-100/85 text-lg">
              Call Tony at {TEL} or send us a note and we'll find your dates.
              Catch and release. 8+ hours on the water. State-record water.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/book" className="btn-primary">Book a Trip</Link>
              <a href={TEL_HREF} className="btn-ghost text-bone-50 border-bone-50/40 hover:bg-bone-50 hover:text-forest-900">
                <Phone className="w-4 h-4" /> {TEL}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
