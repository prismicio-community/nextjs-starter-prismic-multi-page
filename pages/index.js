import { Client } from '../utils/prismicHelpers'
import { SliceZone } from '@prismicio/react'

import Layout from './../components/Layout'
import * as Slices from '../slices'

const Home = (props) => {
  return (
    <Layout menu={props.menu} doc={props.doc}>
      <SliceZone
        slices={props.slices}
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
  const doc = (await Client().getSingle('home-page')) || null

  return {
    props: {
      doc: doc,
      slices: doc.data.slices,
    },
  }
}

export default Home
