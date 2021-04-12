import React from 'react';
import { RichText } from 'prismic-reactjs';

const TextSlice = ({ slice }) => (
  <section className="container">
    <RichText render={slice.primary.text} />
  </section>
);

export default TextSlice;
