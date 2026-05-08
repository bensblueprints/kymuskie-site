import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/site/Reveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — Cave Run Muskie Guide Service",
  description:
    "Cave Run Muskie Guide Service & The Muskie Lodge — trophy muskie fishing and lodging at one of America's top-10 muskie lakes.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-bone-50 pt-36 pb-12">
        <div className="container-x">
          <Reveal>
            <span className="eyebrow">About</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="h-display text-5xl md:text-7xl mt-3 text-forest-900 max-w-3xl">
              Trophy fishing<br />& lodging on Cave Run.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="section bg-bone-50">
        <div className="container-x grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-6 text-forest-800 leading-relaxed text-lg">
            <Reveal>
              <h2 className="h-display text-2xl md:text-4xl text-forest-900">What you can expect</h2>
              <p className="mt-4">
                Our guide staff is made up of dedicated professionals working together, combining their knowledge and experience
                to give our customers exceptional quality every day on the water. From lodging to tackle, Kentucky Mountain Muskies
                will do everything we can to give you a lifetime of memories.
              </p>
              <p className="mt-4">
                When you book a trip with Cave Run Muskie Guide Service you can expect complete satisfaction. From the moment
                you contact the guide service we will make your vacation as enjoyable as possible. Our guide service has created
                one of the most impressive, professional muskie staffs in the world today.
              </p>
              <p className="mt-4">
                Our guide service has built a reputation that keeps people returning year after year. Line class records, the state's largest registered fish, and the most total fish caught in a single year.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="h-display text-2xl md:text-4xl text-forest-900 mt-12">Starting the day</h2>
              <p className="mt-4">
                As the sun rises you should be preparing for one of the most educational, fact-filled, and fun fishing adventures
                you have ever been introduced to. Pack a simple lunch, snacks, and drinks. Coolers on the boats, but no lunch
                provided. Rain gear and polarized sunglasses make your day more enjoyable and productive. End the day any time
                you wish, but we offer a full 8 hours on the water — sometimes more.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <h2 className="h-display text-2xl md:text-4xl text-forest-900 mt-12">Cave Run, briefly</h2>
              <p className="mt-4">
                Cave Run Lake in eastern Kentucky has long been known as the musky capital of the South. The lake is ranked
                as one of the top ten musky fishing locations by <em>In-Fisherman</em> and <em>Field & Stream</em> magazines.
                We are the one-stop-shop for musky fishing eastern Kentucky — come fish with one of the largest musky guide
                services in North America.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <aside className="space-y-3 sticky top-32">
              <div className="relative aspect-[3/4] overflow-hidden rounded-3xl">
                <Image src="/images/hero/marchslider-964x441.jpg" alt="Tony Grant on Cave Run" fill className="object-cover" />
              </div>
              <div className="rounded-3xl bg-clay-100 p-6 ring-1 ring-clay-200">
                <div className="font-script text-3xl text-clay-700 leading-none">Tony Grant</div>
                <div className="mt-2 text-sm text-forest-800">Owner, head guide, lure maker, lodge keeper. Holder of one previous KY state-record muskie. Father of the next one too, in a way.</div>

              </div>
            </aside>
          </Reveal>
        </div>
      </section>
    </>
  );
}
