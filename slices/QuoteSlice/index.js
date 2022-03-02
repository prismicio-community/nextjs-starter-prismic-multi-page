import { PrismicText } from "@prismicio/react";

const QuoteSlice = ({ slice }) => (
  <section className="bg-white px-8 py-12 md:py-16">
    <figure className="mx-auto grid max-w-5xl gap-4">
      <blockquote className="text-center font-serif text-3xl italic leading-relaxed md:text-4xl md:leading-relaxed">
        <span
          aria-hidden={true}
          className="pointer-events-none select-none text-5xl text-neutral-200"
        >
          &ldquo;
        </span>
        <PrismicText field={slice.primary.quotetext} />
        <span
          aria-hidden={true}
          className="pointer-events-none select-none text-5xl text-neutral-200"
        >
          &rdquo;
        </span>
      </blockquote>
      {slice.variation === "quoteReference" && (
        <figcaption className="text-right text-neutral-400">
          <span aria-hidden={true}>&mdash;</span>
          <cite>
            <PrismicText field={slice.primary.reference} />
          </cite>
        </figcaption>
      )}
    </figure>
  </section>
);

export default QuoteSlice;
