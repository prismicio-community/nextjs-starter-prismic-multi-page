import { PrismicLink, PrismicText } from "@prismicio/react";
import Image from "next/image";

const FeaturedImage = ({ slice }) => (
  <section className="bg-white px-6 py-12 md:py-16">
    <div className="mx-auto grid max-w-5xl items-start gap-8 md:grid-cols-2 md:gap-12">
      <div className="grid gap-2 md:gap-4">
        <h2 className="text-3xl font-bold leading-snug">
          <PrismicText field={slice.primary.title} />
        </h2>
        <h3 className="leading-relaxed text-neutral-600">
          <PrismicText field={slice.primary.headline} />
        </h3>
        <p>
          <PrismicLink field={slice.primary.link} className="underline">
            {slice.primary.linkLabel}
          </PrismicLink>
        </p>
      </div>
      <div>
        <Image
          src={slice.primary.featuredImage.url}
          alt={slice.primary.featuredImage.alt}
          width={slice.primary.featuredImage.dimensions.width}
          height={slice.primary.featuredImage.dimensions.height}
          layout="responsive"
        />
      </div>
    </div>
  </section>
);

export default FeaturedImage;
