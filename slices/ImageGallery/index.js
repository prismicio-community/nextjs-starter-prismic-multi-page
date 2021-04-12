import React from 'react'
import { RichText } from 'prismic-reactjs'
import { Link } from 'prismic-reactjs'

const ImageGallery = ({ slice }) => (
  <section className="image-gallery container">
    <RichText render={slice.primary.galleryTitle} />
    <div className="gallery">
      { slice?.items?.map((item, i) =>
        <div key={i} className="gallery-item">
          <img
            src={item.image.url}
            alt={item.image.alt}
          />
          <RichText render={item.imageDescription}/>
          <p>
            <a className="gallery-link" href={Link.url(item.link)}>
              <span>{item.linkLabel}</span>
            </a>
          </p>
        </div>
      )}
    </div>
    <style jsx>{
      `
      .image-gallery {
        margin-bottom: 3.75rem;
        padding: 20px;
        color: #72767b;
        font-family: 'Lato', sans-serif;
        font-size: 16px;
        font-weight: 400;
        letter-spacing: 0.4;
        line-height: 28px;
      }
      .gallery {
        display: -webkit-box;  /* OLD - iOS 6-, Safari 3.1-6, BB7 */
        display: -ms-flexbox;  /* TWEENER - IE 10 */
        display: -webkit-flex; /* NEW - Safari 6.1+. iOS 7.1+, BB10 */
        display: flex;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
        -webkit-justify-content: space-between; 
        justify-content: space-between; 
      }
      .gallery-item {
        -webkit-box-flex: 0 1 48%;
        -moz-box-flex:  0 1 48%;
        -webkit-flex:  0 1 48%;
        -ms-flex:  0 1 48%;
        flex: 0 1 48%;
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
          -moz-box-flex:  100%;
          -webkit-flex:  100%;
          -ms-flex:  100%;
          flex: 100%;
        }
      }
      `
    }</style>
  </section>
)

export default ImageGallery