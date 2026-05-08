import ContactForm from "@/components/site/ContactForm";
import Reveal from "@/components/site/Reveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Trip — Cave Run Muskie Guide Service",
  description: "Reserve guided fishing and lodging on Cave Run Lake.",
};

export default function BookPage() {
  return (
    <>
      <section className="bg-forest-900 text-bone-50 pt-36 pb-16">
        <div className="container-x">
          <Reveal>
            <span className="eyebrow text-clay-300">Book Your Trip</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="h-display text-5xl md:text-7xl mt-3 max-w-3xl">
              Tell us your dates.<br />We'll match you to a guide.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-bone-100/85 text-lg">
              Tony reads every request himself. Most replies go out within 24 hours. For a same-day answer, give us a call at (606) 776-6567.
            </p>
          </Reveal>
        </div>
      </section>
      <section className="section bg-bone-50">
        <div className="container-x max-w-3xl">
          <Reveal>
            <div className="rounded-3xl bg-bone-50 ring-1 ring-forest-100 p-8 md:p-10">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
