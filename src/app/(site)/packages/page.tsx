import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import { packages } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Packages & Pricing — Cave Run Muskie Guide Service",
  description:
    "Guide trip and lodging packages on Cave Run Lake. Half day, full day, and 1–3 night options. Up to two anglers per trip.",
};

const includes = [
  "8+ hours on the water (often 10)",
  "19–21 ft Deep V boat (Ranger / Tuffy / Lund)",
  "Quality rods, reels, nets, proven lures",
  "Live bait when in season",
  "Wi-Fi, Satellite TV, full Wildcat Kitchen at the lodge",
  "Catch-and-release coaching",
];

export default function PackagesPage() {
  return (
    <>
      <section className="bg-forest-50 pt-36 pb-16">
        <div className="container-x">
          <Reveal>
            <span className="eyebrow">Packages</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="h-display text-5xl md:text-7xl mt-3 text-forest-900 max-w-3xl">
              Pick your stay.<br />We'll do the rest.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-forest-800 leading-relaxed text-lg">
              Prices are for up to two anglers. Daily rates only during special events — no weekly rates during special events.
              Free T-shirt offer on early guide-trip purchases.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section bg-bone-50">
        <div className="container-x grid lg:grid-cols-3 gap-6">
          {packages.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.06}>
              <div className={`rounded-3xl p-8 h-full flex flex-col ${
                p.featured
                  ? "bg-clay-500 text-forest-950 ring-2 ring-clay-300 shadow-xl shadow-clay-500/20"
                  : "bg-bone-50 ring-1 ring-forest-100"
              }`}>
                {p.featured && (
                  <span className="self-start mb-4 bg-bone-50 text-clay-700 text-xs font-medium tracking-[0.2em] uppercase px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <div className={`font-display text-3xl ${p.featured ? "text-forest-950" : "text-forest-900"}`}>{p.name}</div>
                <div className={`mt-2 text-sm ${p.featured ? "text-forest-900/80" : "text-forest-700"}`}>{p.duration}</div>
                <div className="mt-7 flex items-baseline gap-1">
                  <span className={`font-display text-6xl ${p.featured ? "text-forest-950" : "text-forest-900"}`}>${p.price}</span>
                </div>
                <div className={`text-sm ${p.featured ? "text-forest-900/80" : "text-forest-700"}`}>{p.note}</div>
                <p className={`mt-5 text-sm leading-relaxed ${p.featured ? "text-forest-900/90" : "text-forest-800"}`}>{p.bestFor}</p>
                <Link
                  href="/book"
                  className={`mt-auto pt-7 inline-flex items-center gap-2 font-medium ${
                    p.featured ? "text-forest-950 hover:gap-3" : "text-clay-600 hover:gap-3"
                  } transition-all`}
                >
                  Book this package <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section bg-forest-50">
        <div className="container-x grid lg:grid-cols-2 gap-12">
          <Reveal>
            <h2 className="h-display text-3xl md:text-5xl text-forest-900">Every package includes</h2>
            <ul className="mt-8 space-y-4">
              {includes.map((line) => (
                <li key={line} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-clay-600 shrink-0 mt-0.5" />
                  <span className="text-forest-800">{line}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-3xl bg-forest-900 text-bone-50 p-8">
              <div className="eyebrow text-clay-300">Cave Bucks</div>
              <h3 className="h-display text-3xl mt-2">Gift Certificates</h3>
              <p className="mt-4 text-bone-100/85 leading-relaxed">
                Cave Bucks in any amount. Good on rods, lures, clothing, guide trips, and lodging.
                Open-ended dates. Email or printable PDF available right up to the holiday.
              </p>
              <a href="tel:+16067766567" className="mt-7 btn-primary">Call to Buy a Cave Buck</a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section bg-bone-50">
        <div className="container-x">
          <Reveal>
            <h2 className="h-display text-3xl md:text-5xl text-forest-900">What to bring</h2>
          </Reveal>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {["Clothing for any season", "Rain gear", "Polarized sunglasses", "Camera", "Insect repellent", "Personal toiletries", "Snacks & beverages", "KY fishing license"].map((item) => (
              <div key={item} className="rounded-2xl bg-forest-50 p-5 ring-1 ring-forest-100">
                <span className="block w-1.5 h-1.5 rounded-full bg-clay-500" />
                <p className="mt-3 text-forest-800">{item}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-forest-700 leading-relaxed">
            You supply your own food. Cave Run has several grocery stores nearby, and you're always welcome to join us in
            the dining area at the lodge. Coolers are on the boats, but lunch and drinks are not provided.
          </p>
        </div>
      </section>
    </>
  );
}
