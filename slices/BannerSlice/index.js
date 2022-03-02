import { PrismicLink, PrismicRichText, PrismicText } from "@prismicio/react";
import Image from "next/image";

const BannerSlice = ({ slice }) => (
  <section className="relative bg-neutral-600 text-white">
    <div className="pointer-events-none absolute inset-0">
      <Image
        src={slice.primary.background.url}
        alt={slice.primary.background.alt}
        layout="fill"
        objectFit="cover"
        className="select-none"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />
    </div>
    <div className="relative grid w-full justify-items-center gap-6 px-6 py-40 text-center">
      <h2 className="text-5xl font-black md:text-7xl">
        <PrismicText field={slice.primary.title} />
      </h2>
      <div className="max-w-lg leading-relaxed md:text-lg">
        <PrismicRichText field={slice.primary.description} />
      </div>
      <PrismicLink
        field={slice.primary.link}
        className="rounded-md bg-white px-10 py-2 font-bold text-neutral-700 transition hover:bg-neutral-300"
      >
        {slice.primary.linkLabel}
      </PrismicLink>
    </div>
  </section>
);

export default BannerSlice;
