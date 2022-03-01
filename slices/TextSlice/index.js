import React from "react";
import { PrismicRichText } from "@prismicio/react";

export const TextSlice = ({ slice }) => (
  <section className={`container ${slice.variation}`}>
    <PrismicRichText field={slice.primary.text} />
    <style jsx>{`
      .default-slice {
        column-count: 1;
      }
      .twoColumn {
        column-count: 2;
      }
    `}</style>
  </section>
);
