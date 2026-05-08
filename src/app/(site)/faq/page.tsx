"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/lib/content";
import Reveal from "@/components/site/Reveal";

export default function FAQPage() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <>
      <section className="bg-bone-50 pt-36 pb-12">
        <div className="container-x">
          <Reveal>
            <span className="eyebrow">FAQ</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="h-display text-5xl md:text-7xl mt-3 text-forest-900 max-w-3xl">
              The questions we get most.
            </h1>
          </Reveal>
        </div>
      </section>
      <section className="section bg-bone-50">
        <div className="container-x max-w-3xl">
          <div className="divide-y divide-forest-100 rounded-3xl bg-forest-50 ring-1 ring-forest-100 overflow-hidden">
            {faqs.map((f, i) => (
              <details
                key={f.q}
                open={open === i}
                onToggle={(e) => {
                  if ((e.target as HTMLDetailsElement).open) setOpen(i);
                  else if (open === i) setOpen(null);
                }}
                className="group"
              >
                <summary className="flex items-start justify-between gap-6 p-6 cursor-pointer list-none">
                  <span className="font-display text-lg md:text-xl text-forest-900">{f.q}</span>
                  <ChevronDown className="w-5 h-5 text-clay-600 transition-transform group-open:rotate-180 shrink-0 mt-1" />
                </summary>
                <div className="px-6 pb-6 -mt-2 text-forest-800 leading-relaxed">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
