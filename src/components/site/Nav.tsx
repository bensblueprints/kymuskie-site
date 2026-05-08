"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { TEL, TEL_HREF } from "@/lib/utils";

const links = [
  { href: "/muskie", label: "Muskie" },
  { href: "/crappie", label: "Crappie" },
  { href: "/lodge", label: "The Lodge" },
  { href: "/packages", label: "Packages" },
  { href: "/our-guides", label: "Guides" },
  { href: "/cave-run-lake", label: "The Lake" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bone-50/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between h-20">
        <Link href="/" className="flex items-center gap-3">
          <span className="font-script text-3xl text-clay-600 leading-none">Cave Run</span>
          <span className={`hidden sm:block font-display text-sm uppercase tracking-[0.3em] ${scrolled ? "text-forest-700" : "text-bone-50 drop-shadow"}`}>
            Muskie · Lodge
          </span>
        </Link>
        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className={`nav-link ${scrolled ? "" : "text-bone-50/90 hover:text-bone-50"}`}>
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-3">
          <a href={TEL_HREF} className={`text-sm font-medium tracking-wide ${scrolled ? "text-forest-800" : "text-bone-50"}`}>
            <Phone className="inline w-4 h-4 mr-1" /> {TEL}
          </a>
          <Link href="/book" className="btn-primary text-sm py-2.5 px-5">Book a Trip</Link>
        </div>
        <button
          aria-label="Toggle menu"
          className={`lg:hidden p-2 ${scrolled ? "text-forest-900" : "text-bone-50"}`}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-bone-50 border-t border-forest-100 animate-fade-in">
          <div className="container-x py-6 flex flex-col gap-1">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="py-3 text-forest-900 border-b border-forest-100" onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            ))}
            <a href={TEL_HREF} className="mt-4 text-clay-600 font-medium">
              <Phone className="inline w-4 h-4 mr-1" /> {TEL}
            </a>
            <Link href="/book" className="btn-primary w-full justify-center mt-3" onClick={() => setOpen(false)}>
              Book a Trip
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
