import Image from "next/image";
import Reveal from "@/components/site/Reveal";
import fs from "fs";
import path from "path";

export const metadata = {
  title: "Gallery — Cave Run Muskie Guide Service",
  description: "Trophy fish, lodge moments, and Cave Run scenes from our clients.",
};

function listImages(folder: string) {
  const dir = path.join(process.cwd(), "public", "images", folder);
  try {
    return fs
      .readdirSync(dir)
      .filter((f) => /\.(jpe?g|png|gif|webp)$/i.test(f))
      .filter((f) => !f.toLowerCase().startsWith("thumbs_"))
      .map((f) => `/images/${folder}/${f}`);
  } catch {
    return [];
  }
}

export default function GalleryPage() {
  const trophies = listImages("trophies");
  const recent = listImages("gallery");
  const all = [...trophies, ...recent];

  return (
    <>
      <section className="bg-bone-50 pt-36 pb-12">
        <div className="container-x">
          <Reveal>
            <span className="eyebrow">Gallery</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="h-display text-5xl md:text-7xl mt-3 text-forest-900 max-w-3xl">
              Decades of Cave Run<br />in one place.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-forest-800 leading-relaxed text-lg">
              Trophy muskies, monsters of the past, lodge moments, and clients' first fish. Real photos, real fish, real days on Cave Run.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section bg-bone-50">
        <div className="container-x">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {all.slice(0, 80).map((src, i) => (
              <div key={src} className="group relative aspect-square overflow-hidden rounded-xl ring-1 ring-forest-100 bg-forest-50">
                <Image
                  src={src}
                  alt={`Cave Run gallery photo ${i + 1}`}
                  fill
                  sizes="(min-width:1024px) 25vw, (min-width:640px) 33vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
