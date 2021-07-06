import React from 'react';
import { RichText } from 'prismic-reactjs';

const TextSlice = ({ slice }) => (
  <section className={`container ${ slice.variation }`}>
    <RichText render={slice.primary.text} />
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

export default TextSlice;