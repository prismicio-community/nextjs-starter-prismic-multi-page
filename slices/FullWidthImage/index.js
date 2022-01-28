import React from 'react';

export const FullWidthImage = ({ slice }) => (
  <section className="container">
    <img src={slice.primary.image.url} alt={slice.primary.image.alt} />
  </section>
);
