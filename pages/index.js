import React from 'react'
import { SliceZone } from '@prismicio/react'
import { client } from 'prismicio'

import Layout from 'components/Layout'
import * as Slices from 'slices'

const Home = (props) => {
  return (
    <Layout menu={props.menu} doc={props.doc}>
      <SliceZone
        slices={props.doc.data.slices}
        components={{
          banner_slice: Slices.BannerSlice,
          featured_image: Slices.FeaturedImage,
          full_width_image: Slices.FullWidthImage,
          image_gallery: Slices.ImageGallery,
          text_slice: Slices.TextSlice,
          quote_slice: Slices.QuoteSlice,
        }}
      />
    </Layout>
  )
}

export async function getStaticProps() {
  const doc = await client.getSingle('home-page')

  return {
    props: {
      doc: doc,
    },
  }
}

export default Home
