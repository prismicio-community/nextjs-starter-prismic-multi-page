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
            key={prismicH.asText(item.itemTitle)}
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
    <style jsx>{`
      .image-gallery {
        margin-bottom: 3.75rem;
        padding: 20px;
        color: #72767b;
        font-family: "Lato", sans-serif;
        font-size: 16px;
        font-weight: 400;
        letter-spacing: 0.4;
        line-height: 28px;
      }
      .gallery {
        display: -webkit-box; /* OLD - iOS 6-, Safari 3.1-6, BB7 */
        display: -ms-flexbox; /* TWEENER - IE 10 */
        display: -webkit-flex; /* NEW - Safari 6.1+. iOS 7.1+, BB10 */
        display: flex;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
        -webkit-justify-content: space-between;
        justify-content: space-between;
      }
      .gallery-item-default-slice {
        -webkit-box-flex: 0 1 48%;
        -moz-box-flex: 0 1 48%;
        -webkit-flex: 0 1 48%;
        -ms-flex: 0 1 48%;
        flex: 0 1 48%;
      }
      .gallery-item-3ColumnGrid {
        -webkit-box-flex: 0 1 33%;
        -moz-box-flex: 0 1 33%;
        -webkit-flex: 0 1 33%;
        -ms-flex: 0 1 33%;
        flex: 0 1 33%;
      }
      .gallery-link {
        margin-top: -20px;
        text-transform: uppercase;
      }
      .gallery img {
        margin-bottom: 1rem;
      }
      @media (max-width: 767px) {
        .image-gallery {
          margin-bottom: 2rem;
        }
        .gallery-item {
          -webkit-box-flex: 100%;
          -moz-box-flex: 100%;
          -webkit-flex: 100%;
          -ms-flex: 100%;
          flex: 100%;
        }
      }
    `}</style>
  </section>
);

export default ImageGallery;
