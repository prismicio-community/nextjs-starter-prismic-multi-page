import { PrismicLink, PrismicText, PrismicRichText } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";
import Image from "next/image";

const ImageGallery = ({ slice }) => (
  <section className="bg-white px-6 py-12 md:py-16">
    <div className="mx-auto max-w-5xl">
      <h2 className="mb-4 text-3xl font-bold leading-snug">
        <PrismicText field={slice.primary.galleryTitle} />
      </h2>
      <div className="grid grid-cols-2 gap-y-8 gap-x-5 md:gap-x-8">
        {slice?.items?.map((item) => (
          <div
            key={item.image.url}
            className="grid gap-4 md:gap-6"
          >
            <Image
              src={item.image.url}
              alt={item.image.alt}
              width={item.image.dimensions.width}
              height={item.image.dimensions.height}
              layout="responsive"
            />
            <div className="leading-relaxed text-neutral-600">
              <PrismicRichText field={item.imageDescription} />
            </div>
            <p>
              <PrismicLink field={item.link} className="underline">
                {item.linkLabel}
              </PrismicLink>
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ImageGallery;
