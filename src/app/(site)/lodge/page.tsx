import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import { lodge } from "@/lib/content";
import { TEL, TEL_HREF } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mountain Muskie Lodge — Cave Run Lake, KY",
  description:
    "Seven modern rooms attached to The Muskie Shack — full kitchen, pool table, gear shop, mounts of the two biggest Cave Run muskies, and UK Wildcat memorabilia from the 1950s.",
};

export default function LodgePage() {
  return (
    <>
      <section className="relative h-[80svh] min-h-[600px] overflow-hidden">
        <Image src={lodge.images[0]} alt="Mountain Muskie Lodge" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-950/40 to-forest-950/85" />
        <div className="relative z-10 container-x h-full flex flex-col justify-end pb-24 text-bone-50">
          <Reveal>
            <span className="eyebrow text-clay-300">The Lodge</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="h-display text-6xl md:text-[7.5rem] mt-3 leading-none">Mountain<br /><span className="font-script text-clay-300 text-5xl md:text-8xl">Muskie Lodge</span></h1>
          </Reveal>
        </div>
      </section>

      <section className="section bg-bone-50">
        <div className="container-x grid lg:grid-cols-2 gap-16 items-start">
          <Reveal>
            <span className="eyebrow">7 Rooms · Wi-Fi · Wildcat Kitchen</span>
            <h2 className="h-display text-3xl md:text-5xl text-forest-900 mt-4">
              Quiet, lake-convenient, and full of stories.
            </h2>
            <p className="mt-6 text-forest-800 leading-relaxed text-lg">{lodge.description}</p>
            <p className="mt-5 text-forest-800 leading-relaxed text-lg">
              <strong>Where:</strong> 10752 Highway 1274, Wellington KY 40387 — two miles east of Long Bow Marina on KY Route 1274.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-3">
              {lodge.amenities.map((a) => (
                <div key={a.label} className="flex items-start gap-2 text-sm text-forest-800 py-1">
                  <span className="mt-1.5 block w-1.5 h-1.5 rounded-full bg-clay-500 shrink-0" />
                  {a.label}
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-2xl bg-clay-100 p-6 ring-1 ring-clay-200">
              <div className="eyebrow text-clay-700">Welcomes</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {lodge.welcomes.map((w) => (
                  <span key={w} className="text-sm bg-bone-50 text-forest-800 px-3 py-1.5 rounded-full ring-1 ring-clay-200">
                    {w}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="grid grid-cols-2 gap-3">
              {lodge.images.slice(0, 6).map((src, i) => (
                <div key={src} className={`relative overflow-hidden rounded-2xl ${i === 0 ? "col-span-2 aspect-[16/9]" : "aspect-square"}`}>
                  <Image src={src} alt="Lodge" fill className="object-cover hover:scale-105 transition-transform duration-700" />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* The Muskie Shack callout */}
      <section className="section bg-forest-900 text-bone-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image src="/images/hero/dwightslider-964x441.jpg" alt="" fill className="object-cover" />
        </div>
        <div className="container-x relative grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <span className="eyebrow text-clay-300">Attached to the Lodge</span>
            <h2 className="h-display text-4xl md:text-6xl mt-3">{lodge.shack}</h2>
            <p className="mt-6 text-bone-100/85 text-lg leading-relaxed">
              A place where guests hang out, meet anglers from all over the muskie world, and trade lies about the day's fish.
              Two of the biggest muskies ever taken from Cave Run live mounted on these walls. So does Sara Terry's
              state-record fish, caught while fishing with our guide Scott Salchli. Plus University of Kentucky Wildcat
              memorabilia dating to the 1950s.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="space-y-4">
              <div className="rounded-2xl bg-bone-50/10 backdrop-blur p-5 ring-1 ring-bone-50/15">
                <div className="font-display text-2xl">Wildcat Kitchen</div>
                <div className="text-bone-100/80 text-sm mt-1">Stoves, ovens, crock pots, roasters, an outdoor grill — cook anything.</div>
              </div>
              <div className="rounded-2xl bg-bone-50/10 backdrop-blur p-5 ring-1 ring-bone-50/15">
                <div className="font-display text-2xl">Wildcat Room</div>
                <div className="text-bone-100/80 text-sm mt-1">Big-screen TV, pool table, dining room — the gathering spot.</div>
              </div>
              <div className="rounded-2xl bg-bone-50/10 backdrop-blur p-5 ring-1 ring-bone-50/15">
                <div className="font-display text-2xl">Pro Shop</div>
                <div className="text-bone-100/80 text-sm mt-1">Muskie lures and gear, Cave Gear T-shirts, hats, hoodies.</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-bone-50">
        <div className="container-x grid md:grid-cols-3 gap-6 items-center">
          <Reveal className="md:col-span-2">
            <h2 className="h-display text-3xl md:text-5xl text-forest-900">Stay in the Lodge.<br />Wake up on the lake.</h2>
            <div className="mt-4 flex items-center gap-3 text-forest-700">
              <MapPin className="w-4 h-4" /> <span>10752 Highway 1274, Wellington KY 40387</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Link href="/packages" className="btn-primary">See Packages <ArrowRight className="w-4 h-4" /></Link>
              <a href={TEL_HREF} className="btn-ghost"><Phone className="w-4 h-4" /> {TEL}</a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
