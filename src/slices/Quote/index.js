import * as prismic from "@prismicio/client";
import { PrismicText } from "@prismicio/react";
import clsx from "clsx";

import { Bounded } from "@/components/Bounded";

const Quote = ({ slice }) => {
  return (
    <Bounded as="section" className="bg-white">
      {prismic.isFilled.richText(slice.primary.quote) && (
        <figure className="grid gap-6">
          <blockquote>
            <p
              className={clsx(
                "text-4xl font-medium leading-tight md:text-5xl md:leading-tight",
                !prismic.isFilled.keyText(slice.primary.source) && "text-center"
              )}
            >
              <span className="-ml-3.5 select-none text-slate-400 md:-ml-5">
                &ldquo;
              </span>
              <PrismicText field={slice.primary.quote} />
              <span className="select-none text-slate-400">&rdquo;</span>
            </p>
          </blockquote>
          {prismic.isFilled.keyText(slice.primary.source) && (
            <figcaption className="text-right">
              &mdash; {slice.primary.source}
            </figcaption>
          )}
        </figure>
      )}
    </Bounded>
  );
};

export default Quote;
