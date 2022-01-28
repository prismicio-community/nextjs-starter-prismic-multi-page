import React from 'react'
import { PrismicLink, PrismicText } from '@prismicio/react'

export const FeaturedImage = ({ slice }) => (
  <section className="highlight container">
    <div>
      <PrismicText field={slice.primary.title} />
      <PrismicText field={slice.primary.headline} />
      <p>
        <PrismicLink field={slice.primary.link}>
          <span>{slice.primary.linkLabel}</span>
        </PrismicLink>
      </p>
    </div>
    <div>
      <img
        src={slice.primary.featuredImage.url}
        alt={slice.primary.featuredImage.alt}
      />
    </div>
    <style jsx>{`
      .highlight {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 25px;
      }
      @media (max-width: 767px) {
        .highlight {
          grid-template-columns: 1fr;
        }
      }
      `}</style>
  </section>
)
