import Link from "next/link";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";
import { TEL, TEL_HREF, EMAIL, ADDRESS } from "@/lib/utils";

export default function Footer() {
  return (
    <footer className="bg-forest-950 text-bone-100 mt-32">
      <div className="container-x py-20 grid lg:grid-cols-4 gap-12">
        <div>
          <div className="font-script text-4xl text-clay-300 leading-none">Cave Run</div>
          <div className="font-display tracking-[0.3em] uppercase text-xs mt-1 text-bone-200/80">
            Muskie · Lodge
          </div>
          <p className="mt-6 text-sm text-bone-200/80 leading-relaxed">
            Trophy muskie and crappie fishing on Cave Run Lake — Kentucky's mountain-country muskie water.
          </p>
        </div>
        <div>
          <div className="eyebrow text-clay-300">Visit</div>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 shrink-0" /> {ADDRESS}</li>
            <li className="flex items-start gap-2"><Phone className="w-4 h-4 mt-0.5 shrink-0" /> <a href={TEL_HREF} className="hover:text-clay-300">{TEL}</a></li>
            <li className="flex items-start gap-2"><Mail className="w-4 h-4 mt-0.5 shrink-0" /> <a href={`mailto:${EMAIL}`} className="hover:text-clay-300 break-all">{EMAIL}</a></li>
          </ul>
        </div>
        <div>
          <div className="eyebrow text-clay-300">Explore</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/muskie" className="hover:text-clay-300">Muskie Fishing</Link></li>
            <li><Link href="/crappie" className="hover:text-clay-300">Crappie & Multi-Species</Link></li>
            <li><Link href="/lodge" className="hover:text-clay-300">The Lodge</Link></li>
            <li><Link href="/packages" className="hover:text-clay-300">Packages & Pricing</Link></li>
            <li><Link href="/gallery" className="hover:text-clay-300">Gallery</Link></li>
            <li><Link href="/cave-run-lake" className="hover:text-clay-300">Cave Run Lake</Link></li>
            <li><Link href="/faq" className="hover:text-clay-300">FAQ</Link></li>
          </ul>
        </div>
        <div>
          <div className="eyebrow text-clay-300">Follow</div>
          <div className="mt-4 flex gap-3">
            <a href="#" aria-label="Facebook" className="w-10 h-10 grid place-items-center rounded-full border border-bone-200/20 hover:border-clay-300 hover:text-clay-300"><Facebook className="w-4 h-4" /></a>
            <a href="#" aria-label="Instagram" className="w-10 h-10 grid place-items-center rounded-full border border-bone-200/20 hover:border-clay-300 hover:text-clay-300"><Instagram className="w-4 h-4" /></a>
            <a href="#" aria-label="Twitter" className="w-10 h-10 grid place-items-center rounded-full border border-bone-200/20 hover:border-clay-300 hover:text-clay-300"><Twitter className="w-4 h-4" /></a>
          </div>
          <Link href="/book" className="mt-6 inline-block btn-primary text-sm">Book a Trip</Link>
        </div>
      </div>
      <div className="border-t border-bone-200/10">
        <div className="container-x py-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-bone-200/60">
          <span>© {new Date().getFullYear()} Cave Run Muskie Guide Service & The Muskie Lodge.</span>
          <span>Wellington, Kentucky · Daniel Boone National Forest</span>
        </div>
      </div>
    </footer>
  );
}
