import { MapPin, Phone, Mail } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import ContactForm from "@/components/site/ContactForm";
import { TEL, TEL_HREF, EMAIL, ADDRESS } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Cave Run Muskie Guide Service",
  description: "Call Tony at (606) 776-6567 or send a message and we'll find your dates.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-bone-50 pt-36 pb-12">
        <div className="container-x">
          <Reveal>
            <span className="eyebrow">Get In Touch</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="h-display text-5xl md:text-7xl mt-3 text-forest-900 max-w-3xl">
              Tell us when you want to fish.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="section bg-bone-50">
        <div className="container-x grid lg:grid-cols-3 gap-12">
          <Reveal>
            <div className="space-y-6">
              <div className="rounded-3xl bg-forest-50 p-7 ring-1 ring-forest-100">
                <Phone className="w-6 h-6 text-clay-600" />
                <div className="font-display text-2xl text-forest-900 mt-3">By Phone</div>
                <a href={TEL_HREF} className="block mt-2 text-clay-700 font-medium">{TEL}</a>
              </div>
              <div className="rounded-3xl bg-forest-50 p-7 ring-1 ring-forest-100">
                <Mail className="w-6 h-6 text-clay-600" />
                <div className="font-display text-2xl text-forest-900 mt-3">By Email</div>
                <a href={`mailto:${EMAIL}`} className="block mt-2 text-clay-700 font-medium break-all">{EMAIL}</a>
              </div>
              <div className="rounded-3xl bg-forest-50 p-7 ring-1 ring-forest-100">
                <MapPin className="w-6 h-6 text-clay-600" />
                <div className="font-display text-2xl text-forest-900 mt-3">In Person</div>
                <div className="mt-2 text-forest-800">{ADDRESS}</div>
                <div className="mt-1 text-sm text-forest-700">Two miles east of Long Bow Marina on KY Route 1274.</div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-2">
            <div className="rounded-3xl bg-bone-50 ring-1 ring-forest-100 p-8 md:p-10">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-forest-50">
        <div className="container-x py-10">
          <div className="rounded-3xl overflow-hidden aspect-[16/7]">
            <iframe
              title="Map"
              src="https://www.google.com/maps?q=10752+Highway+1274+Wellington+KY+40387&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
